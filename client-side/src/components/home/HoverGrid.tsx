"use client";

import { useEffect, useRef } from "react";

const HoverGrid = () => {
    const gridConRef = useRef<HTMLDivElement | null>(null);
    const gridHighlightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const gridCon = gridConRef.current;
        const gridHL = gridHighlightRef.current;

        if (!gridCon || !gridHL) return;

        const gridItems = gridCon.querySelectorAll<HTMLDivElement>(".grid-item");
        const firstItem = gridItems[0];

        const highlightColors = [
            "#E24E1B",
            "#4381C1",
            "#F79824",
            "#04A777",
            "#5B8C5A",
            "#2176FF",
            "#818D92",
            "#22AAA1",
        ];

        gridItems.forEach((item, index) => {
            item.dataset.color =
                highlightColors[index % highlightColors.length];
        });

        const moveToElement = (element: HTMLElement | null) => {
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const conRect = gridCon.getBoundingClientRect();

            gridHL.style.transform = `translate(
                ${rect.left - conRect.left}px,
                ${rect.top - conRect.top}px
            )`;

            gridHL.style.width = `${rect.width}px`;
            gridHL.style.height = `${rect.height}px`;
            gridHL.style.backgroundColor =
                element.dataset.color ?? "#ffffff";
        };

        const moveHighlight = (e: MouseEvent) => {
            const hoveredEle = document.elementFromPoint(
                e.clientX,
                e.clientY
            ) as HTMLElement | null;

            if (!hoveredEle) return;

            if (hoveredEle.classList.contains("grid-item")) {
                moveToElement(hoveredEle);
            } else if (
                hoveredEle.parentElement?.classList.contains("grid-item")
            ) {
                moveToElement(hoveredEle.parentElement);
            }
        };

        moveToElement(firstItem);

        gridCon.addEventListener("mousemove", moveHighlight);

        return () => {
            gridCon.removeEventListener("mousemove", moveHighlight);
        };
    }, []);

    return (
        <section className="w-screen h-dvh place-items-center">
            <div
                ref={gridConRef}
                className="container relative w-full h-full flex justify-center items-center"
            >
                <div className=" gridP border-2">
                    <div className="grid-rowP">
                        <div className="grid-item"><p>[ HTML ]</p></div>
                        <div className="grid-item"><p>[ CSS ]</p></div>
                        <div className="grid-item"><p>[ JS ]</p></div>
                    </div>
                    <div className="grid-rowP">
                        <div className="grid-item"><p>[ React ]</p></div>
                        <div className="grid-item"><p>[ Next ]</p></div>
                        <div className="grid-item"><p>[ GSAP ]</p></div>
                        <div className="grid-item"><p>[ TS ]</p></div>
                        <div className="grid-item"><p>[ Tailwind ]</p></div>
                    </div>
                </div>

                <div
                    ref={gridHighlightRef}
                    className="highlight"
                />
            </div>
        </section>
    );
};

export default HoverGrid;