import { memo } from 'react';
import {
  layer, modal, header, title, body, footer, 
  buttons, cancel, confirm, close, /* icon, */ message
} from './Modal.module.scss';
import cross from '../../img/cross.svg';
/* import floppy from '../../img/floppy.svg'; */

const Modal = ({
  isActive, 
  onConfirm, 
  onClose, 
  message : modalMessage = 'Do you want to leave the page?',
  yesButton = 'Yes',
  noButton = 'No',
}) => {
  const closeModal = () => onClose(false)
  const onModalClick = e => {
    e.stopPropagation()
  }
  return isActive ? (
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
            <button className={cancel} onClick={onConfirm}>{yesButton}</button>
            <button className={confirm} onClick={closeModal}>{noButton}</button>
          </div>
        </footer>
      </div>
    </div>
  ) : null
}

export default memo(Modal);