import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-5 w-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-foreground">RedPulse BloodFinder<span className="text-primary">Finder</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting blood donors with those in need. Together, we save lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/find-donor" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Find Donors
              </Link>
              <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Register as Donor
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9770248629</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>redpulse@bloodfinder.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Infront of Badkul Restraunt, Jabalpur, Raksha</span>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Emergency?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Need blood urgently? Contact us 24/7
            </p>
            <Link to="/find-donor">
              <button className="bg-blood-emergency hover:bg-primary-dark text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-all hover:shadow-glow">
                Find Blood Now
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BloodFinder. All rights reserved. | Saving Lives Together
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;