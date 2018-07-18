import * as TodoActions from '@App/store/todos/todoActions';
import { ActionType } from "@App/store/actionTypeHelpers";

export type AppActionType = ActionType<typeof TodoActions>;
