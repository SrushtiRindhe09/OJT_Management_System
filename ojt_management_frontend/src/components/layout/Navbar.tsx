import Container from "../common/Container";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-border">
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            O
          </div>
          <h2 className="text-lg font-bold">OJT Connect</h2>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
         <Link to="/about">About Us</Link>

        <Link to="/contact">Contact</Link>

        </div>

        <div className="flex gap-3">
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
          

        </div>
      </Container>
    </header>
  );
}

export default Navbar;

