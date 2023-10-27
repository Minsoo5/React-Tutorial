import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null); // Ref allows us to use the same piece of 'something' everytime and get it back, like a same div everytime.
  if (!elRef.current) {
    // elRef works here almost like a container to get the same thing back each time.
    elRef.current = document.createElement("div"); // This div now operates like a singleton
  }

  // useEffect will execute all the inside EXCEPT the clean up code. When the useEffect is called again, it will clean itself with the optional clean up code first then recreate it self.
  // When it will re-run is defined by the dependcies inside the [].

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

// import React, { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const modalRoot = document.getElementById("modal");

// const Modal = ({ children }) => {
//   const elRef = useRef(null);
//   if (!elRef.current) {
//     elRef.current = document.createElement("div");
//   }

//   useEffect(() => {
//     modalRoot.appendChild(elRef.current);
//     return () => modalRoot.removeChild(elRef.current);
//   }, []);

//   return createPortal(<div>{children}</div>, elRef.current);
// };

// export default Modal;
