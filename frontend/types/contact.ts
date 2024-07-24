import { TDefaultEntityFields } from "./defaultEntityFields";
import { TGroups } from "./groups";

export type TContact = {
  name: string;
  phone: string;
  groupId: number;
  Group: TGroups;
} & TDefaultEntityFields;
