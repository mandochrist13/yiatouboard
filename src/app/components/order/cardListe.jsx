// components/Card.jsx
import React from 'react';
import { Icon } from '@iconify/react';

const Card = ({ titre, compte, icone }) => (
  <div className="col-md-6 col-xl-3">
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4 className="card-title mb-2">{titre}</h4>
            <p className="text-muted fw-medium fs-22 mb-0">{compte}</p>
          </div>
          <div>
            <div className="avatar-md bg-primary bg-opacity-10 rounded">
              <Icon icon={icone} className="fs-32 text-primary avatar-title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
