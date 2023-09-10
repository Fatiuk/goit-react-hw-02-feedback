import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  text-transform: capitalize;
  font-weight: 600;
  color: #464748;
  background-color: #fcfcfc;
  border: 0.1px solid black;
  border-radius: 4px;
  transition: all 300ms;
  &:hover {
    color: #222222;
    background-color: #e7e7e7;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
