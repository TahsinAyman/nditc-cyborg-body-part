import { Hero } from "./home/hero";
import { Feature } from "./home/feature";
import { Benefits } from "./home/benefits";
import { Testimonial } from "./home/testimonial";

export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <Hero />
        <Feature />
        <Benefits />
        <Testimonial />
      </main>
    </div>
  );
}
