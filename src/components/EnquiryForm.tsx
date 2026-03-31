import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type EnquiryData = z.infer<typeof enquirySchema>;

export const EnquiryForm = () => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof EnquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof EnquiryData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/8 rounded-full blur-[128px] pointer-events-none" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="glass-gold rounded-3xl p-12 text-center border border-gold/30">
            <CheckCircle size={48} className="text-gold mx-auto mb-6" />
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
              Thank You
            </h3>
            <p className="text-muted-foreground">
              The Lead Strategist will review your enquiry and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full bg-muted/20 border border-gold/15 rounded-2xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="enquiry" className="py-24 px-4 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Direct Enquiry
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Get in <span className="gradient-gold-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about your event and we'll craft a bespoke proposal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-gold rounded-3xl p-8 md:p-10 border border-gold/20 space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputClass}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1.5 pl-2">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputClass}
              maxLength={255}
            />
            {errors.email && <p className="text-destructive text-xs mt-1.5 pl-2">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject / Service of Interest"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className={inputClass}
              maxLength={200}
            />
            {errors.subject && <p className="text-destructive text-xs mt-1.5 pl-2">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              placeholder="Why are you enquiring?"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
              className={`${inputClass} resize-none`}
              maxLength={2000}
            />
            {errors.message && <p className="text-destructive text-xs mt-1.5 pl-2">{errors.message}</p>}
          </div>

          <Button variant="neon" size="xl" type="submit" className="w-full">
            <Send size={18} />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
