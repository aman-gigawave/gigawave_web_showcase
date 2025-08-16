import { addDoc, collection, Timestamp } from "firebase/firestore";
import { InquirySchema } from "@/models/schemas";
import { db } from "@/lib/firebase";


export const runtime = "edge";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = InquirySchema.safeParse(body);

    if (!parsedData.success) {
      return new Response(
        JSON.stringify({
          error: "Validation Error",
          details: parsedData.error.errors,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = {
      ...parsedData.data,
      createdAt: Timestamp.now(),
    };
    console.log({ data });

    const docRef = await addDoc(collection(db, "inquiries"), data);

    return new Response(
      JSON.stringify({
        id: docRef.id,
        message: "Inquiry submitted successfully",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Firestore Error:", error);
    return new Response(JSON.stringify({ error: "Failed to submit inquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
