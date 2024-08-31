import { isArray } from 'lodash-es';
import { FC } from 'react';

import { AtMultipleUserInformation } from '@/components/atoms/AtMultipleUserInformation';
import { AtSingleUserInformation } from '@/components/atoms/AtSingleUserInformation';
import { UserModel } from '@/models';

type Props = {
  readonly user: UserModel | UserModel[];
  readonly isHiddenDescription?: boolean;
  readonly isHiddenName?: boolean;
  readonly limit?: number;
};

const AvatarGroup: FC<Props> = ({ user, limit, isHiddenDescription, isHiddenName }) => {
  if (!isArray(user) || user.length === 1) {
    return (
      <AtSingleUserInformation
        isHiddenDescription={isHiddenDescription}
        isHiddenName={isHiddenName}
        user={isArray(user) ? user[0] : user}
      />
    );
  }

  return (
    <AtMultipleUserInformation
      isHiddenDescription={isHiddenDescription}
      isHiddenName={isHiddenName}
      limit={limit}
      users={user}
    />
  );
};

export { AvatarGroup };
