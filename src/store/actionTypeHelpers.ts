// heavily influenced by typesafe-actions (https://github.com/piotrwitek/typesafe-actions)
export interface SimpleAction<T extends string> { type: T; }
export interface PayloadAction<T extends string, V> { type: T; payload: V; }

export interface SimpleActionCreator<T extends string> { (): SimpleAction<T>; }
export interface PayloadActionCreator<T extends string, V> { (payload: V): PayloadAction<T, V>; }

export function makeSimpleActionCreator<T extends string>(type: T): SimpleActionCreator<T> {
    return () => ({
        type
    });
}

export function makePayloadActionCreator<T extends string, V>(type: T): PayloadActionCreator<T, V> {
    return (payload: V) => ({
        type,
        payload
    });
}

type ActionCreator<T extends string = string> = (...args: any[]) => { type: T };

type ActionCreatorObject<T> = {
    [K in keyof T]: ActionType<T[K]>
};

export type ActionType<T> = T extends ActionCreator
    ? ReturnType<T>
    : T extends object
        ? ActionCreatorObject<T>[keyof T]
        : never;