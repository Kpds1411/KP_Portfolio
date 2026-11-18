import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { colors } from "../../constants";

const Modal = ({ isOpen, onClose, title, children, isDarkMode }) => {
  const modalRef = useRef(null);
  const { background, text } = isDarkMode ? colors.dark : colors.light;

  // Keep the latest onClose without re-running the effect on every render
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseRef.current();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Lock background scrolling while the modal is open. Pad by the scrollbar
    // width so the page doesn't jump sideways when the scrollbar disappears.
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2.5`}
    >
      <div
        ref={modalRef}
        className={`${background} rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col`}
      >
        <div
          className={`${text} flex justify-between items-center border-b px-2.5 py-1.5 md:px-4 md:py-2.5 shrink-0`}
        >
          {title ? (
            <h2 className="text-lg md:text-3xl font-semibold">{title}</h2>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className=" text-xl md:text-3xl"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Images inside are capped so tall (portrait) photos fit on screen */}
        <div className="p-2 md:p-4 overflow-y-auto overscroll-contain min-h-0 [&_img]:max-h-[70vh] [&_img]:w-auto [&_img]:mx-auto [&_img]:object-contain">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Modal;
