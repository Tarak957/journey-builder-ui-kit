
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    id: 1,
    title: "Domestic Flights",
    discount: "Upto 25% OFF",
    code: "FLYNOW",
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "International Hotels",
    discount: "Upto 40% OFF",
    code: "GLOBAL40",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Holiday Packages",
    discount: "Flat 30% OFF",
    code: "HOLIDAY30",
    image: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-amber-500 to-red-600",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grab these limited-time deals and save big on your next journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className={`relative h-64 bg-gradient-to-br ${offer.color} text-white p-6 flex flex-col justify-between`}>
                  {/* Background image with overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
                    style={{ backgroundImage: `url(${offer.image})` }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-medium mb-1">{offer.title}</h3>
                    <p className="text-3xl font-bold mb-2">{offer.discount}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm">Use Code:</span>
                      <span className="bg-white/20 text-white px-2 py-1 rounded text-sm font-medium">
                        {offer.code}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <Button className="bg-white hover:bg-gray-100 text-gray-800">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
