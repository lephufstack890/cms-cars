import { FileUploadModel } from '@/models';

export interface FormBioProfileModel {
  date_of_birth: string;
  gender: string;
  image: FileUploadModel;
  note: string;
  occupation: string;
  type: string;
}

export interface FormIdentityCardProfileModel {
  address: string;
  district_id: string;
  identity_card: string;
  image_back: FileUploadModel;
  image_front: FileUploadModel;
  place: string;
  province_id: string;
  time: string;
  ward_id: string;
}

export interface FormDrivingLicenseProfileModel {
  image_back: FileUploadModel;
  image_front: FileUploadModel;
  license_class: string;
  license_number: string;
}

export interface FormVaccineProfileModel {
  vaccine: string;
}

export interface FormBackgroundCheckProfileModel {
  image_first: FileUploadModel;
  image_fourth: FileUploadModel;
  image_second: FileUploadModel;
  image_third: FileUploadModel;
  time: string;
  type: string;
}

export interface FormEmergencyContactProfileModel {
  address: string;
  district_id: string;
  name: string;
  phone_number: string;
  province_id: string;
  relationship: string;
  ward_id: string;
}

export interface FormBankProfileModel {
  account_number: string;
  bank_code: string;
  bank_name: string;
  bank_number_1: string;
  bank_number_2: string;
  owner_name: string;
}

export interface FormAgreementMinuteProfileModel {
  expiration_time: string;
  image_fifth: FileUploadModel;
  image_first: FileUploadModel;
  image_fourth: FileUploadModel;
  image_second: FileUploadModel;
  image_sixth: FileUploadModel;
  image_third: FileUploadModel;
  issuance_time: string;
  name: string;
}

export interface FormDeclarationProfileModel {
  policy_fifth: boolean;
  policy_first: boolean;
  policy_fourth: boolean;
  policy_second: boolean;
  policy_sixth: boolean;
  policy_third: boolean;
}
