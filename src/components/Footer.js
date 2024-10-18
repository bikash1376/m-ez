"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <span className="text-rose-600">Math</span>Easy.
            </Link>
            <p className="max-w-xs mt-4 text-sm">
  Empowering students worldwide with personalized math tutoring. Join us to make math easy and enjoyable for everyone.
</p>
            <div className="flex mt-8 space-x-6">
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              {/* <p className="font-medium">Links</p> */}
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Home
                </Link>
                <Link
                  href="#why-choose-us"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Why Choose Math Easy
                </Link>
                <Link
                  href="#about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About Math Easy
                </Link>
                <Link
                  href="#curriculum"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Curriculum
                </Link>
                <Link
                  href="#testimonials"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Testimonials
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 Math Easy - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
