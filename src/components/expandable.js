import React from 'react';
import './expandable.css'
import useBaseUrl from '@docusaurus/useBaseUrl';

export const Expandable = ({path}) => {
  const [open, setOpen] = React.useState(false);
  const [imageContainerStyles, setImageContainerStyles] = React.useState({});
  const ref = React.useRef(null);
  
  // Open/Close image on click handler
  const toggleExpand = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  // Callback for accessibility event listener to close image if open
  const onKeyDown = (e) => {
    if (open) {
      e.preventDefault();
      setOpen(false);
    }
  };

  // Accessibility handling to close expanded picture with keyPress
  React.useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.removeEventListener("keydown", onKeyDown)
    }
  }, []);

  /**
   * Apply appropriate styles when image is in open/close state
   */
  React.useEffect(() => {
    // There will only ever be one navbar on a page
    const navbar = document.getElementsByClassName('navbar')[0];
    if (open && ref.current) {
      // Disable Scroll when image is open
      document.body.setAttribute('style','overflow:hidden;');
      setImageContainerStyles({
        top: navbar.offsetTop
      });
    } else {
      // Re-enable scroll
      document.body.removeAttribute('style');
      ref.current.focus();
      setImageContainerStyles({})
    }
  }, [open]);
  return (
    <div
      onKeyPress={toggleExpand}
      onClick={toggleExpand}
      className={open ? "expandable-container expanded" : "expandable-container"}
      ref={ref}
      style={imageContainerStyles}
    >
      <img
        tabIndex="0"
        className={open ? "image image-expanded" : "image"}
        src={useBaseUrl(path)}
      />
    </div>
  )
};
