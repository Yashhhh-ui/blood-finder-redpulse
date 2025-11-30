import { Heart, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Compassion",
      description: "We believe in the power of compassion to drive meaningful change and save lives.",
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Mission-Driven",
      description: "Our mission is to connect blood donors with those in need efficiently and effectively.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Community",
      description: "Building a strong community of donors and recipients working together to save lives.",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Excellence",
      description: "Committed to providing the highest quality service and support to all our users.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Heart className="h-16 w-16 text-primary mx-auto mb-4 fill-current" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">BloodFinder</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connecting blood donors with those in need through technology and compassion.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="border-border shadow-lg-custom">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                BloodFinder was created with a simple yet powerful mission: to save lives by making it easier for people
                in need to find blood donors quickly and efficiently. Every year, millions of people require blood
                transfusions due to medical emergencies, surgeries, and chronic illnesses.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that no one should struggle to find the blood they need in critical moments. Through our
                platform, we're building a community of heroes - people willing to donate blood and help save lives.
                Together, we're making a difference, one donation at a time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-primary text-primary-foreground border-none shadow-lg-custom">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <p className="text-primary-foreground/80">Registered Donors</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <p className="text-primary-foreground/80">Lives Saved</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-primary-foreground/80">Cities Covered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="animate-scale-in">
          <Card className="border-border shadow-lg-custom">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Register as a Donor</h3>
                    <p className="text-muted-foreground">
                      Sign up with your blood group and contact information to become part of our life-saving community.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Search for Donors</h3>
                    <p className="text-muted-foreground">
                      When someone needs blood, they can search our database by blood group to find available donors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Connect & Save Lives</h3>
                    <p className="text-muted-foreground">
                      Recipients can directly contact donors, and together you make a life-saving connection.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
