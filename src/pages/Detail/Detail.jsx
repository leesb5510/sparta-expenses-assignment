import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getExpenses,
  putExpense,
  deleteExpense,
} from "../../library/api/expense";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: selectedExpenses,
    isLoading,
    error,
  } = useQuery({ queryKey: ["expense", id], queryFn: getExpenses });

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedExpenses) {
      setDate(selectedExpenses.date);
      setItem(selectedExpenses.item);
      setAmount(selectedExpenses.amount);
      setDescription(selectedExpenses.description);
    }
  }, [selectedExpenses]);

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate("/");
      QueryClient.invalidateQueries(["expenses"]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
      QueryClient.invalidateQueries(["expenses"]);
    },
  });

  const handleEdit = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || amount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newExpenses = {
      id: id,
      date: date,
      item: item,
      amount: parseInt(amount, 10),
      description: description,
    };
    mutationEdit.mutate(newExpenses);
    navigate("/");
  };

  const handleDelete = () => {
    mutationDelete.mutate(id);
  };

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
          <Button2 onClick={handleDelete}>삭제</Button2>
          <Button3 onClick={() => navigate(-1)}>뒤로가기</Button3>
        </BtnHolder>
      </InputHolder>
    </Root>
  );
};

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

export default Detail;
