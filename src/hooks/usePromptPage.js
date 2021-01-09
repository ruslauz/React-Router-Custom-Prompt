import { useState } from "react";

const usePromptPage = () => {
  const [showPrompt, setShowPrompt] = useState(true)
  const [userDialog, setUserDialog] = useState(false);
  const [message, setMessage] = useState(null);
  const [yesButton, setYesButton] = useState(null);
  const [noButton, setNoButton] = useState(null);
  const custom = {
    message: {message: 'Вы действительно хотите покинуть страницу'},
    buttons: {yesButton: 'Да', noButton: 'Нет'},
    dialog: {userDialog: true}
  }
  
  const setRadios = ({message = null, yesButton = null, noButton = null, userDialog = null}) => {
    setMessage(message);
    setYesButton(yesButton);
    setNoButton(noButton);
    setUserDialog(userDialog);
  }
  const onCheckBox = e => {
    setShowPrompt(!showPrompt)
  }
  const onRadio = e => {
    setRadios(custom[e.target.value])
  }
  
  return {
    onCheckBox,
    onRadio,
    showPrompt,
    userDialog,
    message,
    yesButton,
    noButton,
  }
}

export default usePromptPage;