import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Idea from '../../Images/idea.png'
import { 
  Home as HomeIcon, 
  LineChart, 
  Award, 
  Bell, 
  Info,
  LogIn,
  UserPlus,
  Upload,
  List 
} from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    navigate('/');
  };
  const userRole = localStorage.getItem('userRole');
  console.log(userRole);
  return (
    <header className="bg-gradient-to-r from-[#46c5e5] via-[#6D28D9] to-[#9333EA] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
          <img src={Idea} alt="Idea Icon" className="h-12 w-12" />
            <span className="font-bold text-xl text-[#090518]">
    Project <span className="text-[#f5f4f2]">Portal</span>
  </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/"   className="relative flex items-center space-x-1 text-white  
             after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
             after:w-0 after:h-[3px] after:bg-[#D4A017] 
             after:rounded-full hover:after:w-full hover:after:h-[4px]">
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/progress"  className="relative flex items-center space-x-1 text-white 
             after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
             after:w-0 after:h-[3px] after:bg-[#D4A017] 
             after:rounded-full hover:after:w-full hover:after:h-[4px]">
              <LineChart className="h-4 w-4" />
              <span>Track Progress</span>
            </Link>
           
            <Link to="/announcements" className="relative flex items-center space-x-1 text-white
             after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
             after:w-0 after:h-[3px] after:bg-[#D4A017] 
             after:rounded-full hover:after:w-full hover:after:h-[4px]">
              <Bell className="h-4 w-4" />
              <span>Announcements</span>
            </Link>
            <Link to="/about"  className="relative flex items-center space-x-1 text-white 
             after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
             after:w-0 after:h-[3px] after:bg-[#D4A017] 
             after:rounded-full hover:after:w-full hover:after:h-[4px]">
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </Link>
           
            {userRole === 'DEO' && (
              <Link to="/upload"  className="relative flex items-center space-x-1 text-white  
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
              after:w-0 after:h-[3px] after:bg-[#D4A017] 
              after:rounded-full hover:after:w-full hover:after:h-[4px]">
                <span>Upload</span>
              </Link>
            )}
             {userRole === 'Project Coordinator' && (
              <Link to="/uploads"  className="relative flex items-center space-x-1 text-white  
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
              after:w-0 after:h-[3px] after:bg-[#D4A017] 
              after:rounded-full hover:after:w-full hover:after:h-[4px]">
                 <Upload className="h-4 w-4" />
                <span>Uploads</span>
              </Link>
            )}
            {userRole === 'Project Coordinator' && (
              <Link to="/list"  className="relative flex items-center space-x-1 text-white  
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
              after:w-0 after:h-[3px] after:bg-[#D4A017] 
              after:rounded-full hover:after:w-full hover:after:h-[4px]">
                <List className="h-4 w-4" />
                <span>List</span>
              </Link>
            )}     
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm">{user.name}</span>
                <button
  onClick={handleLogout}
  className="bg-white text-[#6D28D9] font-semibold px-6 py-2 rounded-2xl shadow-lg border-2 border-[#6D28D9] 
             hover: hover:scale-105 transition-all duration-300"
>
  Logout
</button>





              </>
            ) : (
              <>
              <Link
  to="/signup"
  className="flex items-center space-x-2 bg-[#FFB900] text-[#1E293B] font-bold px-6 py-2 rounded-xl shadow-md 
             border-2 border-[#FFB900] hover:bg-[#FFA500] hover: hover:shadow-lg 
             transform hover:scale-105 transition-all duration-300"
>
  <UserPlus className="h-5 w-5 text-[#1E293B]" />
  <span>Signup</span>
</Link>


<Link
  to="/login"
  className="flex items-center space-x-2 bg-white text-[#1E3A8A] font-semibold px-6 py-2 rounded-xl shadow-md border border-[#1E3A8A] hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
>
  <LogIn className="h-5 w-5 text-[#1E3A8A]" />
  <span>Login</span>
</Link>

              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
