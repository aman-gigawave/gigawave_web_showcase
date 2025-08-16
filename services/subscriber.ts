import { SubscribeType } from "@/models/schemas";
import axios from "axios";

export const subscribe = async (formData: SubscribeType) => {
  try {
    const response = await axios.post("/api/subscribe", formData, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Submission Error:", error);
    throw error;
  }
};
