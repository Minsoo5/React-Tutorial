import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // Ref allows us to use the same piece of 'something' everytime and get it back, like a same div everytime.
  if (!elRef.current) {
    // elRef works here almost like a container to get the same thing back each time.
    elRef.current = document.createElement("div"); // This div now operates like a singleton
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
