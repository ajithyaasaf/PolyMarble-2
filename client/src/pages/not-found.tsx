import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-warm-cream p-4">
      <SEOHead 
        title="404 Page Not Found | Polymarble Sheets India"
        description="The page you are looking for could not be found."
        noindex={true}
      />
      <Card className="w-full max-w-md mx-auto shadow-xl border-light-silver/20">
        <CardContent className="pt-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-deep-charcoal mb-2">Page Not Found</h1>
          <p className="text-sm text-cool-grey mb-6">
            The page you are looking for doesn't exist, has been removed, or has moved to a new URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-brand-teal text-pure-white hover:bg-brand-teal/90">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="w-full sm:w-auto border-brand-teal text-brand-teal hover:bg-brand-teal/5">
                <Package className="w-4 h-4 mr-2" />
                View Products
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
