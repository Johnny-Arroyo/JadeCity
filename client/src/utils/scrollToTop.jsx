import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to top
    window.scrollTo(0, 0);

    // If your content is inside a scrollable container
    const scrollableDiv = document.getElementById('your-scrollable-container-id');
    if (scrollableDiv) {
      scrollableDiv.scrollTo(0, 0); // Scroll the container to top
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

