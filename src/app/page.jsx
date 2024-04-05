"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Typography } from "antd";
import Link from "next/link";
import Homepage from "@/components/Hompage";
import { useState } from "react";
import LoginForm from "@/components/Authentication/Login/LoginForm";
import SignUpForm from "@/components/Authentication/SignUp/SignUpForm";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    // Perform login logic (you may use a function from your AuthContext)
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic (you may use a function from your AuthContext)
    setIsAuthenticated(false);
  };


  return (
    <>
   
      {
        isAuthenticated ? <SignUpForm /> : <LoginForm isAuthenticated={isAuthenticated} />
      }
      
      <Homepage/>
    </>
  );
}
