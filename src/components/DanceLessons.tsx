import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

const LESSONS = [
  { day: "Tuesday", time: "7:00 PM", style: "Two-Step Basics", level: "Beginner" },
  { day: "Thursday", time: "6:30 PM", style: "Line Dancing Hits", level: "All Levels" },
  { day: "Saturday", time: "2:00 PM", style: "Western Swing", level: "Intermediate" },
];

export function DanceLessons() {
  return (
    <section id="lessons" className="py-24 bg-background">
      <div className="container px-4">
        <div className="bg-card border border-primary/20 rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img src="/images/dance-lesson.png" alt="Dance lessons" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-primary/20 backdrop-grayscale-[0.5]" />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <Badge className="w-fit mb-6 bg-primary text-foreground font-bold uppercase tracking-wider">Dance School</Badge>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">SHARPEN YOUR BOOTS</h2>
              <div className="space-y-6">
                {LESSONS.map((lesson, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                    <div>
                      <h4 className="font-bold text-foreground">{lesson.day}: {lesson.style}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock size={14}/> {lesson.time}</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users size={14}/> {lesson.level}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">Free</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DanceLessons;
