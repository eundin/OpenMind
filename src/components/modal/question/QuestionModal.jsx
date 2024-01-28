import { questionUrl } from "api/questionApi";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "components/button/Button";
import Modal from "components/modal/Modal";
import styled from "styled-components";

function QuestionModal({ open, onClose, userInfo }) {
  const { subjectId } = useParams("subjectId");
  const textAreaRef = useRef();

  const handleSubmit = async () => {
    try {
      await axios.post(questionUrl(subjectId), {
        content: textAreaRef.current.value,
      });
      onClose();
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>질문을 작성하세요</Modal.Header>
      <Modal.Body>
        <UserInfo>
          To.
          <ProfileImg src={userInfo?.imageSource} />
          {userInfo?.name}
        </UserInfo>
        <Form onSubmit={(e) => e.preventDefault()}>
          <TextArea placeholder="질문을 입력해주세요" ref={textAreaRef} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <SubmitButton type="button" onClick={handleSubmit}>
          질문 보내기
        </SubmitButton>
      </Modal.Footer>
    </Modal>
  );
}

export default QuestionModal;

const UserInfo = styled.div`
  margin-top: 40px;
  margin-bottom: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  line-height: 22px;
  font-size: 18px;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  overflow: hidden;
`;

const Form = styled.form`
  width: 100%;
  height: 358px;

  @media (min-width: 768px) {
    width: 532px;
    height: 180px;
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  resize: none;
  width: 100%;
  height: 100%;
  border-style: none;
  border-radius: 8px;
  padding: 16px;
  background: var(--Grayscale-20, #f9f9f9);
  font-size: 16px;

  &:focus {
    outline: 2px solid var(--Brown-40);
  }

  @media (min-width: 768px) {
    width: 532px;
  }
`;

const SubmitButton = styled(Button)`
  box-sizing: border-box;
  margin-top: 8px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;
