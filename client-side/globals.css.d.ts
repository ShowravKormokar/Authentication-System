declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '@/app/globals.css' {
    const content: { [className: string]: string };
    export default content;
}

// Or if you're importing it as a side effect
declare module '*.css';