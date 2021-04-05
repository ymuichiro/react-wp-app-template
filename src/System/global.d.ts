/**
 * Firebase Database User Object
 */
declare interface UserData {
  lastName: string;
  firstName: string;
  organizeName: string;
  email: string;
  phone: string;
  industry: string;
  prefectures: string;
  capital: string;
  employeesCount: string;
  establishedYear: string;
}

/**
 * デバイスの種類を定義
 */
declare type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Basic component args
 */
declare interface BasicComponentArgs {
  className?: string;
  style?: CSSProperties;
}
