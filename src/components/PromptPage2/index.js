import { useState } from "react";
import { Dialog } from 'evergreen-ui';
import { CustomPrompt } from '../CustomPrompt/CustomPrompt';


export const PromptPage2 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1>Click on Another Page link!</h1>
      <p>Is Prompt Active - {`${isActive}`}</p>
      <button onClick={() => setIsActive(prev => !prev)}>Toggle Custom Prompt</button>
      <CustomPrompt shouldPrompt={isActive}>
        {
          ({ onCancel, onConfirm, showDialog }) => (
            <Dialog
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEscapePress={false}
              confirmLabel='Yes'
              cancelLabel='No'
              onConfirm={() => onConfirm()}
              onCancel={() => onCancel()}
              hasHeader={false}
              isShown={showDialog}>
                Do you want to leave the page?
            </Dialog>
          )
        }
      </CustomPrompt>
    </>
  )
}

