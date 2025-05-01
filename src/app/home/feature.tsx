import { Cpu, Eye, Heart, Brain, HandIcon as Arm, ShieldCheck, ChevronRight } from "lucide-react"

export const Feature = () => (
  <section id="products" className="py-20 bg-zinc-950">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
            <span className="text-cyan-500">Medical Technology</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Advanced Prosthetic Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Our catalog of medical-grade assistive technologies, designed to
            improve quality of life.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <Eye className="h-10 w-10 text-cyan-500" />,
            title: "Advanced Vision Systems",
            description:
              "High-definition visual prosthetics with enhanced clarity and digital assistance features.",
          },
          {
            icon: <Arm className="h-10 w-10 text-purple-500" />,
            title: "Prosthetic Limbs",
            description:
              "Next-generation artificial limbs with improved mobility, comfort, and natural movement.",
          },
          {
            icon: <Heart className="h-10 w-10 text-red-500" />,
            title: "Cardiac Assistive Devices",
            description:
              "Reliable heart support systems with extended battery life and remote monitoring capabilities.",
          },
          {
            icon: <Brain className="h-10 w-10 text-green-500" />,
            title: "Cognitive Interfaces",
            description:
              "Assistive technology that helps improve focus, memory, and digital device interaction.",
          },
          {
            icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
            title: "Protective Implants",
            description:
              "Medical-grade implants that help regulate body temperature and provide structural support.",
          },
          {
            icon: <Cpu className="h-10 w-10 text-yellow-500" />,
            title: "Biometric Monitors",
            description:
              "Wearable and implantable health tracking systems for comprehensive health management.",
          },
        ].map((product, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900"
          >
            <div className="mb-4">{product.icon}</div>
            <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
            <p className="text-zinc-400">{product.description}</p>
            <div className="mt-4 flex items-center text-cyan-500">
              <span className="text-sm font-medium">Learn more</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
