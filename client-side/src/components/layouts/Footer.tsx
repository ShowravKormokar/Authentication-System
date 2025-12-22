'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
    Github,
    Linkedin,
    ExternalLink,
    Mail,
    MapPin,
    Globe,
    Code,
    FileText,
    Heart,
    Coffee
} from 'lucide-react'
import { useState, useEffect } from 'react'

// Define types for footer data
interface FooterData {
    github: string
    repository: string
    linkedin: string
    portfolio: string
    leetcode: string
    address: string
    emails: string[]
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    const [footerData, setFooterData] = useState<FooterData>({
        github: '',
        repository: '',
        linkedin: '',
        portfolio: '',
        leetcode: '',
        address: '',
        emails: [],
    })

    useEffect(() => {
        // You can fetch this data from an API or environment variables
        setFooterData({
            github: 'ShowravKormokar',
            repository: 'https://github.com/ShowravKormokar/Authentication-System',
            linkedin: 'https://www.linkedin.com/in/showrav-kormokar-778752281/',
            portfolio: 'https://showravkormokar.vercel.app/',
            leetcode: 'https://leetcode.com/u/Showrav77/',
            address: 'Pirijpur - 6290, Godagari, Rajshahi, Bangladesh',
            emails: ['skshowrav07@gmail.com', '222311077@vu.edu.bd'],
        })
    }, [])

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: `https://github.com/${footerData.github}`,
            color: 'hover:bg-gray-800 hover:text-white',
            label: 'GitHub Profile'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: footerData.linkedin,
            color: 'hover:bg-blue-600 hover:text-white',
            label: 'LinkedIn Profile'
        },
        {
            name: 'LeetCode',
            icon: Code,
            href: footerData.leetcode,
            color: 'hover:bg-yellow-500 hover:text-black',
            label: 'LeetCode Profile'
        },
        {
            name: 'Portfolio',
            icon: Globe,
            href: footerData.portfolio,
            color: 'hover:bg-green-600 hover:text-white',
            label: 'Personal Portfolio'
        }
    ]

    return (
        <footer className="border-t bg-background w-full">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Authentication System</h3>
                                <p className="text-sm text-muted-foreground">Secure & Scalable Auth Solution</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            A comprehensive authentication system built with modern technologies,
                            featuring secure login, registration, and user management.
                        </p>
                        <Badge variant="outline" className="gap-1">
                            <Heart className="h-3 w-3" />
                            Open Source Project
                        </Badge>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Source Code', href: footerData.repository, icon: Github },
                                { name: 'Documentation', href: '/docs', icon: FileText },
                                { name: 'API Reference', href: '/apis', icon: Code },
                                { name: 'Contributing', href: '/contributing', icon: Coffee }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors foo-link"
                                    >
                                        <link.icon className="h-4 w-4" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                    {footerData.address}
                                </span>
                            </div>
                            <div className="space-y-1">
                                {footerData.emails.map((email, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <a
                                            href={`mailto:${email}`}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors foo-link"
                                        >
                                            {email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Connect With Me</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.name}
                                    variant="outline"
                                    size="sm"
                                    className={`justify-start ${social.color} transition-all duration-300`}
                                    asChild
                                >
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2"
                                    >
                                        <social.icon className="h-4 w-4" />
                                        <span>{social.name}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-sm text-muted-foreground text-center md:text-left">
                        © {currentYear} Authentication System. All rights reserved.
                        <span className="block md:inline md:ml-1">
                            Built with ❤️ by{' '}
                            <Link
                                href={footerData.portfolio}
                                className="text-primary hover:underline font-medium"
                                target="_blank"
                            >
                                Showrav Kormokar
                            </Link>
                        </span>
                    </div>

                    {/* Additional Links */}
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <Link
                            href="/privacy"
                            className="hover:text-primary transition-colors foo-link"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-primary transition-colors foo-link"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/sitemap"
                            className="hover:text-primary transition-colors foo-link"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>

                {/* Repository Info */}
                <div className="mt-8 text-center">
                    <Badge variant="secondary" className="gap-2">
                        <Github className="h-3 w-3" />
                        <Link
                            href={footerData.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Star this repo on GitHub
                        </Link>
                        <ExternalLink className="h-3 w-3" />
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                        Contributions welcome! Feel free to fork and submit PRs.
                    </p>
                </div>
            </div>
        </footer>
    );
};