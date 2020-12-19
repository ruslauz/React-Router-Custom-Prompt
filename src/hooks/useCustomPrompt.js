import { Fragment, useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Prompt} from 'react-router-dom';
import Modal from '../components/Modal/Modal';


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
  const CustomPrompt = ({modal, modalProps}) => {
    const CustomModal = modal
    return (
      <Fragment>
        <Prompt when={!confirm} message={message}/>
        {CustomModal
          ? <CustomModal {...modalProps} />
          : <Modal isActive={modalIsActive} onConfirm={onConfirm} onClose={setModalIsActive}/>
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

