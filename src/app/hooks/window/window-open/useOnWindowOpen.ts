import { Dispatch, SetStateAction, useEffect } from "react";

interface WindowStateOpenProps {
    setWindowState: (state: "opening" | "open" | "closing" | "closed") => void
}

function useOnWindowOpen({ setWindowState }: WindowStateOpenProps) {
    useEffect(() => {
        requestAnimationFrame(() => {
            setWindowState("open");
        });
    }, []);
}

export default useOnWindowOpen