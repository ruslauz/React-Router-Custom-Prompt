import { memo, useState } from "react";
import useCustomPrompt from '../../hooks/useCustomPrompt';
import { Dialog } from 'evergreen-ui';

const PromptPage = () => {
  const { CustomPrompt } = useCustomPrompt();
  const [showPrompt, setShowPrompt] = useState(true)
    const [userDialog, setUserDialog] = useState(false);
    const [message, setMessage] = useState(null);
    const [yesButton, setYesButton] = useState(null);
    const [noButton, setNoButton] = useState(null);
    const setRadios = ({message = null, yesButton = null, noButton = null, userDialog = null}) => {
      setMessage(message);
      setYesButton(yesButton);
      setNoButton(noButton);
      setUserDialog(userDialog);
    }
    const custom = {
      message: {message: 'Вы действительно хотите покинуть страницу'},
      buttons: {yesButton: 'Да', noButton: 'Нет'},
      dialog: {userDialog: true}
    }
    const onCheckBox = e => {
      setShowPrompt(!showPrompt)
    }
    const onRadio = e => {
      setRadios(custom[e.target.value])
    }
  
  return (
    <div>
      <h1>Click on Another Page link!</h1>
      <CustomPrompt 
        showPrompt={showPrompt}
        message={message}
        yesButton={yesButton}
        noButton={noButton}>
          {userDialog 
            ? ({onConfirm, onCancel, showPrompt}) => (
              <Dialog
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEscapePress={false}
                confirmLabel='Yes'
                cancelLabel='No'
                onConfirm={onConfirm} 
                onCancel={onCancel} 
                hasHeader={false}
                isShown={showPrompt}>
                Do you want to leave the page?
              </Dialog>)
            : null 
          }
      </CustomPrompt>
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