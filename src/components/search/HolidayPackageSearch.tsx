
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const HolidayPackageSearch = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const { register } = useForm();
  
  const handleSearch = () => {
    console.log("Searching for holiday packages...");
    // In a real app, this would navigate to the search results page
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <Input 
            id="from" 
            placeholder="Your City" 
            className="w-full" 
            {...register("from", { required: true })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input 
            id="to" 
            placeholder="Destination" 
            className="w-full" 
            {...register("to", { required: true })}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input 
            id="duration" 
            placeholder="3-5 nights" 
            className="w-full" 
            {...register("duration")}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Input 
            id="budget" 
            placeholder="Any Budget" 
            className="w-full" 
            {...register("budget")}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="travelers">Travelers</Label>
          <Input 
            id="travelers" 
            placeholder="2 Adults, 0 Children" 
            className="w-full" 
            {...register("travelers")}
          />
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-travel-accent hover:bg-travel-accent/90 text-white font-semibold py-2 px-6 rounded-md"
        >
          Search Holiday Packages
        </Button>
      </div>
    </div>
  );
};

export default HolidayPackageSearch;
