import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

export const sendContactEmail = async (formElement: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      formElement,
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};
