import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => 
   ReactDOM.createPortal(
       <div classname='modal'>{children}</div>,
       document.getElementById('modal-root')
   );

export default Modal;