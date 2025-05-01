import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

export const Footer = () => (
  <>
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-900/0 to-transparent"></div>
          <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:p-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Evolve Beyond Human?
              </h2>
              <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed">
                Schedule a consultation with our enhancement specialists to
                discuss your upgrade options.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="enhancement"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Enhancement Interest
                  </label>
                  <select
                    id="enhancement"
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select enhancement type</option>
                    <option value="optical">Optical Systems</option>
                    <option value="limb">Limb Replacements</option>
                    <option value="cardiac">Cardiac Systems</option>
                    <option value="neural">Neural Interfaces</option>
                    <option value="dermal">Dermal Armor</option>
                    <option value="processing">Processing Units</option>
                  </select>
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                  Request Information
                </Button>
              </div>
              <p className="text-xs text-zinc-500">
                By submitting this form, you agree to our terms and privacy
                policy. All enhancements require medical screening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-cyan-500" />
              <span className="text-xl font-bold tracking-tighter">
                CYBERNETICA
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Pioneering the future of human enhancement through cutting-edge
              cyborg technology.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map(
                (social) => (
                  <div
                    key={social}
                    className="h-8 w-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center"
                  >
                    <span className="sr-only">{social}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Products</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "Optical Systems",
                "Limb Replacements",
                "Cardiac Systems",
                "Neural Interfaces",
                "Dermal Armor",
                "Processing Units",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "About Us",
                "Careers",
                "Press",
                "News",
                "Contact",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "Licensing",
                "Enhancement Warranty",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Cybernetica Inc. All rights reserved.
            Military-grade technology for civilian use.
          </p>
        </div>
      </div>
    </footer>
  </>
);
