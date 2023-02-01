// import React, { useRef } from 'react';

// function Modal({ ShowModal, SetModalIsOpen }) {
//     const modalRef = useRef()

//     const closeModal = (e) => {
//         if (modalRef.current === e.target) {
//             SetModalIsOpen(false)
//         }
//     }

//     return (
//         <>
//             {ShowModal ? (
//                 <div ref={modalRef} onClick={closeModal}>
//                     <div
//                         style={{
//                             overlay: {
//                                 position: 'fixed',
//                                 backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                
//                             },
//                             content: {
//                                 position: 'absolute',
//                                 border: 'none',
//                                 overflow: 'auto',
//                                 WebkitOverflowScrolling: 'touch',
//                                 borderRadius: '20px',
//                                 padding: '10px',
//                                 background: '#00000',
//                                 margin: 'auto',
//                                 left: '25%',
//                                 width: '290px',
//                                 height: '380px',
//                                 right: '25%'
//                             }

//                         }}>
//                     </div>
//                     <div>
//                         모달창
//                     </div>
//                 </div>
//             ) : null}


//         </>
//     );
// };

// export default Modal; 