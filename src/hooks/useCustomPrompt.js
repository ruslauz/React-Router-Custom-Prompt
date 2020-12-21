import { Fragment, useEffect, useState } from 'react';
import {useHistory, useLocation, Prompt} from 'react-router-dom';
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

  const CustomPrompt = ({children, showPrompt, ...defaultModalProps}) => {
    const when = showPrompt && !confirm
    const userDialogProps = {
      showPrompt: modalIsActive,
      onConfirm,
      onCancel: setModalIsActive,
    }

    return (
      <Fragment>
        <Prompt when={when} message={message}/>
        {children && typeof children === 'function'
          ? children(userDialogProps)
          : <Modal open={modalIsActive} onConfirm={onConfirm} onCancel={setModalIsActive} {...defaultModalProps}/>
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
    showPrompt: !confirm,
    CustomPrompt
  }
}

export default useCustomPrompt;