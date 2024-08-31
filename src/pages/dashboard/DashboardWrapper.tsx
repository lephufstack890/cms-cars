import { FC } from 'react';

import { PageTitle } from '@/_metronic/layout/core';
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  MixedWidget2,
  MixedWidget8,
  MixedWidget10,
  MixedWidget11,
  TablesWidget5,
  TablesWidget10,
} from '@/_metronic/partials/widgets';
import { trans } from '@/utils';

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className="row gy-5 g-xl-8">
      <div className="col-xxl-4">
        <MixedWidget2
          chartColor="danger"
          chartHeight="200px"
          className="card-xl-stretch mb-xl-8"
          strokeColor="#cb1e46"
        />
      </div>
      <div className="col-xxl-4">
        <ListsWidget5 className="card-xxl-stretch" />
      </div>
      <div className="col-xxl-4">
        <MixedWidget10
          chartColor="primary"
          chartHeight="150px"
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
        />
        <MixedWidget11
          chartColor="primary"
          chartHeight="175px"
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 gx-xl-8">
      <div className="col-xxl-4">
        <ListsWidget3 className="card-xxl-stretch mb-xl-3" />
      </div>
      <div className="col-xl-8">
        <TablesWidget10 className="card-xxl-stretch mb-5 mb-xl-8" />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 g-xl-8">
      <div className="col-xl-4">
        <ListsWidget2 className="card-xl-stretch mb-xl-8" />
      </div>
      <div className="col-xl-4">
        <ListsWidget6 className="card-xl-stretch mb-xl-8" />
      </div>
      <div className="col-xl-4">
        <ListsWidget4 className="card-xl-stretch mb-5 mb-xl-8" items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}

    <div className="row g-5 gx-xxl-8">
      <div className="col-xxl-4">
        <MixedWidget8
          chartColor="success"
          chartHeight="150px"
          className="card-xxl-stretch mb-xl-3"
        />
      </div>
      <div className="col-xxl-8">
        <TablesWidget5 className="card-xxl-stretch mb-5 mb-xxl-8" />
      </div>
    </div>
  </>
);

const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{trans('MENU.DASHBOARD')}</PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
