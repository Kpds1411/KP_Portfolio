import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { colors } from "../../constants";

const Modal = ({ isOpen, onClose, title, children, isDarkMode }) => {
  const modalRef = useRef(null);
  const { background, text } = isDarkMode ? colors.dark : colors.light;

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2.5`}
    >
      <div
        ref={modalRef}
        className={`${background} rounded-lg shadow-lg max-w-2xl w-full`}
      >
        <div
          className={`${text} flex justify-between items-center border-b px-2.5 py-1.5 md:px-4 md:py-2.5`}
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

        <div className="p-2 md:p-4">{children}</div>
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
