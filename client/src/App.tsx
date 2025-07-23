import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Corporations from "@/pages/corporations";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  // Handle GitHub Pages SPA routing
  useEffect(() => {
    // Check if we have a redirect from 404.html
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('p');
    if (redirect) {
      const route = '/' + redirect.replace(/~and~/g, '&');
      window.history.replaceState(null, '', route);
    }
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/corporations" component={Corporations} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
