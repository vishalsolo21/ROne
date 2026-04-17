export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { mobile } = req.query;

  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({ status: "error" });
  }

  try {
    const response = await fetch(`https://jm101.com/jiomartcoupon/getR1Points?mobile=${mobile}`, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    if (data.message === "") {
      return res.status(200).json({ status: "not_found" });
    } else {
      return res.status(200).json({ status: "registered" });
    }

  } catch (error) {
    return res.status(500).json({ status: "error" });
  }
}
