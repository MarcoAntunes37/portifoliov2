import { ReactNode } from "react";
import useOnWindowClosed from "../../hooks/window/window-closed/useOnWindowClosed";
import useOnWindowOpen from "../../hooks/window/window-open/useOnWindowOpen";
import "./BottomSheet.scss"

interface BottomSheetProps {
    title: string;
    requestClose: () => void;
    windowState: "opening" | "open" | "closing" | "closed";
    setWindowState: (state: "opening" | "open" | "closing" | "closed") => void;
    onClosed: (id: string) => void;
    children: ReactNode;
}

function BottomSheet({ title, requestClose, onClosed, windowState, setWindowState, children }: BottomSheetProps) {
    useOnWindowClosed({ windowState, onClosed });

    useOnWindowOpen({ setWindowState });

    return (
        <div className={`bottomsheet-backdrop ${windowState}`} onClick={requestClose}>
            <div className={`bottomsheet-container ${windowState}`} onClick={(e) => e.stopPropagation()}>
                <header className="bottomsheet-header">
                    <h3>{title}</h3>
                    <button type="button" className="ui-button" onClick={requestClose}>
                        <span className="close">X</span>
                    </button>
                </header>
                <div className="bottomsheet-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default BottomSheet;