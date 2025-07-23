import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Zoomable({ children, ratio = 2, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999999,
    cursor: "zoom-out",
  };

  const contentWrapperStyle = {
    transform: `scale(${ratio})`,
    transformOrigin: "center center",
    cursor: "auto",
    maxWidth: "100%",
  };

  const closeBtnStyle = {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
    zIndex: 1001,
  };

  return (
    <>
      <div
        style={{ display: "inline-flex", cursor: "zoom-in" }}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        {children}
      </div>

      {isOpen && (
        <div style={overlayStyle} onClick={() => setIsOpen(false)}>
          <button
            aria-label="Close"
            style={closeBtnStyle}
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <div
            style={contentWrapperStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

Zoomable.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.number,
};
