"use client"

import { useEffect, useState } from "react";
import { type Viewport } from "../../shared/type/Types";
export function useViewportDebounced(delay = 150) {
    const [viewport, setViewport] = useState<Viewport>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        let timeoutId: number;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                setViewport({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, delay);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleResize);
        };
    }, [delay]);

    return viewport;
}
