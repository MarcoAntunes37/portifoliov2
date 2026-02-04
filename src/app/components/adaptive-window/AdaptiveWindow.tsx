"use client";

import { createPortal } from "react-dom";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";

import BottomSheet from "../bottom-sheet/BottomSheet";
import DraggableWindow from "../dragabble-window/DragabbleWindow";

import type { ContentMap, I18nDictionary, WindowType, WindowVisualState } from "../../shared/type/Types";

import About from "@/app/about/page";
import Links from "@/app/links/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

import { useViewportDebounced } from "@/app/hooks/viewport/useViewPortDebounced";
import { OpenWindow } from "@/app/shared/interface/Interfaces";

interface AdaptiveWindowProps {
    isMobile: boolean;
    openWindows: OpenWindow[];
    setOpenWindows: Dispatch<SetStateAction<OpenWindow[]>>;
    i18nDictionary: I18nDictionary;
    params: Readonly<{ locale: string }>
}

export default function AdaptiveWindow({ isMobile, openWindows, setOpenWindows, i18nDictionary, params }: AdaptiveWindowProps) {
    const { width, height } = useViewportDebounced(200);
    const zAxisCounter = useRef(100);

    const [mounted, setMounted] = useState(false);

    function calculateWindowPosition(index: number) {
        if (isMobile) return { x: 0, y: 0 };

        const OFFSET_X = 64;
        const OFFSET_Y = 32;
        const WINDOW_MAX_WIDTH = 320;
        const WINDOW_MAX_HEIGHT = 300;
        const NUMBER_OF_WINDOWS = 4;

        return {
            x: (WINDOW_MAX_WIDTH) / NUMBER_OF_WINDOWS + index * OFFSET_X,
            y: (WINDOW_MAX_HEIGHT) / NUMBER_OF_WINDOWS + index * OFFSET_Y,
        };
    }

    const WINDOW_POSITIONS = useMemo<Record<WindowType, { x: number; y: number }>>(() => ({
        about: calculateWindowPosition(0),
        links: calculateWindowPosition(1),
        projects: calculateWindowPosition(2),
        contact: calculateWindowPosition(3),
    }), [isMobile, width, height]);

    const removeWindow = (id: string) => {
        setOpenWindows(prev => prev.filter(w => w.id !== id));
    };

    const closeWindow = (type: WindowType) => {
        setOpenWindows(prev =>
            prev.map(w =>
                w.type === type
                    ? { ...w, windowState: "closing" }
                    : w
            )
        );
    };

    function focusWindow(type: WindowType) {
        setOpenWindows((prev) =>
            prev.map((w) =>
                w.type === type
                    ? { ...w, zAxis: ++zAxisCounter.current }
                    : w
            )
        );
    }

    const contentMap: ContentMap = {
        about: <About dict={i18nDictionary} />,
        links: <Links dict={i18nDictionary} params={params} />,
        projects: <Projects dict={i18nDictionary} />,
        contact: <Contact dict={i18nDictionary} />,
    };

    useEffect(() =>
        setMounted(true), []);

    if (!mounted) return null;

    const portalRoot = document.getElementById("windows-root");

    if (!portalRoot) return null;

    return createPortal(
        <>
            {isMobile && openWindows[0] && (
                <BottomSheet
                    title={openWindows[0].title}
                    requestClose={() => closeWindow(openWindows[0].type)}
                    onClosed={() => removeWindow(openWindows[0].id)}
                    windowState={openWindows[0].windowState}
                    setWindowState={openWindows[0].setWindowState}
                >
                    {contentMap[openWindows[0].type]}
                </BottomSheet>
            )}

            {!isMobile &&
                openWindows.map((openWindow) => {
                    const window = openWindows.find((window) => window.type === openWindow.type)

                    if (!window) return null;

                    return (
                        <DraggableWindow
                            key={openWindow.id}
                            title={openWindow.title}
                            initialPosition={WINDOW_POSITIONS[openWindow.type]}
                            zAxis={openWindow.zAxis}
                            onFocus={() => focusWindow(openWindow.type)}
                            requestClose={() => closeWindow(openWindow.type)}
                            onClosed={() => removeWindow(openWindow.id)}
                            windowState={openWindow.windowState}
                            setWindowState={openWindow.setWindowState}
                        >
                            {contentMap[openWindow.type]}
                        </DraggableWindow>
                    );
                })}
        </>,
        portalRoot
    );
}
