import * as TodoActions from '@App/store/todos/todoActions';
import { ActionType } from "./actionTypeHelpers";

export type AppActionType = ActionType<typeof TodoActions>;
