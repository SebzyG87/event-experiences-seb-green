import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-amber transition-colors text-sm mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Policies &amp; <span className="gradient-gold-text">Terms</span>
          </h1>
          <p className="text-muted-foreground mb-16">
            Last updated: February 2026. Please read these carefully before booking.
          </p>

          {/* Terms of Service */}
          <section className="glass-gold rounded-3xl p-8 md:p-10 border border-gold/20 mb-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Terms of Service
            </h2>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-foreground font-semibold mb-2">1. Booking &amp; Confirmation</h3>
                <p>
                  All bookings are provisional until a signed agreement and deposit have been received.
                  A non-refundable deposit of 25% of the total fee is required to secure your date.
                  The remaining balance is due no later than 14 days before the event.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">2. Cancellation Policy</h3>
                <p>
                  Cancellations made more than 60 days before the event will forfeit the deposit only.
                  Cancellations made between 30–60 days before the event will incur a charge of 50% of the total fee.
                  Cancellations made fewer than 30 days before the event will incur the full fee.
                  Should we need to cancel due to unforeseen circumstances, a full refund (including deposit) will be issued.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">3. Event Changes &amp; Rescheduling</h3>
                <p>
                  Date changes are accommodated subject to availability at no extra charge, provided at
                  least 30 days' notice is given. Changes to event requirements (duration, additional
                  services) may affect the final price and will be confirmed in writing.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">4. Equipment &amp; Venue Requirements</h3>
                <p>
                  We require access to a standard UK mains power supply (minimum 13A socket per unit of equipment).
                  The venue must provide a safe, dry, and covered area for all equipment.
                  Any damage to our equipment caused by guests or venue conditions will be charged at replacement cost.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">5. Performance &amp; Conduct</h3>
                <p>
                  We reserve the right to cease performance if the safety of our team or equipment is
                  compromised. Music volume may be adjusted to comply with venue regulations or licensing
                  requirements. We carry full public liability insurance (£10M cover).
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">6. Photography, Film &amp; Deliverables</h3>
                <p>
                  Edited photo galleries are typically delivered within 14 working days. Highlight films
                  are delivered within 28 working days. AI-enhanced fast-track delivery is available as
                  an add-on. We retain copyright of all images and footage; clients receive a full
                  personal-use licence. Images may be used in our portfolio unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">7. Live Streaming</h3>
                <p>
                  We provide the streaming equipment and platform link. A stable internet connection
                  (minimum 10 Mbps upload) must be available at the venue. We are not liable for
                  interruptions caused by the venue's internet connectivity.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">8. Liability</h3>
                <p>
                  Our total liability is limited to the total fee paid for the event. We are not liable
                  for any indirect or consequential losses. Force majeure events (severe weather, travel
                  disruption, government restrictions) release both parties from obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="glass-gold rounded-3xl p-8 md:p-10 border border-gold/20 mb-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Privacy Policy
            </h2>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-foreground font-semibold mb-2">Information We Collect</h3>
                <p>
                  We collect personal information you provide when making an enquiry or booking,
                  including your name, email address, phone number, event details, and venue address.
                  We may also collect images and footage of you and your guests during events.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">How We Use Your Information</h3>
                <p>
                  Your data is used to process bookings, communicate about your event, deliver services,
                  and send relevant updates. We will never sell your personal data to third parties.
                  Event imagery may be used in our portfolio and social media unless you opt out in writing.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">Data Storage &amp; Security</h3>
                <p>
                  Personal data is stored securely and retained for up to 6 years for tax and legal
                  purposes. Event media is stored on encrypted cloud servers. You may request deletion
                  of your data at any time by contacting us.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">Your Rights (UK GDPR)</h3>
                <p>
                  Under UK data protection law, you have the right to access, correct, or delete your
                  personal data. You may also object to processing or request data portability.
                  To exercise these rights, email{" "}
                  <a href="mailto:workwithsebgreen@gmail.com" className="text-gold hover:text-amber transition-colors">
                    workwithsebgreen@gmail.com
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-2">Cookies</h3>
                <p>
                  This website uses essential cookies only to ensure functionality. We do not use
                  tracking or advertising cookies.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="glass-gold rounded-3xl p-8 md:p-10 border border-gold/20">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Refund Policy
            </h2>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Deposits are non-refundable. If we fail to deliver the agreed services, you are entitled
                to a proportional refund of the balance paid. Refunds are processed within 14 working days.
                Disputes should be raised in writing within 7 days of the event. We aim to resolve all
                concerns amicably and promptly.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policies;
