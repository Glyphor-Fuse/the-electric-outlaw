import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

const LINEUP_DATA = [
  {
    title: "Monday",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-primary">The Dusty Revolvers</h3>
        <p className="text-muted-foreground">Classic Country & Outlaw Anthems. Doors at 7 PM.</p>
        <div className="flex gap-2">
          <Badge variant="outline">Live Music</Badge>
          <Badge variant="outline">No Cover</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Wednesday",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-primary">Neon Moon Session</h3>
        <p className="text-muted-foreground">Modern Country hits with a high-energy twist. Doors at 8 PM.</p>
        <div className="flex gap-2">
          <Badge variant="outline">Ladies Night</Badge>
          <Badge variant="outline">DJ Afterparty</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Friday",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-primary">The Midnight Mavericks</h3>
        <p className="text-muted-foreground">Our resident high-voltage band. Pyro and pure country energy.</p>
        <div className="flex gap-2">
          <Badge variant="destructive" className="bg-primary text-foreground">VIP ONLY ACCESS</Badge>
          <Badge variant="outline">Late Night Grill</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Saturday",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-primary">Big Red & The Outlaws</h3>
        <p className="text-muted-foreground">The biggest party in Nashville. 4 hours of non-stop dance floor fillers.</p>
        <div className="flex gap-2">
          <Badge variant="outline">Sold Out Early</Badge>
          <Badge variant="outline">Dance Lessons</Badge>
        </div>
      </div>
    ),
  },
];

export function Lineup() {
  return (
    <section id="lineup" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">UPCOMING LINEUP</h2>
          <p className="text-muted-foreground">The best talent Nashville has to offer, every single night.</p>
        </div>
        <Timeline data={LINEUP_DATA} />
      </div>
    </section>
  );
}

export default Lineup;
