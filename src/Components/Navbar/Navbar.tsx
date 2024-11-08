import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/UseAuth';

interface Props {}

const Navbar = (props: Props) => {
    const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
        <Link to="/">
          <img src={logo} alt="" className="w-16 h-16"/>
          </Link>
          <Link to="/home">
          <div className="hidden font-bold lg:flex">
            <a href="" className="text-black hover:text-darkBlue">
              Home
            </a>
          </div>
          </Link>
        </div>
        {isLoggedIn() ? (
                <div className="hidden lg:flex items-center space-x-6 text-back">
            
              <div>Welcome, {user?.userName}</div>
             
             
              <a
                onClick={logout}
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Logout
              </a>
              
            </div>
        ) : (
            <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login">
          <div className="hover:text-darkBlue">Login</div>
          </Link>
          <Link to="/register">
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
          </Link>
        </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar;