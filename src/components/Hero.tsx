import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BlurText } from "@/components/ui/blur-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full">
      <BackgroundBeamsWithCollision className="h-full bg-background">
        <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 rounded-full border border-primary/30 bg-primary/10 px-6 py-4 backdrop-blur-sm">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Nashville's Premier Neon Honky Tonk
            </span>
          </div>
          <BlurText
            text="THE ELECTRIC OUTLAW"
            delay={0.1}
            animateBy="words"
            direction="top"
            className="font-display text-6xl font-black tracking-tighter text-foreground sm:text-8xl md:text-9xl"
          />
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Where rugged tradition meets high-voltage energy. Live music every night, 
            cold beer, and the best dance floor in the South.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg font-bold">
              BOOK A VIP BOOTH
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-8 text-lg font-bold">
              TONIGHT'S LINEUP
            </Button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}

export default Hero;
