import { useEffect, useState } from 'react';

const useScrollActiveElement = (element, offsetTop = 0, offsetBottom = 0) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const elem = document.getElementById(element);
    let elemOffsetTop = elem.offsetTop - offsetTop;
    let elemOffsetBottom = elemOffsetTop + elem.offsetHeight + offsetBottom;
    if (window.scrollY > elemOffsetTop && window.scrollY < elemOffsetBottom) {
      !active && setActive(true);
    } else {
      active && setActive(false);
    }
  };

  return active;
};

export default useScrollActiveElement;
