import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MENU_DATA = {
  drinks: [
    { name: "Electric Mule", price: "$14", desc: "Wild Turkey, Lime, Spicy Ginger Beer, Neon Garnish" },
    { name: "The Outlaw Old Fashioned", price: "$16", desc: "Smoked Bourbon, Maple Syrup, Orange Bitters" },
    { name: "Moonshine Margarita", price: "$13", desc: "White Lightning, Agave, Fresh Lime" },
    { name: "Lone Star Draft", price: "$6", desc: "Ice cold, straight from the tap" },
  ],
  food: [
    { name: "Smoked Brisket Nachos", price: "$18", desc: "Slow-smoked, Queso, Jalapeños, BBQ Drizzle" },
    { name: "Neon Wings", price: "$15", desc: "Choice of Nashville Hot, Buffalo, or Gold BBQ" },
    { name: "The Desperado Burger", price: "$17", desc: "Double Patty, Bacon, Crispy Onions, Secret Sauce" },
    { name: "Fried Pickles", price: "$10", desc: "Hand-battered with Buttermilk Ranch" },
  ],
};

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">DRINKS & GRUB</h2>
          <p className="text-muted-foreground">Fuel for the long night ahead.</p>
        </div>

        <Tabs defaultValue="drinks" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/50 p-1 rounded-full mb-8">
            <TabsTrigger value="drinks" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground py-3 text-lg font-bold">DRINKS</TabsTrigger>
            <TabsTrigger value="food" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground py-3 text-lg font-bold">FOOD</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drinks" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_DATA.drinks.map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-foreground">{item.name}</CardTitle>
                    <span className="text-primary font-black">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm italic">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="food" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_DATA.food.map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-foreground">{item.name}</CardTitle>
                    <span className="text-primary font-black">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm italic">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Menu;
