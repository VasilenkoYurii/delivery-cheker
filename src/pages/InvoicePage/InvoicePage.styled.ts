import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 738px;
    padding-left: 15px;
    padding-right: 15px;

    justify-content: space-between;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;

    flex-direction: row;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PageTitle = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  width: 300px;
  font-size: 20px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;

    text-align: inherit;
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 300px;
  display: flex;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    width: 581px;
  }
`;

export const Label = styled.label`
  width: 530px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;

  border: none;
  border-bottom: 1px solid #fa4a3b;
`;

export const SubmitButton = styled.button`
  background-color: white;
  color: #000;
  border-color: #fa4a3b;
`;

export const DescriptionContainer = styled.div`
  width: 300px;
  max-height: 400px;
  margin-bottom: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid #000;

  @media screen and (min-width: 768px) {
    width: 400px;
    max-height: 300px;

    margin-bottom: 0;
    padding-bottom: 0;

    border-bottom: none;
  }

  @media screen and (min-width: 1200px) {
    width: 990px;
    height: 110px;
  }
`;

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

export const SpanBold = styled.span`
  font-weight: 700;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
