import { Clock, Cpu, ShieldCheck, Zap } from "lucide-react";
import image from "@/assets/benefits.jpg";

export const Benefits = () => (
  <section id="benefits" className="py-20 bg-black">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative mx-auto lg:order-last">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-xl"></div>
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <img
              src={image}
              alt="Cyborg enhancement benefits"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
              <span className="text-cyan-500">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Benefits Beyond Human Limitations
            </h2>
            <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed">
              Our enhancements don't just replace; they upgrade, offering
              capabilities beyond natural human potential.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: <Zap className="h-6 w-6 text-cyan-500" />,
                title: "Enhanced Performance",
                description:
                  "300-500% increase in strength, speed, and endurance compared to natural human capabilities.",
              },
              {
                icon: <Clock className="h-6 w-6 text-purple-500" />,
                title: "Extended Lifespan",
                description:
                  "Our parts outlast organic components by decades, with minimal maintenance required.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
                title: "Military-Grade Security",
                description:
                  "Encrypted neural interfaces and hack-proof firmware updates.",
              },
              {
                icon: <Cpu className="h-6 w-6 text-blue-500" />,
                title: "Seamless Integration",
                description:
                  "Our proprietary neural mapping ensures natural control and sensory feedback.",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
                  {benefit.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{benefit.title}</h3>
                  <p className="text-sm text-zinc-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
