import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import { parseCellValue } from './utils';
import { useBreakpoints } from '@hooks';
import style from './PlansFeatures.module.scss';
import { globalHistory as history } from '@reach/router';

const MOBILE_VIEW = 780;

const PlansFeatures = ({ items, showBar, hideBar, activepoint }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [itemsBasedOnHash, setItemsBasedOnHash] = useState(items);
  const [enterpriseHash, setEnterpriseHash] = useState(false);

  const { width } = useBreakpoints();
  const { location } = history;

  useEffect(() => {
    const mobile = width < MOBILE_VIEW;
    setIsMobile(mobile);
  }, [width]);

  useEffect(() => {
    const enterpriseArray = items.map(
      // eslint-disable-next-line no-unused-vars
      ({ starter_status, prostatus, businessstatus, ...item }) => item
    );
    const businessArray = items.map(
      // eslint-disable-next-line no-unused-vars
      ({ growth_status, enterprisestatus, ...item }) => item
    );
    !location.hash.includes('enterprise')
      ? setItemsBasedOnHash(businessArray)
      : setItemsBasedOnHash(enterpriseArray);

    location.hash.includes('enterprise')
      ? setEnterpriseHash(true)
      : setEnterpriseHash(false);
  }, [location]);

  const detectActiveFeaturesList = (
    starterStatus,
    proStatus,
    businessStatus,
    growthStatus,
    enterpriseStatus,
    featureTitle
  ) => {
    if (enterpriseHash) {
      switch (activepoint) {
        case 0:
          return (
            <div
              className={classnames(
                style.cell,
                style.cellmobile,
                growthStatus && style.active
              )}
            >
              {typeof growthStatus !== 'boolean' && `${growthStatus} `}
              <RichText render={featureTitle} />
            </div>
          );
        case 1:
          return (
            <div
              className={classnames(
                style.cell,
                style.cellmobile,
                enterpriseStatus && style.active
              )}
            >
              {typeof enterpriseStatus !== 'boolean' && `${enterpriseStatus} `}
              <RichText render={featureTitle} />
            </div>
          );
      }
    }
    if (!enterpriseHash) {
      switch (activepoint) {
        case 0:
          return (
            <div
              className={classnames(
                style.cell,
                style.cellmobile,
                starterStatus && style.active
              )}
            >
              {typeof starterStatus !== 'boolean' && `${starterStatus} `}
              <RichText render={featureTitle} />
            </div>
          );
        case 1:
          return (
            <div
              className={classnames(
                style.cell,
                style.cellmobile,
                proStatus && style.active
              )}
            >
              {typeof proStatus !== 'boolean' && `${proStatus} `}
              <RichText render={featureTitle} />
            </div>
          );
        case 2:
          return (
            <div
              className={classnames(
                style.cell,
                style.cellmobile,
                businessStatus && style.active
              )}
            >
              {typeof businessStatus !== 'boolean' && `${businessStatus} `}
              <RichText render={featureTitle} />
            </div>
          );
      }
    }
  };
  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.list}>
          {itemsBasedOnHash.map((item, index) => {
            const starterStatus =
              !enterpriseHash &&
              parseCellValue(RichText.asText(item?.starter_status?.richText));
            const plusStatus =
              !enterpriseHash &&
              parseCellValue(RichText.asText(item?.prostatus?.richText));
            const businessStatus =
              !enterpriseHash &&
              parseCellValue(RichText.asText(item?.businessstatus?.richText), {
                withGradient: true,
              });
            const enterpriseStatus =
              enterpriseHash &&
              parseCellValue(RichText.asText(item?.enterprisestatus?.richText));

            const growthStatus =
              enterpriseHash &&
              parseCellValue(RichText.asText(item?.growth_status?.richText));

            const featureTitle = item?.featuretitle?.richText;
            return (
              <li key={index} className={style.item}>
                <div
                  className={classnames(style.name, {
                    [style.namedesktop]: !isMobile,
                    [style.namemobile]: isMobile,
                  })}
                ></div>
                <div
                  className={classnames(style.statuses, style.statusesdesktop)}
                >
                  {!isMobile ? (
                    <>
                      {!enterpriseHash && (
                        <>
                          <div
                            className={classnames(
                              style.cell,
                              style.celldesktop,
                              starterStatus && style.active,
                              starterStatus === 'disabled' && style.disabled
                            )}
                          >
                            {typeof starterStatus !== 'boolean' &&
                              `${
                                item.featuretitle.richText[0].text.includes(
                                  'domain'
                                )
                                  ? 'Up to'
                                  : ''
                              } ${starterStatus} `}
                            <RichText render={item.featuretitle.richText} />
                          </div>
                          <div
                            className={classnames(
                              style.cell,
                              style.celldesktop,
                              plusStatus && style.active,
                              plusStatus === 'disabled' && style.disabled
                            )}
                          >
                            {typeof plusStatus !== 'boolean' &&
                              `${plusStatus} `}
                            <RichText render={item.featuretitle.richText} />
                          </div>
                          <div
                            className={classnames(
                              style.cell,
                              style.celldesktop,
                              businessStatus && style.active,
                              businessStatus === 'disabled' && style.disabled
                            )}
                          >
                            {typeof businessStatus !== 'boolean' &&
                              `${businessStatus} `}
                            <RichText render={item.featuretitle.richText} />
                          </div>
                        </>
                      )}
                      {enterpriseHash && (
                        <>
                          <div
                            className={classnames(
                              style.cell,
                              style.celldesktop,
                              growthStatus && style.active
                            )}
                          >
                            {typeof growthStatus !== 'boolean' &&
                              `${growthStatus} `}
                            <RichText render={item.featuretitle.richText} />
                          </div>
                          <div
                            className={classnames(
                              style.cell,
                              style.celldesktop,
                              enterpriseStatus && style.active
                            )}
                          >
                            {typeof enterpriseStatus !== 'boolean' &&
                              `${enterpriseStatus} `}
                            <RichText render={item.featuretitle.richText} />
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    detectActiveFeaturesList(
                      starterStatus,
                      plusStatus,
                      businessStatus,
                      growthStatus,
                      enterpriseStatus,
                      featureTitle
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
