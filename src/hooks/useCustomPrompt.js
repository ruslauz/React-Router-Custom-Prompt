import { Fragment, useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Prompt} from 'react-router-dom';
import Modal from '../components/Modal';


const useCustomPrompt = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [pathTo, setPathTo] = useState('')
  const [confirm, setConfirm] = useState(false);
  const history = useHistory();
  const currentLocation = useLocation();
  const onConfirm = () => {
    setConfirm(true)
    setModalIsActive(!modalIsActive)
  }
  const message = (location) => {
    if (location.pathname === currentLocation.pathname) return;
    setModalIsActive(true)
    setPathTo(location.pathname)
    return '';
  }
  const CustomPrompt = ({
    modal, 
    modalProps, 
    ...defaultModalProps
  }) => {
    const UserModal = modal
    return (
      <Fragment>
        <Prompt when={!confirm} message={message}/>
        {UserModal
          ? <UserModal {...modalProps} />
          : <Modal isActive={modalIsActive} onConfirm={onConfirm} onClose={setModalIsActive} {...defaultModalProps}/>
        }
      </Fragment>
    )
  }

  useEffect(() => {
    if (confirm) {
      history.push(pathTo);
    }
  }, [confirm, pathTo, history])
  
  return {
    confirm,
    message,
    modalIsActive,
    onConfirm,
    setModalIsActive,
    CustomPrompt
  }
}

export default useCustomPrompt;

