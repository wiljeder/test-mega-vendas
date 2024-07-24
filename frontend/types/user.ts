import { TDefaultEntityFields } from "./defaultEntityFields";

export type TUser = {
  name: string;
  username: string;
} & TDefaultEntityFields;
