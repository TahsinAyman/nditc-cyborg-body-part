import { Cpu, Users, Target, Shield } from "lucide-react";

export const AboutPage = () => (
  <div>


    {/* Company Description */}
    <section className="py-12 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-zinc-400 mb-4">
            Cybernetica was founded in 2035 by a team of medical researchers and
            engineers with a shared vision: to create advanced prosthetic
            solutions that not only replace lost functionality but enhance human
            capabilities.
          </p>
          <p className="text-zinc-400 mb-4">
            What began as a small research lab has grown into a global leader in
            enhancement technology, with our products helping thousands of
            people overcome limitations and achieve new possibilities.
          </p>
          <p className="text-zinc-400">
            Today, we continue to push the boundaries of what's possible,
            developing cutting-edge solutions that seamlessly integrate with the
            human body while maintaining our commitment to safety,
            accessibility, and ethical innovation.
          </p>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-12 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-zinc-400 mb-6">
            To develop and provide accessible enhancement technologies that
            improve quality of life, extend human capabilities, and open new
            possibilities for human achievement.
          </p>
          <div className="inline-flex h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
        </div>
      </div>
    </section>

    {/* Core Values - Simplified */}
    <section className="py-12 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {[
            {
              title: "Innovation",
              description: "Pushing the boundaries of what's possible",
              icon: <Target className="h-8 w-8 text-cyan-500" />,
            },
            {
              title: "Safety",
              description: "Meeting the highest safety standards",
              icon: <Shield className="h-8 w-8 text-purple-500" />,
            },
            {
              title: "Accessibility",
              description: "Technology for all who need it",
              icon: <Users className="h-8 w-8 text-cyan-500" />,
            },
            {
              title: "Integrity",
              description: "Transparency in all our practices",
              icon: <Cpu className="h-8 w-8 text-purple-500" />,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg border border-zinc-800 bg-zinc-900/50"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
              <p className="text-sm text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
