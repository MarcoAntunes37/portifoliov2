import { Dispatch, RefObject, SetStateAction, useCallback, MouseEvent } from "react";
interface useOnDragStartProps {
    position: { x: number; y: number };
    startMouse: RefObject<{ x: number; y: number }>;
    startPos: RefObject<{ x: number; y: number }>;
    setDragging: Dispatch<SetStateAction<boolean>>
}

function useOnDragStart({ position, startMouse, startPos, setDragging }: useOnDragStartProps) {
    const onMouseDown = useCallback((e: MouseEvent) => {
        startMouse.current = { x: e.clientX, y: e.clientY };
        startPos.current = position;
        setDragging(true);
    }, [position]);

    return onMouseDown;
}

export default useOnDragStart