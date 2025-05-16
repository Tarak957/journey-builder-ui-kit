
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Island paradise with beautiful beaches and rich culture",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹42,999",
    rating: 4.8,
    tag: "Popular",
  },
  {
    id: 2,
    name: "Paris, France",
    description: "The city of love with iconic landmarks and cuisine",
    image: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹68,500",
    rating: 4.7,
    tag: "Trending",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    description: "Ultra-modern metropolis with ancient traditions",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹75,199",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Santorini, Greece",
    description: "Beautiful island with white-washed buildings and sunsets",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹58,999",
    rating: 4.8,
    tag: "Best Seller",
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-12 bg-travel-light">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of top destinations around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {destination.tag && (
                  <Badge className="absolute top-2 right-2 bg-travel-accent text-white">
                    {destination.tag}
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold">{destination.name}</CardTitle>
                <CardDescription className="text-sm mt-2 line-clamp-2">
                  {destination.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <div className="text-travel-primary font-bold">{destination.price}</div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
