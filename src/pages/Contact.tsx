import { useState } from "react";
import { Mail, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Fractional CFO",
  "Controllership",
  "SEDAR+ / Regulatory Filing",
  "Board Reporting (Power BI)",
  "FP&A & Forecasting",
  "Accounting System Migration",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Request received", description: "We'll respond within one business day." });
    (e.target as HTMLFormElement).reset();
    setSelected([]);
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-teal/60 focus:bg-white/10 transition-colors text-[15px]";

  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=85"
        eyebrow="Get in Touch"
        title={<>Let's Discuss Your <span className="text-gradient-teal">Public Company's</span> Financial Needs</>}
        subtitle="Free 30-minute consultation. Confidential and no obligation."
      />

      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <Reveal>
            <div className="bg-gradient-card rounded-3xl p-8 lg:p-10 border border-white/5">
              <p className="label-eyebrow text-teal">Book Your Consultation</p>
              <h2 className="mt-2 font-display font-bold text-white text-[26px] sm:text-[32px]">Tell Us About Your Company</h2>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full Name *" className={inputCls} />
                  <input required name="company" placeholder="Company Name *" className={inputCls} />
                </div>
                <div className="grid sm:grid-cols-1 gap-4">
                  <input required type="email" name="email" placeholder="Email *" className={inputCls} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select name="exchange" className={inputCls} defaultValue="">
                    <option value="" disabled>Exchange Listed On</option>
                    {["TSX-V", "CSE", "NEO", "OTC", "Pre-IPO", "Other"].map((o) => <option key={o} className="bg-bg-secondary">{o}</option>)}
                  </select>
                  <select name="cap" className={inputCls} defaultValue="">
                    <option value="" disabled>Market Cap Range</option>
                    {["Under $10M", "$10M–$50M", "$50M–$200M", "$200M+"].map((o) => <option key={o} className="bg-bg-secondary">{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block label-eyebrow text-teal mb-3">Services You're Interested In</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {services.map((s) => {
                      const active = selected.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className={`text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${
                            active
                              ? "bg-teal/15 border-teal/50 text-white"
                              : "bg-white/5 border-white/10 text-white/70 hover:border-teal/30"
                          }`}
                        >
                          <span className={`inline-block w-4 h-4 rounded border mr-2 align-middle ${active ? "bg-teal border-teal" : "border-white/30"}`} />
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <textarea name="message" placeholder="Tell us briefly about your situation" rows={5} className={inputCls} />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-muted-foreground text-[13px]">
                  🔒 Confidential · Response within one business day
                </p>
              </form>
            </div>
          </Reveal>

          {/* Right column */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="bg-gradient-card rounded-2xl p-7 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-teal" />
                  <h3 className="font-display font-bold text-white text-[18px]">Book Directly</h3>
                </div>
                <p className="text-muted-foreground text-[14px]">
                  Prefer to skip the form? Pick a time that works for you.
                </p>
                <a
                  href="https://app.usemotion.com/meet/ankit/discovery"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block text-center w-full px-5 py-3.5 rounded-full bg-white text-[#0D1829] font-display font-bold transition-all hover:-translate-y-0.5"
                >
                  Open Calendar →
                </a>
              </div>

              <div className="bg-gradient-card rounded-2xl p-7 border border-white/5 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Office</div>
                    <div className="text-white text-[15px]">901 Guelph Line<br />Burlington, ON L7R 3N8</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Email</div>
                    <a href="mailto:info@6ixfinance.com" className="text-white text-[15px] hover:text-teal-bright">info@6ixfinance.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Response Time</div>
                    <div className="text-white text-[15px]">Within one business day</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
                <iframe
                  title="6ixFinance Office"
                  src="https://www.google.com/maps?q=901+Guelph+Line,+Burlington,+ON&output=embed"
                  className="w-full h-full grayscale-[0.4] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
