import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Booked from "./pages/Booked";
import NotAFit from "./pages/NotAFit";
import NotReady from "./pages/NotReady";
import LeakageAudit from "./pages/LeakageAudit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/backend-system/thank-you" element={<ThankYou />} />
            <Route path="/backend-system/booked" element={<Booked />} />
            <Route path="/backend-system/not-a-fit" element={<NotAFit />} />
            <Route path="/backend-system/not-ready" element={<NotReady />} />
            <Route path="/backend-system/leakage-audit" element={<LeakageAudit />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
