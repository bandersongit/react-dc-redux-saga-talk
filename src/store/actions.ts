import * as TodoActions from '@App/todos/todoActions';
import { ActionType } from "@App/store/actionTypeHelpers";

export type AppActionType = ActionType<typeof TodoActions>;
