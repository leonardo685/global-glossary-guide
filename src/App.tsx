import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EquipmentRenovation from "./pages/EquipmentRenovation";
import CustomManufacturing from "./pages/CustomManufacturing";
import QualityTesting from "./pages/QualityTesting";
import TraceabilitySystem from "./pages/TraceabilitySystem";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/equipment-renovation" element={<EquipmentRenovation />} />
          <Route path="/custom-manufacturing" element={<CustomManufacturing />} />
          <Route path="/quality-testing" element={<QualityTesting />} />
          <Route path="/traceability-system" element={<TraceabilitySystem />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
