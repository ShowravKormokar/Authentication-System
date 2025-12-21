'use client'
import React from 'react'
import Link from 'next/link'
import { RiHeartFill, RiAddLine, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm uppercase">

            {/* Left icon */}
            <RiAddLine className="text-foreground hidden md:inline-block" />

            {/* Center logo with decorative icons */}
            <div className="logo flex items-center gap-2">
                <RiCloseLine className="text-foreground" />
                <Link
                    href="/"
                    className="text-primary font-semibold nav-Link"
                    title="Home"
                >
                    jwt※GSAP
                </Link>
                <RiCloseLine className="text-foreground" />
            </div>

            {/* Navigation items with dividers */}
            <div className="nav-items flex items-center gap-2 ">
                <Link
                    href="/"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="home"
                >
                    Index
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/About"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="about"
                >
                    docs
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/contact"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="contact"
                >
                    API's
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/contact"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="contact"
                >
                    lab
                </Link>
            </div>

            {/* Right icon */}
            <RiAddLine className="text-foreground hidden md:inline-block" />
        </nav>
    )
};

export default Navbar;