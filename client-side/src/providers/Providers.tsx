"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SmoothScroll from "./SmoothScroll";
import Navbar from "@/components/Navbar";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Only enable smooth scroll on client side
    if (!isClient) {
        return (
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <main className="p-4">{children}</main>
            </QueryClientProvider>
        );
    }

    return (
        <QueryClientProvider client={queryClient}>
            <SmoothScroll>
                <Navbar />
                <main className="p-4">{children}</main>
            </SmoothScroll>
        </QueryClientProvider>
    );
}