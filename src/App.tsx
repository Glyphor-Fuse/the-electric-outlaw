import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Lineup } from "@/components/Lineup";
import { FloorPlan } from "@/components/FloorPlan";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { DanceLessons } from "@/components/DanceLessons";
import { ContactFooter } from "@/components/ContactFooter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-center" richColors />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navbar />
          <Hero />
          <Lineup />
          <FloorPlan />
          <Menu />
          <Gallery />
          <DanceLessons />
          <ContactFooter />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
