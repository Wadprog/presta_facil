import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import { parseCellValue } from './utils';
import { useBreakpoints } from '@hooks';
import style from './PlansFeatures.module.scss';

const MOBILE_VIEW = 780;

const PlansFeatures = ({ primary, fields, showBar, hideBar, activepoint }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useBreakpoints();

  useEffect(() => {
    const mobile = width < MOBILE_VIEW;
    setIsMobile(mobile);
  }, [width]);

  const detectActiveFeaturesList = (
    basicStatus,
    plusStatus,
    businessStatus,
    enterpriseStatus
  ) => {
    switch (activepoint) {
      case 0:
        return (
          <div className={classnames(style.cell, style.cellmobile)}>
            {basicStatus}
          </div>
        );
      case 1:
        return (
          <div className={classnames(style.cell, style.cellmobile)}>
            {plusStatus}
          </div>
        );
      case 2:
        return (
          <div className={classnames(style.cell, style.cellmobile)}>
            {businessStatus}
          </div>
        );
      case 3:
        return (
          <div className={classnames(style.cell, style.cellmobile)}>
            {enterpriseStatus}
          </div>
        );
      default:
        return (
          <div className={classnames(style.cell, style.cellmobile)}>
            {basicStatus}
          </div>
        );
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <ul className={style.list}>
          {fields.map((item, index) => {
            const basicStatus = parseCellValue(
              RichText.asText(item.basicstatus)
            );
            const plusStatus = parseCellValue(RichText.asText(item.plusstatus));
            const businessStatus = parseCellValue(
              RichText.asText(item.businessstatus),
              { withGradient: true }
            );
            const enterpriseStatus = parseCellValue(
              RichText.asText(item.enterprisestatus)
            );

            return (
              <li key={index} className={style.item}>
                <div
                  className={classnames(style.name, {
                    [style.namedesktop]: !isMobile,
                    [style.namemobile]: isMobile,
                  })}
                >
                  <RichText render={item.featuretitle} />
                </div>
                <div
                  className={classnames(style.statuses, style.statusesdesktop)}
                >
                  {!isMobile ? (
                    <>
                      <div
                        className={classnames(style.cell, style.celldesktop)}
                      >
                        {basicStatus}
                      </div>
                      <div
                        className={classnames(style.cell, style.celldesktop)}
                      >
                        {plusStatus}
                      </div>
                      <div
                        className={classnames(style.cell, style.celldesktop)}
                      >
                        {businessStatus}
                      </div>
                      <div
                        className={classnames(style.cell, style.celldesktop)}
                      >
                        {enterpriseStatus}
                      </div>
                    </>
                  ) : (
                    detectActiveFeaturesList(
                      basicStatus,
                      plusStatus,
                      businessStatus,
                      enterpriseStatus
                    )
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Waypoint onEnter={showBar} onLeave={hideBar} />
    </>
  );
};

PlansFeatures.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
  activepoint: PropTypes.number.isRequired,
};

export default PlansFeatures;
