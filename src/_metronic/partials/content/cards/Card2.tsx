import { FC } from 'react';
import { Link } from 'react-router-dom';

import { toAbsoluteUrl } from '@/_metronic/helpers';
// import { UsersList } from '@/app/modules/profile/components/UsersList';
// import { IconUserModel } from '@/app/modules/profile/ProfileModels';

type Props = {
  badgeColor: string;
  budget: string;
  date: string;
  description: string;
  icon: string;
  progress: number;
  status: string;
  statusColor: string;
  title: string;
  //   users?: Array<IconUserModel>;
};

const Card2: FC<Props> = ({
  icon,
  badgeColor,
  status,
  statusColor,
  title,
  description,
  date,
  budget,
  progress,
  //   users = undefined,
}) => {
  return (
    <Link
      className="card border border-2 border-gray-300 border-hover"
      to="/crafted/pages/profile/overview"
    >
      <div className="card-header border-0 pt-9">
        <div className="card-title m-0">
          <div className="symbol symbol-50px w-50px bg-light">
            <img alt="card2" className="p-3" src={toAbsoluteUrl(icon)} />
          </div>
        </div>

        <div className="card-toolbar">
          <span className={`badge badge-light-${badgeColor} fw-bolder me-auto px-4 py-3`}>
            {status}
          </span>
        </div>
      </div>

      <div className="card-body p-9">
        <div className="fs-3 fw-bolder text-dark">{title}</div>

        <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">{description}</p>

        <div className="d-flex flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
            <div className="fs-6 text-gray-800 fw-bolder">{date}</div>
            <div className="fw-bold text-gray-400">Due Date</div>
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
            <div className="fs-6 text-gray-800 fw-bolder">{budget}</div>
            <div className="fw-bold text-gray-400">Budget</div>
          </div>
        </div>

        <div
          className="h-4px w-100 bg-light mb-5"
          data-bs-toggle="tooltip"
          title="This project completed"
        >
          <div
            className={`bg-${statusColor} rounded h-4px`}
            role="progressbar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* <UsersList users={users} /> */}
      </div>
    </Link>
  );
};

export { Card2 };
