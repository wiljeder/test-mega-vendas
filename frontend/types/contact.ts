import { TDefaultEntityFields } from "./defaultEntityFields";
import { TGroup } from "./groups";

export type TContact = {
  name: string;
  phone: string;
  groupId: number;
  Group: TGroup;
} & TDefaultEntityFields;
