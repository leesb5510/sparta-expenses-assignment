import styled from "styled-components";
import { Section } from "./../pages/Home/Home";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthFilterForm = ({ month, setMonth }) => {
  return (
    <Section>
      <Wrapper>
        {MONTHS.map((element) => {
          return (
            <Button
              key={element}
              selected={element === month}
              onClick={() => {
                setMonth(element);
              }}
            >{`${element}월`}</Button>
          );
        })}
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--black-alpha-100, #000);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? "var(--white-alpha-100, #fff)"
      : "var(--black-alpha-100, #000)"};
  background: ${(props) =>
    !props.selected
      ? "var(--black-alpha-100, #F6F7FA)"
      : "var(--bg-form, #2EC486)"};
  &:hover {
    background: #2ec4b6;
    color: #fff;
  }
`;

export default MonthFilterForm;
