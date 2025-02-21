import { Switch, SwitchThumb } from "@radix-ui/react-switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export function BreaksServerRendering() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="pointer-events-auto">
          <div>
            <Switch>
              <SwitchThumb />
            </Switch>
          </div>
        </TooltipTrigger>
        <TooltipContent>Test</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
