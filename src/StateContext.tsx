import { createContext } from "react";
import { FullState, initialFullState } from "./State";

interface StateContextProps {
    currentState: FullState;
    setCurrentState: (newState: FullState) => void;
}

export const StateContext = createContext<StateContextProps>({
    currentState: initialFullState(),
    setCurrentState: () => {},
});
