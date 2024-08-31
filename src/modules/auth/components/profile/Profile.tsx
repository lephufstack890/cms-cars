import { Collapse } from 'antd';

import { AgreementMinute } from '@/modules/auth/components/profile/information/AgreementMinute';
import { BackgroundCheck } from '@/modules/auth/components/profile/information/BackgroundCheck';
import { Bank } from '@/modules/auth/components/profile/information/Bank';
import { Bio } from '@/modules/auth/components/profile/information/Bio';
import { Consent } from '@/modules/auth/components/profile/information/Consent';
import { Declaration } from '@/modules/auth/components/profile/information/Declaration';
import { DrivingLicense } from '@/modules/auth/components/profile/information/DrivingLicense';
import { EmergencyContact } from '@/modules/auth/components/profile/information/EmergencyContact';
import { IdentityCard } from '@/modules/auth/components/profile/information/IdentityCard';
import { Vaccine } from '@/modules/auth/components/profile/information/Vaccine';
import { VehicleImage } from '@/modules/auth/components/profile/vehicle/Image';
import { VehicleInsurance } from '@/modules/auth/components/profile/vehicle/Insurance';
import { VehicleRegistrationCertificate } from '@/modules/auth/components/profile/vehicle/RegistrationCertificate';

export function Profile() {
  const informationSections = [
    { component: <Bio />, name: 'Ảnh chân dung' },
    { component: <IdentityCard />, name: 'CMND / Thẻ Căn Cước / Hộ Chiếu' },
    { component: <DrivingLicense />, name: 'Bằng Lái Xe' },
    { component: <Vaccine />, name: 'Tình Trạng Tiêm Vaccine' },
    { component: <BackgroundCheck />, name: 'Hồ Sơ Xác Minh Nhân Thân' },
    { component: <EmergencyContact />, name: 'Thông Tin Liên Hệ Khẩn Cấp và Địa Chỉ Tạm Trú' },
    { component: <Bank />, name: 'Tài Khoản Ngân Hàng' },
    { component: <AgreementMinute />, name: 'Giấy Tờ Khác' },
    { component: <Declaration />, name: 'Cam Kết' },
    { component: <Consent />, name: 'Consents' },
  ];

  const vehicleSections = [
    { component: <VehicleImage />, name: 'Hình Xe' },
    { component: <VehicleRegistrationCertificate />, name: 'Giấy Đăng Ký Xe' },
    { component: <VehicleInsurance />, name: 'Bảo Hiểm Xe' },
  ];

  return (
    <>
      <Collapse expandIconPosition="end" accordion>
        {informationSections.map((section, index) => (
          <Collapse.Panel key={index} header={section.name}>
            {section.component}
          </Collapse.Panel>
        ))}
      </Collapse>

      <Collapse expandIconPosition="end" accordion>
        {vehicleSections.map((section, index) => (
          <Collapse.Panel key={index} header={section.name}>
            {section.component}
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
}
