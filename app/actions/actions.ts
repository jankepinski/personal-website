"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleSubmit = async (_: any, formData: FormData) => {
  try {
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      return { error: "Please fill in all fields." };
    }
    const { error } = await resend.emails.send({
      from: `${formData.get("name")}@resend.dev`,
      to: process.env.EMAIL!,
      subject: `${formData.get("name")} <${formData.get("email")}>`,
      text: formData.get("message") as string,
    });
    if (error) {
      throw new Error();
    }
    return { message: "Message sent successfully." };
  } catch (error) {
    return {
      error: "Error occured while sending message. Please try again later.",
    };
  }
};
