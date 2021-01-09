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
  }

  const onCancel = () => {
    setModalIsActive(false)
  }

  const message = (location) => {
    if (location.pathname === currentLocation.pathname) return;
    setModalIsActive(true)
    setPathTo(location.pathname)
    return '';
  }

  const CustomPrompt = ({children, showPrompt, ...defaultModalProps}) => {
    const when = showPrompt && !confirm
    const childrenProps = {
      showDialog: modalIsActive,
      onConfirm,
      onCancel,
    }

    return (
      <Fragment>
        <Prompt when={when} message={message}/>
        {children && typeof children === 'function'
          ? children(childrenProps)
          : <Modal open={modalIsActive} onConfirm={onConfirm} onCancel={onCancel} {...defaultModalProps}/>
        }
      </Fragment>
    )
  }

  useEffect(() => {
    if (confirm) {
      history.push(pathTo);
    }
  }, [confirm, pathTo, history])
  
  return { CustomPrompt }
}

export default useCustomPrompt;