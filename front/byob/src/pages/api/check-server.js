export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.SPRING_PRIVATE_DNS_URL);
    const data = await response.json();
    res.status(200).json({ data: data.data });
  } catch (error) {
    res.status(500).json({ data: "아쉽게도 연결 안되었넹 ㅠ." });
  }
}
