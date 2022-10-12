import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;

  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  border: none;
  background: ${({ theme }) => theme["green-500"]};

  height: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  padding: 0 1.25rem;

  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-300"]};
  }

  transition: background 0.1s ease-in-out;
`;
