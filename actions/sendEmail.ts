"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import { form } from "framer-motion/client";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: "pjmccrone@outlook.com",
			subject: "Message from Portfolio Contact Form",
			replyTo: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
