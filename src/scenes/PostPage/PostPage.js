import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './PostPage.module.scss';
import { dateToString } from '@helpers';
import classnames from 'classnames';

import Text from './components/Text/Text';
import Table from './components/Table/Table';
import TableOfContents from './components/TableOfContents/TableOfContents';

import Img from './components/Img/Img';
import Video from './components/Video/Video';
import ArticleSemanticMarkup from './components/ArticleSemanticMarkup/ArticleSemanticMarkup';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import Subscribe from '@components/Subscribe';
import CallToAction from '@components/CallToAction/CallToAction';
import Articles from '@components/Articles/Articles';
import { useScrollDirection } from '@hooks';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

const PostPage = ({ current, tags, currentLanguage }) => {
  const {
    body,
    date,
    title,
    description,
    canonical,
    preview,
    categories,
  } = current;
  const baseItemName = 'Blog';
  const baseItemUrl = 'https://secureprivacy.ai/blog';
  const [isPilarPage, setIsPilarPage] = React.useState(false);
  const [table, setTable] = React.useState({});

  React.useEffect(() => {
    categories[0].is_pilar_page_ && setIsPilarPage(true);
  }, [categories]);

  const scrollDir = useScrollDirection();

  const headerStyles = classnames(style.page, {
    [style.pillarpage]: isPilarPage,
    [style.scrolledMenu]: scrollDir === 'down',
  });

  const ref = useRef();
  const refTitle = useRef();

  const inViewport = useOnScreen(ref); // Trigger if 200px is visible from the element
  const inViewportTitleTop = useOnScreen(refTitle); // Trigger if 200px is visible from the element

  return (
    <div className={headerStyles}>
      {isPilarPage && inViewport !== true && (
        <div className={style.tableOfContentsContainer}>
          <div
            className={style.tableOfContents}
            style={inViewportTitleTop === true && { top: '288px' }}
          >
            <div className={style.toTopContainer}>
              <a
                href={`#${title.text.replace(/\W+/g, '-').toLowerCase()}`}
                className={style.toTop}
              >
                <h6> {title.text} </h6>
                <span className={style.toTop__Arrow}></span>
              </a>
              <div className={style.line}> </div>
            </div>
            <div className={style.ToCContent}>
              {body.map((section, index) => {
                switch (section.slice_type) {
                  case 'text':
                    return (
                      <TableOfContents
                        {...section}
                        key={`${section.slice_type}${index}`}
                      />
                    );
                }
              })}
            </div>
            <div className={style.toBottomContainer}>
              <a href={`#call-to-action`} className={style.toTop}>
                <div className={`${style.line} ${style.bottom}`}> </div>
                <div className={style.toBottom}>
                  <a className={style.end}> {`To the end`} </a>
                  <span className={style.toBottom__Arrow}>{''}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className={style.container}>
        <div>
          <div className={style.wrapper}>
            <ul className={style.categoryList} ref={refTitle}>
              {tags.map((item) => {
                return (
                  <li className={style.categoryItem} key={item}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            <div className={style.date}>{dateToString(date)}</div>
          </div>
          <div className={style.title}>
            <h1 id={`${title.text.replace(/\W+/g, '-').toLowerCase()}`}>
              {title.text}
            </h1>
          </div>
          <div className={style.description}>
            <p>{description.text}</p>
          </div>
          {body.map((section, index) => {
            if (section.slice_type === 'table') {
              setTable(section);
            }
            switch (section.slice_type) {
              case 'table_rows_headers':
                return (
                  <Table
                    section={[section, table]}
                    key={`${section.slice_type}${index}`}
                  />
                );
              case 'text':
                return (
                  <Text {...section} key={`${section.slice_type}${index}`} />
                );
              case 'image':
                return (
                  <Img {...section} key={`${section.slice_type}${index}`} />
                );
              case 'video':
                return (
                  <Video {...section} key={`${section.slice_type}${index}`} />
                );
            }
          })}
          <BreadcrumbsSemanticMarkup
            pageTitle={title.text}
            pageUrl={canonical.text}
            baseItemName={baseItemName}
            baseItemUrl={baseItemUrl}
          />
          <ArticleSemanticMarkup
            title={title.text}
            description={description.text}
            date={date}
            canonical={canonical.text}
            image={preview}
          />
        </div>
      </div>
      <div ref={ref}>
        {body.map((section, index) => {
          switch (section.slice_type) {
            case 'agencies':
              return (
                <CallToAction
                  {...section}
                  key={`${section.slice_type}${index}`}
                />
              );
            case 'subscribe':
              return (
                <Subscribe {...section} key={`${section.slice_type}${index}`} />
              );
            case 'articles':
              return (
                <Articles
                  {...section}
                  key={`${section.slice_type}${index}`}
                  currentLanguage={currentLanguage}
                />
              );
          }
        })}
      </div>
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
  tags: PropTypes.array,
  currentLanguage: PropTypes.string,
};

export default PostPage;
