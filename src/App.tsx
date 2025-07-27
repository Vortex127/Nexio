import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Vision from "./components/Vision"; // Updated import to match new file structure
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import DataEngineering from "./pages/DataEngineering";
import Cybersecurity from "./pages/Cybersecurity";
import AIMachineLearning from "./pages/AIMachineLearning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/mobiledevelopment" element={<MobileDevelopment />} />
          <Route path="/cloudsolutions" element={<CloudSolutions />} />
          <Route path="/dataengineering" element={<DataEngineering />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/aimachinelearning" element={<AIMachineLearning />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
