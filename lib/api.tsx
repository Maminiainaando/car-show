interface ContactFormData {
    idCar?: string;
    name: string;
    firstName: string;
    contact: string;
    subject: string;
    email: string;
    message: string;
  }
  
  export const sendContactForm = async (data: ContactFormData): Promise<any> =>
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });
  