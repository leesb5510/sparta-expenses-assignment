import { useState } from "react";
import styled from "styled-components";
import MonthFilterForm from "../../components/MonthFilterForm";
import PostList from "../../components/PostList";
import WriteForm from "../../components/WriteForm";

const Home = ({ user }) => {
  const [month, setMonth] = useState(0);

  console.log(month);

  return (
    <Main>
      <Section>
        <WriteForm user={user} month={month} />
      </Section>
      <Section>
        <MonthFilterForm month={month} setMonth={setMonth} />
      </Section>
      <Section>
        <PostList month={month} />
      </Section>
    </Main>
  );
};

const Main = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default Home;
