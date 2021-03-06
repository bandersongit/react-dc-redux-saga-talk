import { Todo } from "@App/todos/todoState";

export interface ITodoRepository {
    readTodos(): Todo[];
    getHasProgress(): boolean;
}