import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import { parseCellValue } from './utils';
import { useBreakpoints } from '@hooks';
import style from './PlansFeatures.module.scss';

const MOBILE_VIEW = 780;

const PlansFeatures = ({ primary, items, showBar, hideBar, activepoint }) => {
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
          <RichText render={primary.title.richText} />
        </div>
        <ul className={style.list}>
          {items.map((item, index) => {
            const basicStatus = parseCellValue(
              RichText.asText(item.basicstatus.richText)
            );
            const plusStatus = parseCellValue(
              RichText.asText(item.plusstatus.richText)
            );
            const businessStatus = parseCellValue(
              RichText.asText(item.businessstatus.richText),
              { withGradient: true }
            );
            const enterpriseStatus = parseCellValue(
              RichText.asText(item.enterprisestatus.richText)
            );

            return (
              <li key={index} className={style.item}>
                <div
                  className={classnames(style.name, {
                    [style.namedesktop]: !isMobile,
                    [style.namemobile]: isMobile,
                  })}
                >
                  <RichText render={item.featuretitle.richText} />
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
  items: PropTypes.array.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
  activepoint: PropTypes.number.isRequired,
};

export default PlansFeatures;
