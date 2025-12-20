"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import Navbar from "@/components/Navbar";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <SmoothScroll>
                <Navbar />
                <main className="p-4">{children}</main>
            </SmoothScroll>
        </QueryClientProvider>
    );
}