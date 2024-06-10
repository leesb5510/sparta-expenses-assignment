import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      month: 1,
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: uuidv4(),
      month: 2,
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "아이스크림",
    },
    {
      id: uuidv4(),
      month: 3,
      date: "2024-03-05",
      item: "여행",
      amount: 1055000,
      description: "일본여행",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail expenses={expenses} setExpenses={setExpenses} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
