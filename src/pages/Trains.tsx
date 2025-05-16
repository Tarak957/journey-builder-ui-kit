
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainSearch from "@/components/search/TrainSearch";

const Trains = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-travel-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Train Tickets</h1>
          <p className="text-white/80">Book train tickets for your journey</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <TrainSearch />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Train Routes</h2>
          <p className="text-gray-500">Train routes will be displayed here after search</p>
        </div>
      </div>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Trains;
