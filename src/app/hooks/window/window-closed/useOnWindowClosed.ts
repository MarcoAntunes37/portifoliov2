import { useEffect } from "react";

interface WindowStateCloseProps {
    windowState: "opening" | "open" | "closing" | "closed",
    onClosed: (id: string) => void;
}

function useOnWindowClosed({ windowState, onClosed }: WindowStateCloseProps) {
    useEffect(() => {
        if (windowState === "closing") {
            const t = setTimeout(onClosed, 200);
            return () => clearTimeout(t);
        }
    }, [onClosed]);
}

export default useOnWindowClosed