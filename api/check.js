export default async function handler(req, res) {
  try {
    const mobile = req.query.mobile;

    if (!mobile) {
      return res.status(400).json({ error: "No mobile" });
    }

    const response = await fetch(
      "https://jm101.com/jiomartcoupon/getR1Points?mobile=" + mobile
    );

    const text = await response.text(); // ⚠️ IMPORTANT

    // 👇 return raw API response (no parsing issues)
    res.status(200).send(text);

  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
}
