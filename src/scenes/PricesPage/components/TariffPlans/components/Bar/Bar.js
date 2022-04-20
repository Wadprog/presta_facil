import React from 'react';
import PropTypes, { any } from 'prop-types';
import PeriodSwitcher from '../PeriodSwitcher/PeriodSwitcher';
import Card from './components/Card';
import style from './Bar.module.scss';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';
import PlanSwitcher from '../PlanSwitcher/PlanSwitcher';

const Bar = ({
  plans,
  fields,
  primary,
  isAnnual,
  currency,
  itemsSlider,
  togglePeriod,
  laws,
  selectedPlansIndexes,
  selectPlan,
  selectCurrency,
}) => {
  const params2 = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div>
          <div className={style.switcher}>
            <div className={`${style.sidebar}`}>
              <div className={style.header}>
                <div className={style.condition}>
                  <RichText
                    render={primary.widget_currency_billing_title.richText}
                  />
                </div>
                <PeriodSwitcher
                  isAnnual={isAnnual}
                  togglePeriod={togglePeriod}
                  primary={primary}
                />
              </div>
              <PlanSwitcher
                plans={laws}
                selectedPlans={selectedPlansIndexes}
                onSelect={selectPlan}
                selectCurrency={selectCurrency}
                currency={currency}
                currencyDropdownLabel={primary.currencydropdownlabel.text}
              />
              <div className={`${style.widgetSlider}`}>
                <div className={style.text}>
                  <RichText render={primary.all_plans_support.richText} />
                </div>
                {itemsSlider && itemsSlider.length && (
                  <Swiper {...params2}>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[0].law_image}
                          key={itemsSlider[0].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[0].law_text.richText} />
                    </div>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[1].law_image}
                          key={itemsSlider[1].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[1].law_text.richText} />
                    </div>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[2].law_image}
                          key={itemsSlider[2].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[2].law_text.richText} />
                    </div>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[3].law_image}
                          key={itemsSlider[3].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[3].law_text.richText} />
                    </div>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[4].law_image}
                          key={itemsSlider[4].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[4].law_text.richText} />
                    </div>
                    <div className={style.slide}>
                      <div className={style.image}>
                        <Image
                          className={'swiper-origin'}
                          image={itemsSlider[5].law_image}
                          key={itemsSlider[5].law_image.url}
                        />
                      </div>
                      <RichText render={itemsSlider[5].law_text.richText} />
                    </div>
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.block}>
        {fields.map((field, index) => (
          <div className={style.card} key={index}>
            <Card
              title={field.plantitle}
              selectedPlans={plans}
              buttonText={primary.buttontext}
              buttonLink={primary.buttonbaselink}
              currency={currency}
              selectedlawsnumber={plans.length}
              oneprivacypriceusd={field.oneprivacypriceusd}
              twoprivacypriceusd={field.twoprivacypriceusd}
              threeprivacypriceusd={field.threeprivacypriceusd}
              oneprivacypriceeur={field.oneprivacypriceeur}
              twoprivacypriceeur={field.twoprivacypriceeur}
              threeprivacypriceeur={field.threeprivacypriceeur}
              annualcoefficient={primary.annualcoefficient}
              isAnnual={isAnnual}
              isEnterprise={index === 2}
              enterpriseCondition={primary.enterprisecondition.text}
              enterpriseButtonText={primary.enterprisebuttontext.text}
              enterpriseButtonLink={primary.enterprisebuttonlink.url}
              primary={primary}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Bar.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  itemsSlider: any,
  togglePeriod: any,
  laws: any,
  selectedPlansIndexes: any,
  selectCurrency: any,
  selectPlan: any,
  currencydropdownlabel: any,
  plans: PropTypes.array.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Bar;
