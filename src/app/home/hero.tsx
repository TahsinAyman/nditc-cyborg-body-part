import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
    <div className="container relative z-10 mx-auto px-4 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-500"></span>
            <span className="text-zinc-400">The Future Is Now</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Upgrade Your Human Experience
          </h1>
          <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed">
            Premium cyborg enhancements designed to elevate human potential.
            Military-grade technology now available for civilian use.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              Browse Enhancements
            </Button>
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
            >
              Book Consultation
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="inline-block h-8 w-8 rounded-full border-2 border-black bg-zinc-800"
                ></div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-cyan-500">★★★★★</span> 4.9 rating
            </div>
            <div>10,000+ upgrades performed</div>
          </div>
        </div>
        <div className="relative mx-auto lg:ml-auto">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-xl"></div>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <img
              src={hero}
              alt="Cyborg arm enhancement"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
