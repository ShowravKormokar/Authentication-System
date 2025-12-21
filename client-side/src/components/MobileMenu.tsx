'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine, RiAddLine } from 'react-icons/ri';

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    return (
        <>
            {/* Menu Button (mobile & tablet only) */}
            <button
                className="lg:hidden z-50"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
            >
                <RiMenu3Line className="text-foreground text-2xl" />
            </button>

            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
            />

            {/* Sliding Panel */}
            <aside
                className={`fixed top-0 right-0 h-screen w-screen bg-background shadow-xl
    transform transition-transform duration-300 ease-in-out
    lg:hidden z-50
    ${open ? 'translate-x-0' : 'translate-x-full'}
  `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-semibold text-lg">Menu</span>
                    <button title='menu' onClick={() => setOpen(false)}>
                        <RiCloseLine className="text-foreground text-2xl" />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-4 p-4">
                    <NavLink href="/" label="Index" onClick={() => setOpen(false)} />
                    <NavLink href="/about" label="Docs" onClick={() => setOpen(false)} />
                    <NavLink href="/contact" label="API's" onClick={() => setOpen(false)} />
                    <NavLink href="/lab" label="Lab" onClick={() => setOpen(false)} />
                </nav>
            </aside>
        </>
    );
}

/* Link with + icon */
function NavLink({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center justify-between py-2 text-foreground font-semibold"
        >
            {label}
            <RiAddLine />
        </Link>
    );
}
