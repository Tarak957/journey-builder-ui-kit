
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const HotelSearch = () => {
  const today = new Date();
  const [checkIn, setCheckIn] = useState<Date | undefined>(today);
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(today, 1));
  
  const { register } = useForm();
  
  const handleSearch = () => {
    console.log("Searching for hotels...");
    // In a real app, this would navigate to the search results page
  };
  
  return (
    <div className="space-y-6">      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">City, Area or Property</Label>
          <Input 
            id="location" 
            placeholder="Where are you going?" 
            className="w-full" 
            {...register("location", { required: true })}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                disabled={(date) => date < today}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label>Check-out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => 
                  checkIn ? date <= checkIn : date <= today
                }
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="guests">Guests & Rooms</Label>
          <Input 
            id="guests" 
            placeholder="2 Adults, 1 Room" 
            className="w-full" 
            {...register("guests")}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="priceRange">Price Range</Label>
          <Input 
            id="priceRange" 
            placeholder="Any Price" 
            className="w-full" 
            {...register("priceRange")}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="propertyType">Property Type</Label>
          <Input 
            id="propertyType" 
            placeholder="Any Property Type" 
            className="w-full" 
            {...register("propertyType")}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="starRating">Star Rating</Label>
          <Input 
            id="starRating" 
            placeholder="Any Rating" 
            className="w-full" 
            {...register("starRating")}
          />
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-travel-accent hover:bg-travel-accent/90 text-white font-semibold py-2 px-6 rounded-md"
        >
          Search Hotels
        </Button>
      </div>
    </div>
  );
};

export default HotelSearch;
