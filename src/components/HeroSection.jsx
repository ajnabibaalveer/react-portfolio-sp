import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Shivanand
            </span>
            <span className="block md:inline text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              Prajapati
            </span>
          </h1>


          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build sleek, responsive web interfaces using modern front-end technologies — blending design and functionality to deliver standout digital experiences. I specialize in turning ideas into interactive, visually stunning websites, crafting unforgettable user experiences with cutting-edge tools and clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact"
              className="cosmic-button">
              Contact Me
            </a>

            <a
              href="public/Shivanand_Resume.pdf" download
              className="cosmic-button-outline"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce max-sm:hidden">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
