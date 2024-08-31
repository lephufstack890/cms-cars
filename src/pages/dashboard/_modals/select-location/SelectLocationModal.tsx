import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { KTSVG } from '@/_metronic/helpers';

type Props = {
  data: { location: string; setLocation: Dispatch<SetStateAction<string>> };
  handleClose: () => void;
  show: boolean;
};

const SelectLocationModal: React.FC<Props> = ({ show, handleClose, data }) => {
  useEffect(() => {
    initMap();
  }, []);

  const [location, setLocation] = useState(data.location);
  const dissmissLocation = () => {
    setLocation(data.location);
    handleClose();
  };
  const applyLocation = () => {
    data.setLocation(location);
    handleClose();
  };
  const initMap = () => {
    /*empty*/
  };

  return (
    <Modal
      aria-hidden="true"
      className="modal fade"
      data-backdrop="static"
      dialogClassName="modal-xl"
      id="kt_modal_select_location"
      onHide={dissmissLocation}
      role="dialog"
      show={show}
      tabIndex={-1}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select Location</h5>

          <div
            className="btn btn-icon btn-sm btn-active-light-primary ms-2"
            onClick={dissmissLocation}
          >
            <KTSVG className="svg-icon-2x" path="/media/icons/duotune/arrows/arr061.svg" />
          </div>
        </div>
        <div className="modal-body">
          <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} />
          <div className="map h-450px" id="kt_modal_select_location_map" />
        </div>
        <div className="modal-footer">
          <button className="btn btn-light-primary" onClick={dissmissLocation} type="button">
            Cancel
          </button>
          <button className="btn btn-primary" id="submit" onClick={applyLocation} type="button">
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { SelectLocationModal };
