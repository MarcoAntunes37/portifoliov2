import { Dispatch, SetStateAction } from "react";
import { WindowType, WindowVisualState } from "../type/Types";

export interface OpenWindow {
  id: string;
  type: WindowType;
  title: string;
  position: { x: number; y: number };
  zAxis: number;
  windowState: WindowVisualState;
  setWindowState: (state: WindowVisualState) => void;
}