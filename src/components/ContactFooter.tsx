import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="location" className="bg-background border-t border-border pt-24 pb-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-display text-primary tracking-tighter">THE ELECTRIC OUTLAW</h3>
            <p className="text-muted-foreground">Nashville's premier live music destination for rebels and dancers alike.</p>
            <div className="flex gap-4">
              <Instagram className="text-muted-foreground hover:text-primary transition-colors" />
              <Facebook className="text-muted-foreground hover:text-primary transition-colors" />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-foreground">VISIT</h4>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3"><MapPin className="text-primary mt-1" size={20} /> 420 Broadway Ave, Nashville, TN</p>
              <p className="flex items-center gap-3"><Phone className="text-primary" size={20} /> (615) 555-OUTLAW</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-foreground">HOURS</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Mon - Thu: 4 PM - 2 AM</p>
              <p>Fri - Sat: 11 AM - 3 AM</p>
              <p>Sun: 11 AM - 1 AM</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-foreground">JOIN THE GANG</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-secondary/50 border border-border rounded-lg px-4 py-2 flex-grow focus:ring-1 focus:ring-primary outline-none" />
              <button className="bg-primary text-foreground font-bold px-4 py-2 rounded-lg">JOIN</button>
            </form>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Electric Outlaw.
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
