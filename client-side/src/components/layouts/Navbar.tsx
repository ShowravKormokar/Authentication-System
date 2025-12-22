'use client'
import React from 'react'
import Link from 'next/link'
import { RiHeartFill, RiAddLine, RiCloseLine, RiMenu3Line } from "@remixicon/react";
import MobileMenu from './MobileMenu';
import { ModeToggle } from './ModeToggle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

    useGSAP(() => {
        gsap.from("nav", {
            yPercent: -100,
            opacity: 1,
            delay: 0.7,
            duration: 0.5,
            ease: "power1.out"
        })
    })

    return (
        <nav className="w-full flex items-center justify-between p-3 lg:p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg uppercase">

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
            <div className="nav-items lg:flex items-center gap-1 hidden">
                <Link
                    href="/"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="Index Page"
                >
                    Index
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/docs"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="Documents"
                >
                    docs
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/apis"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="API references"
                >
                    API's
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/lab"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="Lab Exp."
                >
                    lab
                </Link>
                <RiAddLine className="text-foreground" />

                <Link
                    href="/register"
                    className="text-foreground px-2 font-semibold nav-Link"
                    title="register"
                >
                    SignUp
                </Link>
                <RiAddLine className="text-foreground" />
                <ModeToggle />
            </div>

            {/* Mobile menu */}
            <div className='lg:hidden'>
                <MobileMenu />
            </div>

            {/* Right icon */}
            <RiAddLine className="text-foreground hidden md:inline-block" />
        </nav>
    )
};

export default Navbar;