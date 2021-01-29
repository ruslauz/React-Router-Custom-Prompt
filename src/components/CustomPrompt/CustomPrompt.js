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

  onBeforeConfirm? - callback
    переданый в него callback будет вызываться при
    вызове функции onConfirm перед переходом на другую страницу.
    Желательно использовать если необходимо выполнить какие-либо
    действия перед сменой роута (очистка state от данных и тд.)
    (при необходимости async поведения можно внести дополнения в код)
  
  onBeforeCancel? - callback
    переданый в него callback будет вызываться при
    вызове функции onCancel перед закрытием модального (диалогового)
    окна.
    Желательно использовать если необходимо выполнить какие-либо
    дополнительные действия при нажатии на данную кнопку.
    (при необходимости async поведения можно внести дополнения в код)

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

export const CustomPrompt = ({ /* onBeforeConfirm, onBeforeCancel, */ shouldPrompt, children }) => {

  const { 
    onCancel, onConfirm, showDialog, isPromptActive, message 
  } = useCustomPrompt(/* onBeforeConfirm, onBeforeCancel, */ shouldPrompt);

  return (
    <>
      {children({onCancel, onConfirm, showDialog})}
      <Prompt message={message} when={isPromptActive}/>
    </>
  )
}

CustomPrompt.propTypes = {
  onBeforeConfirm: PropTypes.func, 
  onBeforeCancel: PropTypes.func, 
  shouldPrompt: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired, 
  children: PropTypes.elementType,
}