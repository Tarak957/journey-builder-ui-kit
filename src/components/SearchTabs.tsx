
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlightSearch from "./search/FlightSearch";
import HotelSearch from "./search/HotelSearch";
import TrainSearch from "./search/TrainSearch";
import BusSearch from "./search/BusSearch";
import HolidayPackageSearch from "./search/HolidayPackageSearch";

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden -mt-10 md:-mt-16 relative z-10">
      <Tabs defaultValue="flights" onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-3 md:grid-cols-5 rounded-none border-b">
          <TabsTrigger value="flights" className="py-3 font-medium">
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotels" className="py-3 font-medium">
            Hotels
          </TabsTrigger>
          <TabsTrigger value="holidays" className="py-3 font-medium">
            Holiday Packages
          </TabsTrigger>
          <TabsTrigger value="trains" className="py-3 font-medium hidden md:inline-block">
            Trains
          </TabsTrigger>
          <TabsTrigger value="buses" className="py-3 font-medium hidden md:inline-block">
            Buses
          </TabsTrigger>
        </TabsList>
        <div className="p-6">
          <TabsContent value="flights">
            <FlightSearch />
          </TabsContent>
          <TabsContent value="hotels">
            <HotelSearch />
          </TabsContent>
          <TabsContent value="holidays">
            <HolidayPackageSearch />
          </TabsContent>
          <TabsContent value="trains">
            <TrainSearch />
          </TabsContent>
          <TabsContent value="buses">
            <BusSearch />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SearchTabs;
