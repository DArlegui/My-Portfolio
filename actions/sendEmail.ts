'use server';
import ContactFormEmail from '@/email/ContactFormEmail';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
