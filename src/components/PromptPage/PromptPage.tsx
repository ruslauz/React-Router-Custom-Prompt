import { useState } from "react";
import { CustomPrompt } from "../CustomPrompt/";
import { Modal } from "antd";

export const PromptPage = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <h1>Click on Navigation links!</h1>
      <p>
        The{" "}
        <b>
          <i>"Not Allowed Page"</i>
        </b>{" "}
        should activate the Prompt, while{" "}
        <b>
          <i>"Allowed Page"</i>
        </b>{" "}
        should let you leave
      </p>
      <label>
        <input
          checked={isActive}
          type="checkbox"
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <span>Toggle Custom Prompt</span>
      </label>
      <hr />
      <p>Is Prompt Active - {`${isActive}`}</p>
      <CustomPrompt
        shouldPrompt={isActive}
        allowNextLocationPath={(nextLocation) =>
          nextLocation === "/allowed-page"
        }
      >
        {({ leavePage, stayOnPage, isDialogActive, nextLocation }) => (
          <Modal
            title="Do you want to leave the page?"
            visible={isDialogActive}
            onOk={leavePage}
            onCancel={stayOnPage}
          >
            <p>
              Next location is <b>{nextLocation}</b>
            </p>
          </Modal>
        )}
      </CustomPrompt>
    </>
  );
};
