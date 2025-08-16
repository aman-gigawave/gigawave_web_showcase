import z from "zod";
export const InquirySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  phone: z.string(),
  services: z.array(z.string()),
});

export type InquiryType = z.infer<typeof InquirySchema>;

export type FirestoreInquiry = InquiryType & {
  id?: string;
  createdAt: Date;
};

export const SubscribeSchema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof SubscribeSchema>;

export type FirestoreSubscribe = SubscribeType & {
  id?: string;
  createdAt: Date;
};
