import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const orderData = req.body;
      console.log("Received order:", orderData);
      res
        .status(200)
        .json({ success: true, message: "Order received successfully." });
    } catch (error) {
      console.error("Error processing order:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to process the order." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
