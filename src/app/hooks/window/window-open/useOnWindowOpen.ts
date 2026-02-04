import { Dispatch, SetStateAction, useEffect } from "react";

interface WindowStateOpenProps {
    setWindowState: Dispatch<SetStateAction<"opening" | "open" | "closing" | "closed">>;
}

function useOnWindowOpen({ setWindowState }: WindowStateOpenProps) {
    useEffect(() => {
        requestAnimationFrame(() => {
            setWindowState("open");
        });
    }, []);
}

export default useOnWindowOpen