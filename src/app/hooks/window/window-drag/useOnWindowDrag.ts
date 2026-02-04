import { Dispatch, RefObject, SetStateAction } from "react";
import useOnDragContainer from "./useOnDragContainer";
import useOnDragMove from "./useOnDragMove";
import useOnDragStart from "./useOnDragStart";

interface useOnWindowDragProps {
    windowRef: RefObject<HTMLDivElement | null>;
    headerRef: RefObject<HTMLDivElement | null>;
    parentRef: RefObject<HTMLElement | null>;
    startMouse: RefObject<{ x: number; y: number }>;
    startPos: RefObject<{ x: number; y: number }>;
    dragging: boolean;
    setDragging: Dispatch<SetStateAction<boolean>>;
    setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
    position: { x: number; y: number };
}

function useOnWindowDrag({ windowRef, headerRef, parentRef, startMouse, startPos, dragging, setDragging, setPosition, position }: useOnWindowDragProps) {
    useOnDragContainer({ windowRef, parentRef });

    useOnDragMove({ windowRef, headerRef, startMouse, startPos, dragging, setDragging, setPosition });
    
    const onMouseDown = useOnDragStart({ position, startMouse, startPos, setDragging });

    return onMouseDown;
}

export default useOnWindowDrag