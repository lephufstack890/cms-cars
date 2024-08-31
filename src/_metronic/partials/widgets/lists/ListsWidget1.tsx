import React from 'react';

import { KTSVG } from '@/_metronic/helpers';
import { Dropdown1 } from '@/_metronic/partials/content/dropdown/Dropdown1';

type Props = {
  className: string;
};

const ListsWidget1: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">Tasks Overview</span>
          <span className="text-muted mt-1 fw-semobold fs-7">Pending 10 tasks</span>
        </h3>

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
      <div className="card-body pt-5">
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-success">
              <KTSVG
                className="svg-icon-2x svg-icon-success"
                path="/media/icons/duotune/abstract/abs027.svg"
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className="d-flex flex-column">
            <a className="text-dark text-hover-primary fs-6 fw-bold" href="#">
              Project Briefing
            </a>
            <span className="text-muted fw-semobold">Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-warning">
              <KTSVG
                className="svg-icon-2x svg-icon-warning"
                path="/media/icons/duotune/art/art005.svg"
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className="d-flex flex-column">
            <a className="text-dark text-hover-primary fs-6 fw-bold" href="#">
              Concept Design
            </a>
            <span className="text-muted fw-semobold">Art Director</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-primary">
              <KTSVG
                className="svg-icon-2x svg-icon-primary"
                path="/media/icons/duotune/communication/com012.svg"
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className="d-flex flex-column">
            <a className="text-dark text-hover-primary fs-6 fw-bold" href="#">
              Functional Logics
            </a>
            <span className="text-muted fw-semobold">Lead Developer</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-7">
          {/* begin::Symbol */}
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-danger">
              <KTSVG
                className="svg-icon-2x svg-icon-danger"
                path="/media/icons/duotune/coding/cod008.svg"
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className="d-flex flex-column">
            <a className="text-dark text-hover-primary fs-6 fw-bold" href="#">
              Development
            </a>
            <span className="text-muted fw-semobold">DevOps</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center">
          {/* begin::Symbol */}
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-info">
              <KTSVG
                className="svg-icon-2x svg-icon-info"
                path="/media/icons/duotune/general/gen049.svg"
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className="d-flex flex-column">
            <a className="text-dark text-hover-primary fs-6 fw-bold" href="#">
              Testing
            </a>
            <span className="text-muted fw-semobold">QA Managers</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget1 };
