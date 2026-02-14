import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Music, Star, Utensils } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';

const navItems = [
  { name: 'Home', link: '#hero', icon: <Music className="h-4 w-4" /> },
  { name: 'Lineup', link: '#lineup', icon: <Music className="h-4 w-4" /> },
  { name: 'Menu', link: '#menu', icon: <Utensils className="h-4 w-4" /> },
  { name: 'VIP Map', link: '#floor-map', icon: <Star className="h-4 w-4" /> },
  { name: 'Location', link: '#location', icon: <MapPin className="h-4 w-4" /> },
];

export function Navbar() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Navbar;
