import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useCustomPrompt = (/* onBeforeConfirm, onBeforeCancel, */ shouldPrompt = false) => {
  const [isPromptActive, setIsPromptActive] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [nextLocation, setNextLocation] = useState('')
  const history = useHistory();
  const currentLocation = useLocation().pathname;

  const onConfirm = useCallback(() => {
    /* typeof onBeforeConfirm === "function" && onBeforeConfirm(); */
    setIsPromptActive(false)
  }, []);

  const onCancel = useCallback(() => {
    /* typeof onBeforeCancel === "function" && onBeforeCancel(); */
    setShowDialog(false);
    setNextLocation(currentLocation);
  }, [currentLocation])

  const message = ({ pathname }) => {
    if (pathname === currentLocation) return;
    if (typeof shouldPrompt === "function" && !shouldPrompt()) {
      return true
    }
    setShowDialog(true);
    setNextLocation(pathname);
    return false
  }

  useEffect(() => {
    typeof shouldPrompt === "boolean"
      ? setIsPromptActive(shouldPrompt) 
      : setIsPromptActive(shouldPrompt())
  }, [shouldPrompt])

  useEffect(() => {
    if (!isPromptActive & currentLocation !== nextLocation) {
      history.push(nextLocation);
    }
  }, [isPromptActive, nextLocation, history, currentLocation])

  return {
    onCancel, onConfirm, showDialog, isPromptActive, message
  }
}
