import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const BOOTHS = [
  { id: 'V1', type: 'Diamond VIP', price: '$500', capacity: 8, status: 'available' },
  { id: 'V2', type: 'Diamond VIP', price: '$500', capacity: 8, status: 'reserved' },
  { id: 'P1', type: 'Platinum Booth', price: '$350', capacity: 6, status: 'available' },
  { id: 'P2', type: 'Platinum Booth', price: '$350', capacity: 6, status: 'available' },
  { id: 'P3', type: 'Platinum Booth', price: '$350', capacity: 6, status: 'available' },
  { id: 'S1', type: 'Standard Booth', price: '$200', capacity: 4, status: 'available' },
  { id: 'S2', type: 'Standard Booth', price: '$200', capacity: 4, status: 'reserved' },
  { id: 'S3', type: 'Standard Booth', price: '$200', capacity: 4, status: 'available' },
];

export function FloorPlan() {
  const handleBooking = (id: string, status: string) => {
    if (status === 'reserved') {
      toast.error("This booth is already taken for tonight.");
      return;
    }
    toast.success(`Booking request sent for Booth ${id}!`);
  };

  return (
    <section id="floor-map" className="py-24 bg-background border-y border-border">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">VIP FLOOR MAP</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Secure your spot in the heart of the action. Choose from our ringside Diamond VIP or cozy Standard booths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-square md:aspect-video bg-secondary/20 rounded-3xl border border-border p-8 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-primary/20 border-b-4 border-primary flex items-center justify-center">
              <span className="text-primary font-bold tracking-widest uppercase">THE STAGE</span>
            </div>
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-3/4 h-2/3 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
               <span className="text-muted-foreground/30 text-4xl font-black uppercase rotate-12">Dance Floor</span>
            </div>
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-16 md:p-24 md:pt-32">
              {BOOTHS.map((booth) => (
                <TooltipProvider key={booth.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBooking(booth.id, booth.status)}
                        className={`
                          relative rounded-xl border-2 flex items-center justify-center transition-all duration-300
                          ${booth.status === 'reserved' 
                            ? 'bg-muted/20 border-muted cursor-not-allowed opacity-50' 
                            : 'bg-background border-primary hover:bg-primary/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]'}
                        `}
                      >
                        <span className={`font-bold ${booth.status === 'reserved' ? 'text-muted' : 'text-primary'}`}>
                          {booth.id}
                        </span>
                        {booth.status === 'available' && (
                           <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-popover border-border p-4">
                      <div className="space-y-1">
                        <p className="font-bold text-foreground">{booth.type}</p>
                        <p className="text-sm text-muted-foreground">Seats up to {booth.capacity}</p>
                        <p className="text-primary font-black">{booth.price}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-display text-foreground mb-4">Legend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-primary/20 border-2 border-primary" />
                  <span className="text-muted-foreground font-medium">Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-muted/20 border-2 border-muted" />
                  <span className="text-muted-foreground font-medium">Reserved</span>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
              <h3 className="text-xl font-bold text-primary mb-2">VIP Perks</h3>
              <ul className="text-sm space-y-2 text-foreground/80 list-disc list-inside">
                <li>Priority queue jumping</li>
                <li>Dedicated server service</li>
                <li>Complimentary appetizers</li>
              </ul>
              <Button className="w-full mt-6 bg-primary text-primary-foreground font-bold">EVENT INQUIRY</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloorPlan;
