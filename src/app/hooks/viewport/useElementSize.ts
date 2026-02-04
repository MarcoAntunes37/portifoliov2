import { useEffect, useRef, useState } from "react";

function useElementSize<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const update = () => {
            const rect = ref.current!.getBoundingClientRect();
            setSize({ width: rect.width, height: rect.height });
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return { ref, ...size };
}

export default useElementSize;