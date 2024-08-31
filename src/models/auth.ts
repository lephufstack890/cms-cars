export interface UserModel {
  avatar: string;
  country_code: string;
  created_at: string;
  email: string;
  full_name: string;
  id: string;
  password: string;
  phone_number: string;
  status: string;
  updated_at: string;
  user_id: string;
  user_name: string;
  user_type: string;
}

export interface AuthModel extends UserModel {
  token: { access_token: string; expired_time: number; refresh_token: string };
}

export interface FormLoginModel {
  password: string;
  user_name: string;
}

export interface FormRegisterModel {
  first_name: string;
  last_name: string;
  phone_number: string;
  province_id: string;
  referral_code: string;
  service_id: string;
}
