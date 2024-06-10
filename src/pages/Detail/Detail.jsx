import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();
  const params = useParams();
  const expense = expenses.find((expense) => expense.id === params.id) || {};
  const [date, setDate] = useState(expense.date);
  const [item, setItem] = useState(expense.item);
  const [amount, setAmount] = useState(expense.amount);
  const [description, setDescription] = useState(expense.description);

  const handleEdit = () => {
    setExpenses(
      expenses.map((data) => {
        return data.id === expense.id
          ? { ...data, date, item, amount, description }
          : data;
      })
    );
  };

  const handleDelete = (expenseId) => {
    navigate(-1);
    setExpenses(
      expenses.filter((data) => {
        return data.id !== expenseId;
      })
    );
  };

  console.log(expense);

  return (
    <Root>
      <InputHolder>
        <InputCard>
          <Label htmlFor="date">날짜</Label>
          <Input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="YYYY-MM-DD"
          ></Input>
        </InputCard>
        <InputCard>
          <Label htmlFor="item">항목</Label>
          <Input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="지출 항목"
          ></Input>
        </InputCard>
        <InputCard>
          <Label htmlFor="amount">금액</Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="지출 금액"
          ></Input>
        </InputCard>
        <InputCard>
          <Label htmlFor="description">내용</Label>
          <Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="지출 내용"
          ></Input>
        </InputCard>
        <BtnHolder>
          <Button1 onClick={handleEdit}>수정</Button1>
          <Button2 onClick={() => handleDelete(expense.id)}>삭제</Button2>
          <Button3 onClick={() => navigate(-1)}>뒤로가기</Button3>
        </BtnHolder>
      </InputHolder>
    </Root>
  );
};

export default Detail;

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const InputHolder = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;

const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const BtnHolder = styled.div`
  display: flex;
  gap: 10px;
`;

const Button1 = styled.button`
  padding: 10px 20px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const Button2 = styled.button`
  padding: 10px 20px;
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const Button3 = styled.button`
  padding: 10px 20px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
