import styled from "@emotion/styled";

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const SpanBold = styled.span`
  font-weight: 700;
`;
