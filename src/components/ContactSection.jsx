import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    console.log("object", form)
    try {
      const result = await emailjs.sendForm(
        "service_3jr41tm", // e.g., "service_xxx"
        "template_sxuheyd", // e.g., "template_xxx"
        form,
        "NCfOZUoDse3wRQOgy" // e.g., "public_xxx"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        position: "top-right",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        position: "top-right",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or looking to collaborate? I'm always open to new ideas and opportunities — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium">E-mail</h4>
                  <div className="text-muted-foreground space-y-1">
                    <a
                      href="mailto:shivanandp290@gmail.com"
                      className="hover:text-primary transition-colors break-all"
                    >
                      shivanandp290@gmail.com
                    </a>
                    <br />
                    <a
                      href="mailto:shivananddeveloper@gmail.com"
                      className="hover:text-primary transition-colors break-all"
                    >
                      shivananddeveloper@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917983789849"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7983789849
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Follow me on</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/shivanand-prajapati-541302201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative cosmic-icon"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/shivanandprajapatinayak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative cosmic-icon"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>

          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                  Name
                </label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Please enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                  Email
                </label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-left">
                  Mobile
                </label>
                <div className="flex items-center">
                  <span className="h-12 px-2 flex items-center border border-r-0 rounded-l-md bg-muted text-sm text-muted-foreground">
                    +91
                  </span>
                  <input type="tel" id="mobile" name="mobile" required pattern="[0-9]{10}" maxLength={10}
                    title="Enter only 10 digits"
                    className="h-12 w-full px-4 py-2 rounded-r-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                  Message
                </label>
                <textarea id="message"  name="message" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer")}
              >
                {isSubmitting ? "Sending..." : "Send"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
