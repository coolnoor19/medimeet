import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-single.png"
            alt="medimeet logo"
            width={200}
            height={200}
            className="h-10 w-auto object-contain"
          />
        </Link>
        {/* // its clerk signin and signup button */}
        <div>
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className=" text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
