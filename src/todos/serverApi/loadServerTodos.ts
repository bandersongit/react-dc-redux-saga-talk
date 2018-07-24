import { Todo } from "@App/todos/todoState";
import { delay } from "redux-saga";
import { uniqueId } from "lodash";

export function loadServerTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>(async resolve => {
        await delay(1500);
        resolve([
            { task: "write app", isCompleted: false, id: uniqueId() },
            { task: "do some styles", isCompleted: false, id: uniqueId() },
        ]);
    });
}