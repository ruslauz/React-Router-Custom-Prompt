import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Prompt, PromptProps, useHistory } from "react-router-dom";

interface CustomPromptProps {
  shouldPrompt: boolean;
  allowNextLocationPath?: (nextLocationPathName: string) => boolean;
  children: (props: {
    stayOnPage: () => void;
    leavePage: () => void;
    isDialogActive: boolean;
    nextLocation: string;
  }) => JSX.Element;
}

const CustomPrompt: FC<CustomPromptProps> = ({
  shouldPrompt,
  allowNextLocationPath,
  children,
}) => {
  const [isDialogActive, setDialogActive] = useState(false);
  const [nextLocation, setNextLocation] = useState("");
  const [isPromptActive, setPromptActive] = useState(shouldPrompt);
  const history = useHistory();
  const { current: startLocation } = useRef(history.location.pathname);

  const leavePage = useCallback(() => {
    setPromptActive(false);
  }, []);

  const stayOnPage = useCallback(() => {
    setDialogActive(false);
    setNextLocation("");
  }, []);

  const message: PromptProps["message"] = (location) => {
    const { pathname: nextLocationPathName } = location;

    if (
      (allowNextLocationPath && allowNextLocationPath(nextLocationPathName)) ||
      nextLocationPathName === startLocation
    ) {
      return true;
    }
    setNextLocation(nextLocationPathName);
    setDialogActive(true);
    return false;
  };

  useEffect(() => {
    setPromptActive(shouldPrompt);
  }, [shouldPrompt]);

  useEffect(() => {
    if (!isPromptActive && nextLocation) {
      history.push(nextLocation);
    }
  }, [isPromptActive, nextLocation, history]);

  return (
    <>
      {children({ leavePage, stayOnPage, isDialogActive, nextLocation })}
      <Prompt message={message} when={isPromptActive} />
    </>
  );
};

export default memo(CustomPrompt);
