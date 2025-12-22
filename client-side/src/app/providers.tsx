'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const smoother = useRef<ScrollSmoother | null>(null);

    useEffect(() => {
        // Only run on client
        smoother.current = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.2,
            effects: true,
            normalizeScroll: false,
        });

        return () => {
            smoother.current?.kill();
            smoother.current = null;
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                </div>
            </div>
        </QueryClientProvider>
    );
};

// Export ThemeProvider separately
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};