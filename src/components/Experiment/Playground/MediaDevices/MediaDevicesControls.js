import React from 'react';
import Icon from '../../../Icon';

const MediaDevicesControls = ({ snaps, areMultipleVideoDevices, handleVideoDeviceChange }) => (
  <div
    className="experiment__playground__content--media-devices__controls"
  >
    <div
      className="experiment__playground__content--media-devices__controls__strip"
    >
      {
        snaps && snaps.map((snap, index) => (
          <img
            className="experiment__playground__content--media-devices__controls__strip__item"
            alt={`Snap ${index}`}
            key={index}
            src={snap}
          />
        ))
      }
    </div>
    {areMultipleVideoDevices &&
      <button
        className="experiment__playground__content__button"
        onClick={handleVideoDeviceChange}
      >
        <Icon
          name="switch_video"
        />
      </button>
    }
  </div>
);

export default MediaDevicesControls;
