
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightSearch from "@/components/search/FlightSearch";

const Flights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-travel-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Flight Bookings</h1>
          <p className="text-white/80">Search and book flights at the best prices</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <FlightSearch />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Flight Deals</h2>
          <p className="text-gray-500">Flight deals will be displayed here after search</p>
        </div>
      </div>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Flights;
