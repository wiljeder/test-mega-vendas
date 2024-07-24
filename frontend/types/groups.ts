import { TContact } from "./contact";
import { TDefaultEntityFields } from "./defaultEntityFields";
import { TUser } from "./user";

export type TGroups = {
  name: string;
  ownerId: number;
  GroupsContacts: TContact[];
  Owner: TUser;
} & TDefaultEntityFields;
