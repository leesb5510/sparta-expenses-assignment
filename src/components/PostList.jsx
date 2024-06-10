import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Section } from "./../pages/Home/Home";

const PostList = ({ expenses }) => {
  const navigate = useNavigate();

  return (
    <Section>
      <PostContainer>
        {expenses.map((expense) => {
          return (
            <Card
              key={expense.id}
              onClick={() => {
                navigate(`/detail/${expense.id}`);
              }}
            >
              <Div>
                <Span>{expense.date}</Span>
                <Span>{`${expense.item} - ${expense.description}`}</Span>
              </Div>
              <Span>{expense.amount.toLocaleString()} 원</Span>
            </Card>
          );
        })}
      </PostContainer>
    </Section>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Span = styled.span`
  font-size: 16px;

  &:first-child {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }

  &:last-child {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

PostList.propsTypes = {
  expenses: PropTypes.node.isRequired,
};

export default PostList;
