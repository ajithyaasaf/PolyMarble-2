import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Inspiration from "@/pages/Inspiration";
import Support from "@/pages/Support";
import MarbleWallSheetMadurai from "@/pages/MarbleWallSheetMadurai";
import LightweightStoneWallingChennai from "@/pages/LightweightStoneWallingChennai";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/inspiration" component={Inspiration} />
      <Route path="/support" component={Support} />
      <Route path="/marble-wall-sheet-madurai" component={MarbleWallSheetMadurai} />
      <Route path="/lightweight-stone-walling-chennai" component={LightweightStoneWallingChennai} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
