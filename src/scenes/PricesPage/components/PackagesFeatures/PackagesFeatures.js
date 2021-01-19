import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import { parseCellValue } from './utils';
import { useBreakpoints } from '@hooks';
import style from './PackagesFeatures.module.scss';

const MOBILE_VIEW = 1220;

const PackagesFeatures = ({
  primary,
  fields,
  isPremium,
  showBar,
  hideBar,
  scrollableRef,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useBreakpoints();

  useEffect(() => {
    const mobile = width < MOBILE_VIEW;
    setIsMobile(mobile);
    console.log(mobile);
  }, [width]);

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
                  className={classnames(style.statuses, {
                    [style.statusesdesktop]: !isMobile,
                    [style.statusesmobile]: isMobile,
                  })}
                >
                  <div
                    className={classnames(style.cell, {
                      [style.cellmobile]: isMobile,
                      [style.celldesktop]: !isMobile,
                    })}
                  >
                    {basicStatus}
                  </div>
                  <div
                    className={classnames(style.cell, {
                      [style.cellmobile]: isMobile,
                      [style.celldesktop]: !isMobile,
                    })}
                  >
                    {plusStatus}
                  </div>
                  <div
                    className={classnames(style.cell, {
                      [style.cellmobile]: isMobile,
                      [style.celldesktop]: !isMobile,
                    })}
                  >
                    {businessStatus}
                  </div>
                  <div
                    className={classnames(style.cell, {
                      [style.cellmobile]: isMobile,
                      [style.celldesktop]: !isMobile,
                    })}
                  >
                    {enterpriseStatus}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

PackagesFeatures.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
  scrollableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default PackagesFeatures;
