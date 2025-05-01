import testimonials from "@/assets/data/testimonial.json";

export const Testimonial = () => (
  <section id="testimonials" className="py-20 bg-zinc-950">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
            <span className="text-cyan-500">Client Stories</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Enhanced Lives, Enhanced Testimonials
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Hear from our clients who have experienced the transformative power
            of our cyborg enhancements.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <div className="mb-4 text-cyan-500">★★★★★</div>
            <blockquote className="mb-6 text-zinc-300">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-zinc-400">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
