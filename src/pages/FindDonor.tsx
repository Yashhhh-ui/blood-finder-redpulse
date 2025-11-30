import { useState } from "react";
import { Search, Phone, MapPin, User, Droplet, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Donor {
  id: string;
  name: string;
  age: number;
  gender: string;
  blood_group: string;
  phone: string;
  address: string;
  is_available: boolean;
  created_at: string;
}

const FindDonor = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("");
  const [donors, setDonors] = useState<Donor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSearch = async () => {
    if (!selectedBloodGroup) {
      toast.error("Please select a blood group");
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    try {
      const { data, error } = await supabase
        .from("donors")
        .select("*")
        .eq("blood_group", selectedBloodGroup)
        .eq("is_available", true)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setDonors(data || []);

      if (data && data.length === 0) {
        toast.info("No donors found", {
          description: `No available donors found for blood group ${selectedBloodGroup}. Try again later.`,
        });
      } else {
        toast.success("Search Successful", {
          description: `Found ${data?.length || 0} donor(s) for blood group ${selectedBloodGroup}`,
        });
      }
    } catch (error: any) {
      console.error("Search error:", error);
      toast.error("Search Failed", {
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <Search className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Blood Donors</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Search for available blood donors in your area by blood group.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-12 animate-scale-in border-border shadow-lg-custom">
          <CardHeader>
            <CardTitle>Search for Donors</CardTitle>
            <CardDescription>Select a blood group to find available donors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        <div className="flex items-center gap-2">
                          <Droplet className="h-4 w-4 text-primary" />
                          {group}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSearch} size="lg" className="bg-primary hover:bg-primary-dark hover-lift" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Search Donors
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {hasSearched && (
          <div className="animate-fade-in">
            {donors.length === 0 ? (
              <Card className="text-center py-12 border-border">
                <CardContent>
                  <Droplet className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">No Donors Found</h3>
                  <p className="text-muted-foreground">
                    No available donors found for blood group {selectedBloodGroup}. Please try again later or search for a different blood group.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Available Donors ({donors.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {donors.map((donor, index) => (
                    <Card key={donor.id} className="hover-lift border-border animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 rounded-full p-3">
                              <User className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{donor.name}</CardTitle>
                              <CardDescription>
                                {donor.age} years • {donor.gender}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-primary text-primary-foreground">
                            <Droplet className="h-3 w-3 mr-1 fill-current" />
                            {donor.blood_group}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-foreground font-medium">{donor.phone}</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{donor.address}</span>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <Button asChild className="w-full bg-primary hover:bg-primary-dark hover-lift">
                            <a href={`tel:${donor.phone}`}>
                              <Phone className="mr-2 h-4 w-4" />
                              Contact Donor
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Info Box */}
        {!hasSearched && (
          <Card className="bg-muted border-border animate-fade-in">
            <CardContent className="p-8 text-center">
              <Droplet className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">How to Find Donors</h3>
              <p className="text-muted-foreground">
                Select a blood group from the dropdown above and click "Search Donors" to find available donors in your area.
                You'll be able to contact them directly via phone.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FindDonor;
