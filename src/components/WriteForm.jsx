import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { postExpense } from "../library/api/expense";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const WriteForm = ({ user, month }) => {
  // 여기서 하는지?
  // 여기에 저장하고 싶은 데이터도 있고
  // 여기에 클릭할때 실행시킬 버튼 위치가 있으니까요
  // 우선 내가 해야하는거 1번
  // 저장버튼에 onClick 붙이기
  const [newDate, setNewDate] = useState(
    `2024-${String(month).padStart(2, "0")}-01`
  );
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate(0);
    },
  });

  const handleAddExpense = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(newDate)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }

    const parsedAmount = parseInt(newAmount, 10);
    if (!newItem || parsedAmount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newExpense = {
      id: uuidv4(),
      month: parseInt(newDate.split("-")[1], 10),
      date: newDate,
      item: newItem,
      amount: parsedAmount,
      description: newDescription,
      createdBy: user.userId,
    };

    mutation.mutate(newExpense);

    setNewDate("");
    setNewItem("");
    setNewAmount("");
    setNewDescription("");
  }; // `2024-${String(month).padStart(2, "0")}-01`

  return (
    <Container>
      <Div>
        <Label htmlFor="date">날짜</Label>
        <Input
          type="text"
          id="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        ></Input>
      </Div>
      <Div>
        <Label htmlFor="item">항목</Label>
        <Input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="지출 항목"
        ></Input>
      </Div>
      <Div>
        <Label htmlFor="amount">금액</Label>
        <Input
          type="number"
          id="amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          placeholder="지출 금액"
        ></Input>
      </Div>
      <Div>
        <Label htmlFor="description">내용</Label>
        <Input
          type="text"
          id="description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="지출 내용"
        ></Input>
      </Div>
      <SaveBtn onClick={handleAddExpense}>저장</SaveBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;
const SaveBtn = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
export default WriteForm;
