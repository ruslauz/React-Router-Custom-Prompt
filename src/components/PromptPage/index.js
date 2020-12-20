import { memo } from "react";
import useCustomPrompt from '../../hooks/useCustomPrompt';

const PromptPage = () => {
  const {CustomPrompt} = useCustomPrompt();

  return (
    <div>
      <h1>The Page with Prompt. Try to leave it!</h1>
      <CustomPrompt 
        message={'Вы действительно хотите покинуть страницу'}
        yesButton={'Да'}
        noButton={'Нет'}/>
    </div>
  )
}

export default memo(PromptPage);