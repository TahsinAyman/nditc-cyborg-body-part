import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

export const Header = () => (
  <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
    <div className="container pl-4 flex h-16 items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <Cpu className="h-6 w-6 text-cyan-500" />
        <span className="text-xl font-bold tracking-tighter">CYBERNETICA</span>
      </a>
      <nav className="hidden md:flex gap-6">
        <a
          href="/products"
          className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          Products
        </a>
        <a
          href="/#benefits"
          className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          Benefits
        </a>
        <a
          href="/#testimonials"
          className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          Testimonials
        </a>
        <a
          href="/about"
          className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          About Us
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden sm:flex border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
        >
          Log in
        </Button>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
          Get Started
        </Button>
      </div>
    </div>
  </header>
);
