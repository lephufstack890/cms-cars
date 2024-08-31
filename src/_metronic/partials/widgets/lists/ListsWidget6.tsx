import React from 'react';

import { KTSVG } from '@/_metronic/helpers';
import { Dropdown1 } from '@/_metronic/partials/content/dropdown/Dropdown1';

type Props = {
  className: string;
};

const ListsWidget6: React.FC<Props> = ({ className: _ }) => {
  return (
    <div className="card card-xl-stretch mb-5 mb-xl-8">
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-dark">Notifications</h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-flip="top-end"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-trigger="click"
            type="button"
          >
            <KTSVG className="svg-icon-2" path="/media/icons/duotune/general/gen024.svg" />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-0">
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className="svg-icon svg-icon-warning me-5">
            <KTSVG className="svg-icon-1" path="/media/icons/duotune/abstract/abs027.svg" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a className="fw-bold text-gray-800 text-hover-primary fs-6" href="#">
              Group lunch celebration
            </a>
            <span className="text-muted fw-semobold d-block">Due in 2 Days</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-warning py-1">+28%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className="svg-icon svg-icon-success me-5">
            <KTSVG className="svg-icon-1" path="/media/icons/duotune/abstract/abs027.svg" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a className="fw-bold text-gray-800 text-hover-primary fs-6" href="#">
              Navigation optimization
            </a>
            <span className="text-muted fw-semobold d-block">Due in 2 Days</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-success py-1">+50%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className="svg-icon svg-icon-danger me-5">
            <KTSVG className="svg-icon-1" path="/media/icons/duotune/abstract/abs027.svg" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a className="fw-bold text-gray-800 text-hover-primary fs-6" href="#">
              Rebrand strategy planning
            </a>
            <span className="text-muted fw-semobold d-block">Due in 5 Days</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-danger py-1">-27%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-info rounded p-5">
          {/* begin::Icon */}
          <span className="svg-icon svg-icon-info me-5">
            <KTSVG className="svg-icon-1" path="/media/icons/duotune/abstract/abs027.svg" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a className="fw-bold text-gray-800 text-hover-primary fs-6" href="#">
              Product goals strategy
            </a>
            <span className="text-muted fw-semobold d-block">Due in 7 Days</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-info py-1">+8%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget6 };
