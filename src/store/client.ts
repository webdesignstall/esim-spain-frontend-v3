// third-party
import { Action } from "redux";
// application
import { AppReducer } from "./types";
import { useAppAction } from "./hook";

const APPLY_CLIENT_STATE = "APPLY_CLIENT_STATE";

type ApplyClientStateAction<T> = {
    type: typeof APPLY_CLIENT_STATE;
    state: T;
};

function isApplyClientStateAction<T extends any>(
    action: Action
): action is ApplyClientStateAction<T> {
    return action.type === APPLY_CLIENT_STATE;
}

export function applyClientState<T extends object>(
    state: T
): ApplyClientStateAction<T> {
    return {
        type: APPLY_CLIENT_STATE,
        state,
    };
}

export const useApplyClientState = () => useAppAction(applyClientState);

export type StateFromServer = "server";
export type StateFromClient = "client";
export type StateFrom = StateFromServer | StateFromClient;

export function withClientState<
    T extends AppReducer<any, any>,
    S extends ReturnType<T>,
    R extends S & { stateFrom: StateFrom }
>(
    reducer: T extends AppReducer<ReturnType<T> & { stateFrom: any }, any>
        ? AppReducer<ReturnType<T> & { stateFrom: never }, any>
        : T,
    namespace: string
): AppReducer<R> {
    return (
        state: S,
        action: Action | ApplyClientStateAction<{ [ns: string]: any }>
    ): R => {
        const childState = reducer(state, action);

        if (
            isApplyClientStateAction(action) &&
            namespace in (action as any).state
        ) {
            return {
                ...(action as any).state[namespace],
                stateFrom: "client",
            };
        }

        if ("stateFrom" in childState) {
            return childState;
        }

        return {
            ...childState,
            stateFrom: process.browser ? "client" : "server",
        };
    };
}
