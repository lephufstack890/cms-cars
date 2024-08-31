import React from 'react';

import { KTSVG, toAbsoluteUrl } from '@/_metronic/helpers';
import { Dropdown1 } from '@/_metronic/partials/content/dropdown/Dropdown1';

type Props = {
  className: string;
};

const ListsWidget2: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-dark">Authors</h3>
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
      <div className="card-body pt-2">
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img alt="" className="" src={toAbsoluteUrl('/media/avatars/300-6.jpg')} />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className="flex-grow-1">
            <a className="text-dark fw-bold text-hover-primary fs-6" href="#">
              Emma Smith
            </a>
            <span className="text-muted d-block fw-semobold">Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img alt="" className="" src={toAbsoluteUrl('/media/avatars/300-5.jpg')} />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className="flex-grow-1">
            <a className="text-dark fw-bold text-hover-primary fs-6" href="#">
              Sean Bean
            </a>
            <span className="text-muted d-block fw-semobold">PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img alt="" className="" src={toAbsoluteUrl('/media/avatars/300-11.jpg')} />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className="flex-grow-1">
            <a className="text-dark fw-bold text-hover-primary fs-6" href="#">
              Brian Cox
            </a>
            <span className="text-muted d-block fw-semobold">PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img alt="" className="" src={toAbsoluteUrl('/media/avatars/300-9.jpg')} />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className="flex-grow-1">
            <a className="text-dark fw-bold text-hover-primary fs-6" href="#">
              Francis Mitcham
            </a>
            <span className="text-muted d-block fw-semobold">PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img alt="" className="" src={toAbsoluteUrl('/media/avatars/300-23.jpg')} />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className="flex-grow-1">
            <a className="text-dark fw-bold text-hover-primary fs-6" href="#">
              Dan Wilson
            </a>
            <span className="text-muted d-block fw-semobold">PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget2 };
