'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (str: unknown, maxLength: number) => {
  if (!str || typeof str !== 'string' || str.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  //Server-side validation
  if (!validateString(senderEmail, 50) || !validateString(message, 5000)) {
    return { error: 'Invalid input' };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'arleguidaniel@gmail.com',
      subject: 'Message from Portfolio Website',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
};
