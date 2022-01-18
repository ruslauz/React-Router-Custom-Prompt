import { memo } from "react";
import useCustomPrompt from '../../hooks/useCustomPrompt';
import usePromptPage from '../../hooks/usePromptPage';
import { Dialog } from 'evergreen-ui';

const PromptPage = () => {
  const { CustomPrompt } = useCustomPrompt();
  // const { showPrompt } = usePromptPage();
  const { 
    onCheckBox, onRadio, showPrompt, userDialog, message, yesButton, noButton 
  } = usePromptPage();
  
  return (
    <div>
      <h1>Click on Another Page link!</h1>
      {/* <CustomPrompt showPrompt={showPrompt}/> */}
      <CustomPrompt 
        showPrompt={showPrompt}
        message={message}
        yesButton={yesButton}
        noButton={noButton}>

        {userDialog 
          ? ({onConfirm, onCancel, showDialog}) => (
            <Dialog
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEscapePress={false}
              confirmLabel='Yes'
              cancelLabel='No'
              onConfirm={onConfirm} 
              onCancel={onCancel} 
              hasHeader={false}
              isShown={showDialog}>
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