import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";

const GALLERY_CARDS = [
  {
    category: "The Stage",
    title: "High Voltage Performances",
    src: "/images/stage.png",
  },
  {
    category: "Dance Floor",
    title: "Full Throttle Honky Tonk",
    src: "/images/dance.png",
  },
  {
    category: "The Bar",
    title: "Craft & Classic",
    src: "/images/bar.png",
  },
  {
    category: "VIP Experience",
    title: "Premium Reserved Seating",
    src: "/images/vip.png",
  },
  {
    category: "Vibe",
    title: "Modern Outlaw Energy",
    src: "/images/neon.png",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/10">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">THE VIEW FROM THE WILD SIDE</h2>
          <p className="text-muted-foreground">Catch a glimpse of the nightly madness at The Outlaw.</p>
        </div>
        <AppleCardsCarousel items={GALLERY_CARDS.map((card, index) => (
          <div key={index} className="relative group overflow-hidden rounded-3xl h-[400px] w-[300px] md:w-[400px]">
             <img src={card.src} alt={card.title} className="object-cover w-full h-full" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{card.category}</p>
                <h3 className="text-foreground text-2xl font-bold">{card.title}</h3>
             </div>
          </div>
        ))} />
      </div>
    </section>
  );
}

export default Gallery;
