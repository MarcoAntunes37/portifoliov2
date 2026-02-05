import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useRef, useState } from "react";
import "./DragabbleWindow.scss";
import useOnWindowClosed from "../../hooks/window/window-closed/useOnWindowClosed"
import useOnWindowOpen from "../../hooks/window/window-open/useOnWindowOpen";
import useOnWindowDrag from "../../hooks/window/window-drag/useOnWindowDrag";

interface DraggableWindowProps extends PropsWithChildren<{}> {
  title: string;
  children: ReactNode;
  initialPosition: { x: number; y: number };
  zAxis: number;
  windowState: "opening" | "open" | "closing" | "closed";
  setWindowState: (state: "opening" | "open" | "closing" | "closed") => void;
  onFocus: () => void;
  requestClose: () => void;
  onClosed: (id: string) => void;
}

export default function DraggableWindow(
  { title, children, initialPosition, zAxis, windowState, setWindowState, onFocus, requestClose, onClosed }: DraggableWindowProps) {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLElement | null>(null);

  const startMouse = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  useOnWindowClosed({ windowState, onClosed });

  useOnWindowOpen({ setWindowState });

  const onMouseDown = useOnWindowDrag(
    { windowRef, headerRef, parentRef, startMouse, startPos, dragging, setDragging, setPosition, position });

  return (
    <div
      ref={windowRef}
      className={`draggable-window-wrapper ${windowState}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: zAxis,
      }}
      onMouseDown={onFocus}
    >
      <div className={`draggable-window ${windowState}`}>
        <div ref={headerRef} className="draggable-header" onMouseDown={onMouseDown}>
          <span>{title}</span>
          <div className="window-actions">
            <button type="button" className="ui-button" onClick={requestClose}>
              <span className="close">X</span>
            </button>
          </div>
        </div>
        <div className="draggable-content">
          {children}
        </div>
      </div>
    </div >
  );
}
