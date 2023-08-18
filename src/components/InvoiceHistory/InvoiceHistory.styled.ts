import styled from "@emotion/styled";

export const InvoiceHistoryContainer = styled.div`
  width: 300px;
  max-height: 300px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 200px;
    max-height: 400px;
  }
`;

export const InvoiceButton = styled.button`
  width: 280px;
  height: 20px;
  cursor: pointer;
  background-color: white;
  color: #000;
  border: 1px solid #000;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
`;
