import { Todo, TodoState } from "@App/todos/todoState";

export abstract class TodoReducer {
    constructor() { return; }
    updateProgress: (hasProgress: boolean) => TodoState = () => {
        throw "not implemented";
    }
    loadTodos: (todos: Todo[]) => TodoState = () => {
        throw "not implemented";
    }    
    addTodo: (todo: Todo) => TodoState = () => {
        throw "not implemented";
    }
    removeTodo: (id: string) => TodoState = () => {
        throw "not implemented";
    }
    toggleCompletion: (id: string) => TodoState = () => {
        throw "not implemented";
    }
}