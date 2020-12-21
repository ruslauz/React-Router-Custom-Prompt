// import { useEffect, useState } from "react";
// import { Dialog } from 'evergreen-ui';

// const usePromptPage = () => {
//   const [showPrompt, setShowPrompt] = useState(true)
//   const [userDialog, setUserDialog] = useState(null);
//   const [dialogProps, setDialogProps] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [yesButton, setYesButton] = useState(null);
//   const [noButton, setNoButton] = useState(null);
//   const setRadios = ({message = null, yesButton = null, noButton = null, userDialog = null, dialogProps = null}) => {
//     setMessage(message);
//     setYesButton(yesButton);
//     setNoButton(noButton);
//     setUserDialog(userDialog);
//     setDialogProps(dialogProps);
//   }
//   const custom = {
//     message: {message: 'Вы действительно хотите покинуть страницу'},
//     buttons: {yesButton: 'Да', noButton: 'Нет'},
//     dialog: {
//       userDialog: Dialog, 
//       dialogProps: {
//         hasHeader: false,
//         isShown: modalIsActive,
//         onConfirm,
//         onCancel,
//         children: 'Do you want to leave the page?',
//       }
//     }
//   }
//   const onCheckBox = e => {
//     setShowPrompt(!showPrompt)
//   }
//   const onRadio = e => {
//     setRadios(custom[e.target.value])
//   }
//   useEffect(() => {
//     setDialogProps(state => state && {...state, isShown: modalIsActive})
//   }, [modalIsActive])
//   return {
//     onCheckBox,
//     onRadio,
//     showPrompt,
//     userDialog,
//     dialogProps,
//     message,
//     yesButton,
//     noButton,
//   }
// }

// export default usePromptPage;