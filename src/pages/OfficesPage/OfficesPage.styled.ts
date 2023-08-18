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

export const OfficeList = styled.ul`
  width: 100%;

  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid;
  width: 100%;
`;
