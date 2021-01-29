import { useState } from "react";
import { Dialog } from 'evergreen-ui';
import { CustomPrompt } from '../CustomPrompt/CustomPrompt';


export const PromptPage2 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsActive(prev => !prev)}>ToggleConfirm</button>
      <h1>PromptPage2</h1>
      <p>Is Prompt Active - {`${isActive}`}</p>
      <CustomPrompt shouldPrompt={() => true}>
        {
          ({ onCancel, onConfirm, showDialog }) => (
            <Dialog
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEscapePress={false}
              confirmLabel='Нет'
              cancelLabel='Сохранить'
              onConfirm={() => onConfirm()} // onCancel
              onCancel={() => onCancel()} //onConfirm
              hasHeader={false}
              isShown={showDialog}>
                Сохранить изменения?
            </Dialog>)
        }
      </CustomPrompt>
    </>
  )
}

