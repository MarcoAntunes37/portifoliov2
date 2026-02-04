import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface useOnDragMoveProps {
  windowRef: RefObject<HTMLDivElement | null>;
  headerRef: RefObject<HTMLDivElement | null>;
  startMouse: RefObject<{ x: number; y: number }>;
  startPos: RefObject<{ x: number; y: number }>;
  dragging: boolean;
  setDragging: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

function useOnDragMove({ windowRef, headerRef, startMouse, startPos, dragging, setDragging, setPosition }: useOnDragMoveProps) {
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging || !windowRef.current || !headerRef.current) return;

      const diffX = e.clientX - startMouse.current.x;
      const diffY = e.clientY - startMouse.current.y;

      const nextX = startPos.current.x + diffX;
      const nextY = startPos.current.y + diffY;

      const headerRect = headerRef.current.getBoundingClientRect();

      const minX = 0;
      const maxX = window.innerWidth - headerRect.width;

      const minY = 0;
      const maxY = window.innerHeight - headerRect.height;

      setPosition({
        x: Math.max(minX, Math.min(nextX, maxX)),
        y: Math.max(minY, Math.min(nextY, maxY)),
      });
    }

    function onMouseUp() {
      setDragging(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);
}

export default useOnDragMove