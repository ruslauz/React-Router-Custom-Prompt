import { memo } from "react";
import useCustomPrompt from '../../hooks/useCustomPrompt';
import {Dialog} from 'evergreen-ui';

const PromptPage = () => {
  const {CustomPrompt, modalIsActive, onConfirm, onCancel} = useCustomPrompt();

  return (
    <div>
      <h1>The Page with Prompt. Try to leave it!</h1>
      <CustomPrompt 
        modal={Dialog}
        modalProps={{
          hasHeader: false,
          isShown: modalIsActive,
          onConfirm,
          onCancel,
          children: 'Do you want to leave the page?',
        }}
        message={'Вы действительно хотите покинуть страницу'}
        yesButton={'Да'}
        noButton={'Нет'}/>
    </div>
  )
}

export default memo(PromptPage);