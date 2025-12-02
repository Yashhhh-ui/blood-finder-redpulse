import { Link } from "react-router-dom";
import { Heart, Search, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-blood-donation.jpg";

const Home = () => {
  const features = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Find Donors",
      description: "Search for blood donors by blood group in your area instantly.",
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Register as Donor",
      description: "Join our community of life-savers and make a difference.",
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "24/7 Support",
      description: "Emergency assistance available round the clock.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Registered Donors" },
    { number: "5,000+", label: "Lives Saved" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image with priority loading */}
        <img
          src={heroImage}
          alt="Blood donation hero - Save lives through blood donation"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover parallax-bg"
          style={{ zIndex: 0 }}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.85))',
            zIndex: 1
          }}
        />
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Save Lives Through
            <br />
            <span className="text-white">Blood Donation</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connect with blood donors instantly. Every donation can save up to 3 lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 hover-lift">
              <Link to="/find-donor">
                <Search className="mr-2 h-5 w-5" />
                Find Blood Donor
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 hover-lift">
              <Link to="/register">
                <Heart className="mr-2 h-5 w-5" />
                Register as Donor
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple steps to save lives. Join our community today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift hover-glow border-border bg-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Life-Saving Community
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be a hero. Register as a blood donor today and help save lives in your community.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-lg px-10 py-6 hover-lift hover-glow">
              <Link to="/register">
                <Heart className="mr-2 h-5 w-5 fill-current" />
                Become a Donor
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
