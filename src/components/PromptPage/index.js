import { memo, useEffect, useState } from "react";
import useCustomPrompt from '../../hooks/useCustomPrompt';
import {Dialog, Switch} from 'evergreen-ui';

const PromptPage = () => {
  const {CustomPrompt, modalIsActive, onConfirm, onCancel} = useCustomPrompt();
  const [showPrompt, setShowPrompt] = useState(true)
  const [userDialog, setUserDialog] = useState(null);
  const [dialogProps, setDialogProps] = useState(null);
  const [message, setMessage] = useState(null);
  const [yesButton, setYesButton] = useState(null);
  const [noButton, setNoButton] = useState(null);
  const setRadios = ({message = null, yesButton = null, noButton = null, userDialog = null, dialogProps = null}) => {
    setMessage(message);
    setYesButton(yesButton);
    setNoButton(noButton);
    setUserDialog(userDialog);
    setDialogProps(dialogProps);
  }
  const custom = {
    message: {message: 'Вы действительно хотите покинуть страницу'},
    buttons: {yesButton: 'Да', noButton: 'Нет'},
    dialog: {
      userDialog: Dialog, 
      dialogProps: {
        hasHeader: false,
        isShown: modalIsActive,
        onConfirm,
        onCancel,
        children: 'Do you want to leave the page?',
      }
    }
  }
  const onCheckBox = e => {
    setShowPrompt(e.target.checked)
  }
  const onRadio = e => {
    setRadios(custom[e.target.value])
  }
  useEffect(() => {
    setDialogProps(state => state && {...state, isShown: modalIsActive})
  }, [modalIsActive])
  
  return (
    <div>
      <h1>Click on Another Page link!</h1>
      <CustomPrompt 
        showPrompt={showPrompt}
        modal={userDialog}
        modalProps={dialogProps}
        message={message}
        yesButton={yesButton}
        noButton={noButton}/>
        <div className='inputs'>
          <label><input type='checkbox' onChange={onCheckBox} checked={showPrompt}/>Enable Prompt</label>
          <label><input name='custom' onChange={onRadio} type='radio' value='message'/ >Custom message</label>
          <label><input name='custom' onChange={onRadio} type='radio' value='buttons'/ >Custom buttons` text</label>
          <label><input name='custom' onChange={onRadio} type='radio' value='dialog'/ >Custom Dialog</label>
        </div>
    </div>
  )
}

export default memo(PromptPage);