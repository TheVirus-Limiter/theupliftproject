import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Check if we're in development (with server) or production (static)
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('replit');
    
    if (isDevelopment) {
      // Development: Use server authentication
      try {
        const response = await fetch('/api/admin/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });

        if (response.ok) {
          localStorage.setItem('adminAuth', password);
          navigate('/admin');
        } else {
          const errorData = await response.json().catch(() => ({}));
          setError(errorData.error || 'Invalid password');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setError('Authentication failed - please try again');
      }
    } else {
      // Production (GitHub Pages): Client-side authentication
      if (password === 'upliftproject50k2025$$$$') {
        localStorage.setItem('adminAuth', password);
        navigate('/admin');
      } else {
        setError('Invalid password');
      }
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-uplift-red rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-playfair text-gray-900">
            Admin Dashboard
          </CardTitle>
          <p className="text-gray-600">
            Enter the admin password to access the dashboard
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-uplift-red hover:bg-red-700"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Login"}
            </Button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-uplift-red"
            >
              ← Back to Website
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
