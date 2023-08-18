import styled from "@emotion/styled";

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
