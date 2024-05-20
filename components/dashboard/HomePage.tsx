
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Dashboard } from "../dashboard";

const HomePage = () => {
  return (
    <div>
      <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" >Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input className="col-span-2 h-8" defaultValue="100%" id="width" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Lorem ipsum</Label>
              <Input className="col-span-2 h-8" defaultValue="300px" id="maxWidth" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input className="col-span-2 h-8" defaultValue="25px" id="height" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input className="col-span-2 h-8" defaultValue="none" id="maxHeight" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    {/* <Dashboard /> */}
    </div>
  );
};

export default HomePage;
