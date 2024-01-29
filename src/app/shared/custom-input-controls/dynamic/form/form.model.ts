import {KeyValuePair} from "@core/core.model";

export interface DynamicForm {
  tableId: string;
  tableName: string;
  data: KeyValuePair<any>;
  formId: string;
  actionId: string;
}
