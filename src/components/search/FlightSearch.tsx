
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type TripType = "oneway" | "roundtrip" | "multicity";

const FlightSearch = () => {
  const [tripType, setTripType] = useState<TripType>("oneway");
  const [departDate, setDepartDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  
  const { register } = useForm();
  
  const handleSearch = () => {
    console.log("Searching for flights...");
    // In a real app, this would navigate to the search results page
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <RadioGroup defaultValue="oneway" className="flex flex-wrap gap-4" onValueChange={(value) => setTripType(value as TripType)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundtrip" id="roundtrip" />
            <Label htmlFor="roundtrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multicity" id="multicity" />
            <Label htmlFor="multicity">Multi-City</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <Input 
            id="from" 
            placeholder="Departure City" 
            className="w-full" 
            {...register("from", { required: true })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input 
            id="to" 
            placeholder="Destination City" 
            className="w-full" 
            {...register("to", { required: true })}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !departDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departDate ? format(departDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departDate}
                onSelect={setDepartDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {tripType === "roundtrip" && (
          <div className="space-y-2">
            <Label>Return Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                  disabled={date => 
                    departDate ? date < departDate : false
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
        
        {/* When type is oneway and we want to maintain the layout */}
        {tripType === "oneway" && (
          <div className="space-y-2">
            <Label htmlFor="travelers">Travelers & Class</Label>
            <Input 
              id="travelers" 
              placeholder="1 Adult, Economy" 
              className="w-full" 
              {...register("travelers")}
            />
          </div>
        )}
      </div>
      
      {/* Conditional display based on trip type */}
      {tripType === "roundtrip" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="travelers">Travelers & Class</Label>
            <Input 
              id="travelers" 
              placeholder="1 Adult, Economy" 
              className="w-full" 
              {...register("travelers")}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="preferredAirline">Preferred Airline</Label>
            <Input 
              id="preferredAirline" 
              placeholder="Any Airline" 
              className="w-full" 
              {...register("preferredAirline")}
            />
          </div>
        </div>
      )}
      
      <div className="pt-4">
        <Button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-travel-accent hover:bg-travel-accent/90 text-white font-semibold py-2 px-6 rounded-md"
        >
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearch;
