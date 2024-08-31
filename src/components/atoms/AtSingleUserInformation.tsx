import clsx from 'clsx';
import { FC } from 'react';

import { AtDefaultAvatar } from '@/components/atoms/AtDefaultAvatar';
import { UserModel } from '@/models';

interface IProps {
  readonly user: UserModel;
  readonly isHiddenDescription?: boolean;
  readonly isHiddenName?: boolean;
}

const AtSingleUserInformation: FC<IProps> = ({ user, isHiddenDescription, isHiddenName }) => {
  return (
    <div className="d-flex align-items-center">
      <AtDefaultAvatar
        avatar={user.avatar}
        className="symbol-50px me-3 overflow-hidden"
        imageHeight={50}
        imageWidth={50}
        name={user.full_name || user.user_name}
      />
      <div className="d-flex flex-column">
        <a
          className={clsx('text-gray-800 text-hover-primary mb-1', isHiddenName && 'd-none')}
          href="#"
        >
          {user.full_name}
        </a>
        <span className={clsx(isHiddenDescription && 'd-none')}>{user.user_name}</span>
      </div>
    </div>
  );
};

export { AtSingleUserInformation };
