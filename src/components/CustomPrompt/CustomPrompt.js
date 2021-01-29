import { Prompt } from "react-router-dom";
import { useCustomPrompt } from './useCustomPrompt'
import PropTypes from 'prop-types';

/* 
  shouldPrompt - boolean || callback (default = false)
    Boolean:
      если true - при смене роута всплывет модальное (диалоговое окно),
      если false - произойдет переход на другую страницу
    Callback:
      функция будет запускаться при каждой попытке смены роута, 
      если вернет true - всплывет модальное (диалоговое окно),
      если вернет false -  произойдет переход на другую страницу.
      Желательно использовать если необходимо производить
      какие-либо вычисления и от их результата зависит нужно ли 
      отображать Prompt;

  children - React Component
    React Component:
      чтобы принять необходимы параметры и передать и в диалоговое окно,
      необходимо передать его как children render prop,
    Render Prop Params: 
      onCancel: callback
        предотвращает переход на другую страницу и запускает
        переданный в onBeforeCancel callback, закрывает модальное окно
      onConfirm: callback
        разрешает переход на другую страницу и запускает
        переданный в onBeforeConfirm callback, закрывает модальное окно
      showDialog: boolean
        переключает статус модального окна true - показывать, false - скрывать
*/

export const CustomPrompt = ({ shouldPrompt, children }) => {

  const { 
    onCancel, onConfirm, showDialog, isPromptActive, message 
  } = useCustomPrompt(shouldPrompt);

  return (
    <>
      {children({onCancel, onConfirm, showDialog})}
      <Prompt message={message} when={isPromptActive}/>
    </>
  )
}

CustomPrompt.propTypes = {
  shouldPrompt: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired, 
  children: PropTypes.elementType,
}