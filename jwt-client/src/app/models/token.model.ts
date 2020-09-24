import { Authorities } from './authorities.model';

export interface Token {
  lastName: string;
  roomNumber: string;
  user_name: string;
  fullName: string;
  personalNumber: string;
  userName: string;
  title: string;
  authorities?: Authorities[] | null;
  client_id: string;
  firstName: string;
  phone: string;
  prefLang: string;
  scope?: string[] | null;
  exp: number;
  department: string;
  jti: string;
  email: string;
}
