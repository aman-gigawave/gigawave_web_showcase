import { InquiryType } from "@/models/schemas";
import axios from "axios";

export const sendMessage = async (formData: InquiryType) => {
  try {
    const response = await axios.post("/api/inquiries/add", formData, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Submission Error:", error);
    throw error;
  }
};
