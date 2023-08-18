import { InvoiseInfoProps } from "../../interfaces/interfaces";
import { Loader } from "../Loader/Loader";
import { InfoBox, DescriptionContainer, SpanBold } from "./InvoiceInfo.styled";

export const InvoiceInfo = ({ isLoading, invoiseData }: InvoiseInfoProps) => {
  return (
    <InfoBox>
      <DescriptionContainer>
        {isLoading ? (
          <Loader />
        ) : invoiseData.status === "" ? (
          <h3>
            Інформація стосовно вашої посилки з'явиться після введення номера
            ТТН
          </h3>
        ) : (
          <ul>
            <li>
              <SpanBold>Статус доставки:</SpanBold> {invoiseData.status}
            </li>
            <li>
              <SpanBold>Відправлено:</SpanBold> {invoiseData.sending}
            </li>
            <li>
              <SpanBold>Отримано:</SpanBold> {invoiseData.receiving}
            </li>
          </ul>
        )}
      </DescriptionContainer>
    </InfoBox>
  );
};
