import React, { useState, useEffect } from 'react';
import style from './MenuItem.module.scss';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Arrow from './image/arrow.inline.svg';
import Image from '@components/Image/Image';
import classnames from 'classnames';
import { Link } from 'gatsby';

let mouseLocs = [];
let lastDelayLoc = null;
let timeoutId = null;

const activationDelay = function () {
  if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
    // If there is no other submenu row already active, then
    // go ahead and activate immediately.
    return 0;
  }

  let offset = this.offset();
  let upperLeft = {
    x: offset.left,
    y: offset.top - options.tolerance,
  };
  let upperRight = {
    x: offset.left + this.outerWidth(),
    y: upperLeft.y,
  };
  let lowerLeft = {
    x: offset.left,
    y: offset.top + this.outerHeight() + options.tolerance,
  };
  let lowerRight = {
    x: offset.left + this.outerWidth(),
    y: lowerLeft.y,
  };
  let loc = mouseLocs[mouseLocs.length - 1];
  let prevLoc = mouseLocs[0];

  if (!loc) {
    return 0;
  }

  if (!prevLoc) {
    prevLoc = loc;
  }

  if (
    prevLoc.x < offset.left ||
    prevLoc.x > lowerRight.x ||
    prevLoc.y < offset.top ||
    prevLoc.y > lowerRight.y
  ) {
    // If the previous mouse location was outside of the entire
    // menu's bounds, immediately activate.
    return 0;
  }

  if (lastDelayLoc && loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
    // If the mouse hasn't moved since the last time we checked
    // for activation status, immediately activate.
    return 0;
  }

  // Detect if the user is moving towards the currently activated
  // submenu.
  //
  // If the mouse is heading relatively clearly towards
  // the submenu's content, we should wait and give the user more
  // time before activating a new row. If the mouse is heading
  // elsewhere, we can immediately activate a new row.
  //
  // We detect this by calculating the slope formed between the
  // current mouse location and the upper/lower right points of
  // the menu. We do the same for the previous mouse location.
  // If the current mouse location's slopes are
  // increasing/decreasing appropriately compared to the
  // previous's, we know the user is moving toward the submenu.
  //
  // Note that since the y-axis increases as the cursor moves
  // down the screen, we are looking for the slope between the
  // cursor and the upper right corner to decrease over time, not
  // increase (somewhat counterintuitively).
  function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
  }

  var decreasingCorner = upperRight,
    increasingCorner = lowerRight;

  // Our expectations for decreasing or increasing slope values
  // depends on which direction the submenu opens relative to the
  // main menu. By default, if the menu opens on the right, we
  // expect the slope between the cursor and the upper right
  // corner to decrease over time, as explained above. If the
  // submenu opens in a different direction, we change our slope
  // expectations.
  if (options.submenuDirection == 'left') {
    decreasingCorner = lowerLeft;
    increasingCorner = upperLeft;
  } else if (options.submenuDirection == 'below') {
    decreasingCorner = lowerRight;
    increasingCorner = lowerLeft;
  } else if (options.submenuDirection == 'above') {
    decreasingCorner = upperLeft;
    increasingCorner = upperRight;
  }

  var decreasingSlope = slope(loc, decreasingCorner),
    increasingSlope = slope(loc, increasingCorner),
    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
    prevIncreasingSlope = slope(prevLoc, increasingCorner);

  if (
    decreasingSlope < prevDecreasingSlope &&
    increasingSlope > prevIncreasingSlope
  ) {
    // Mouse is moving from previous location towards the
    // currently activated submenu. Delay before activating a
    // new menu row, because user may be moving into submenu.
    lastDelayLoc = loc;
    return DELAY;
  }

  lastDelayLoc = null;
  return 0;
};

const MenuItem = ({ primary, fields }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(fields[activeImage].image);
  useEffect(() => {
    setImage(fields[activeImage].image);
  }, [activeImage]);

  const handleMouseEnter = (id) => {
    setActiveImage(id);
  };
  const title = RichText.asText(primary.title);

  const toggleOpenSubMenu = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    if (document.querySelector('html').classList.contains('fixed')) {
      document.querySelector('html').classList.remove('fixed');
    }
  };

  const classItem = classnames({
    [style.item]: true,
    [style[title]]: true,
    [style.open]: open,
  });

  return (
    <li className={classItem} onClick={toggleOpenSubMenu}>
      {title}
      <Arrow />
      <div className={style.submenu}>
        <div className={style.container}>
          <div className={style.list}>
            {fields.map((item, index) => {
              const text = RichText.asText(item.name);
              const link = '/' + RichText.asText(item.link);
              return (
                <Link
                  to={link}
                  className={style.link}
                  key={text}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={handleClick}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className={style.imageWrapper}>
            <Image image={image} />
          </div>
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  primary: object,
  fields: array,
};

export default MenuItem;
