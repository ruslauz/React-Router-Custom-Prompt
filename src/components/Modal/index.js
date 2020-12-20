import { memo } from 'react';
import {
  layer, modal, header, title, body, footer, 
  buttons, cancel, confirm, close, /* icon, */ message
} from './Modal.module.scss';
import cross from '../../img/cross.svg';
/* import floppy from '../../img/floppy.svg'; */

const Modal = ({
  open, 
  onConfirm, 
  onCancel, 
  message : modalMessage,
  yesButton,
  noButton,
}) => {
  modalMessage = modalMessage || 'Do you want to leave the page?'
  yesButton = yesButton || 'Yes';
  noButton = noButton|| 'No';
  const closeModal = () => onCancel(false)
  const onModalClick = e => {
    e.stopPropagation()
  }
  return open ? (
    <div className={layer} onClick={closeModal}>
      <div className={modal} onClick={onModalClick}>
        <header className={header}>
          <span className={title}></span>
          <button className={close} onClick={closeModal}><img src={cross} alt="close-button"/></button>
        </header>
        
        <div className={body}>
          {/* <div className={icon}>
            <img src={floppy} alt="save-icon"/>
          </div> */}
          <div className={message}>{modalMessage}</div>
        </div>
        <footer className={footer}>
          <div className={buttons}>
            <button className={confirm} onClick={onConfirm}>{yesButton}</button>
            <button className={cancel} onClick={closeModal}>{noButton}</button>
          </div>
        </footer>
      </div>
    </div>
  ) : null
}

export default memo(Modal);