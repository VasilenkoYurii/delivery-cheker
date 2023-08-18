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
