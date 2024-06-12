import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("아직 구현 안함.", id, password);
  };

  return (
    <div>
      <Container>
        <InputGroup>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디"
            minLength={4}
            maxLength={10}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            minLength={4}
            maxLength={15}
          />
        </InputGroup>
        <Button onClick={handleSignIn}>로그인</Button>
        <ToggleButton
          onClick={(e) => {
            navigate("/SignUp");
          }}
        >
          회원가입
        </ToggleButton>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #a0a0a0;
  }
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SignIn;
