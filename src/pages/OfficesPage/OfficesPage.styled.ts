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
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const PageTitle = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  width: 300px;
  font-size: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
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
  border-color: #fa4a3b;
`;

export const OfficeList = styled.ul`
  width: 100%;

  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
