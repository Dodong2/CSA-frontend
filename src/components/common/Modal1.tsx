/*---Hooks---*/
import React from "react";
/*---Images---*/
import pic5 from '../../assets/img/pic5.svg'
/*---Icons---*/
import { IoClose } from "react-icons/io5";

interface Modal1Props {
  setModal1: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal1: React.FC<Modal1Props> = ({ setModal1 }) => {
  return (
    <>
      <div className="modal-content1">
        <div className="modal-logout-header"><button onClick={() => setModal1(false)}><IoClose /></button></div>
        <div className="modal-logout-img"><img src={pic5} alt="pic5"/></div>
        <div className="modal-logout-txt"><p>Are you sure</p></div><br/>
        <div className="logout-btn"><button>Yes</button></div>
      </div>
    </>
  );
};

export default Modal1;
