import {RequestType} from "@shared/services/hub.type";

export interface DynamicData {
  id?: string;
  request: RequestType | undefined;
  sessionId?: string;
  jsonData?: string;
  tableId?: string;
  formId?: string;
  actionId?: string;
  data?: Value[];
}

export interface SearchData extends DynamicData {
  viewId: string;
  allowTotalRecord?: boolean;
  filterId: string[] | string;
  keyWord?: string;
  sumField?: string;
  orderBy: OrderByModel[];
  paging: {
    take: number;
    skip: number;
  };
}

export interface ImportData extends DynamicData {
  importTemplateId: string;
  fileName: string;
}

export interface AuthenticationData extends DynamicData {
  authenticationAction: string;
  account?: string;
  password?: string;
  fullName?: string;
  affiliateRef?: string;
  securitySessionSetting?: SecuritySessionSetting;
  changePasswordModel?: ChangePasswordModel;
}

export interface SecuritySessionSetting {
  userAgent: string;
  os: string;
  browser: string;
  device: string;
  osVersion: string;
  browserVersion: string;
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export interface ChangePasswordModel {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}


export interface Value {
  name: string;
  value: string;
}

export interface OrderByModel {
  fieldName: string;
  type: string;
}

export interface Response {
  session: string;
  success: boolean;
  message: string;
  data: any;
}

export interface SearchResponse extends Response {
  totalRecord: number;
  pageSize: number;
  data: object[];
}
