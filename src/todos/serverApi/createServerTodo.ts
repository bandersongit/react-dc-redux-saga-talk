import { delay } from "redux-saga";
import { uniqueId } from "lodash";
import { Todo } from "@App/todos/todoState";

export async function createServerTodo(task: string): Promise<Todo> {
    await delay(500);
    return {
        task,
        isCompleted: false,
        id: uniqueId()
    };
}