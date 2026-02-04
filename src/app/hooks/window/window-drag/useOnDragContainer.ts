import { RefObject, useEffect } from "react";

interface useOnDragContainerProps {
    windowRef: RefObject<HTMLDivElement | null>;
    parentRef: RefObject<HTMLElement | null>;
}

function useOnDragContainer({ windowRef, parentRef }: useOnDragContainerProps) {
    useEffect(() => {
        if (windowRef.current) {
            parentRef.current?.appendChild(windowRef.current);
        }
    }, []);
}

export default useOnDragContainer