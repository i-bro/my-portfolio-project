export const emailService = {
  init() {
    emailjs.init("i5pbjKjhrlUOqYLRa");
  },

  async sendContactEmail(formElement) {
    try {
      const response = await emailjs.sendForm(
        "service_ddbphi1",
        "template_ukxn1zn",
        formElement,
      );
      return { success: true, response };
    } catch (error) {
      console.error("Email Error:", error);
      return { success: false, error };
    }
  },
};
