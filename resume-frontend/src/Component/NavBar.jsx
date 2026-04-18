import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import {useAuth} from '../LOG&SIG/useAuth'
import toast from "react-hot-toast";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {isLoggedIn,logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout=()=>{
    logout();
    navigate('/login')
    toast.success("User logged Out successfully")
  }

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">ResumeAI</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>


            <Link to="/service" className="hover:text-blue-600 transition">
              Services
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 z-50">
            <Link to="/login" className="px-5 py-2 rounded-lg border border-border hover:bg-muted transition">
              Login
            </Link>
            {
              isLoggedIn? (
                <>
                <Link onClick={handleLogout} className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              LogOut
            </Link>
                </>
              ):(
                 <Link to="/signup" className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              SignUp
            </Link>

              )
            }
           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-6 pb-4 pt-2 space-y-3 bg-background">
          <Link 
            to="/about" 
            className="block hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link 
            to="/service" 
            className="block hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link 
            to="/contact" 
            className="block hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="flex gap-3 pt-3">
            {/* FIXED: Changed from <button> to <Link> */}
            <Link 
              to="/login" 
              className="flex-1 text-center px-4 py-2 border border-border rounded-lg hover:bg-muted"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link 
              to="/signup" 
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;