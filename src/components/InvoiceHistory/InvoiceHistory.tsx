import { InvoiceHistoryProps } from "../../interfaces/interfaces";
import {
  InvoiceButton,
  InvoiceHistoryContainer,
} from "./InvoiceHistory.styled";

export const InvoiceHistory = ({
  hendleClearDataInvoices,
  userDataInvoisec,
  hendleClick,
}: InvoiceHistoryProps) => {
  return (
    <InvoiceHistoryContainer>
      <h3>Історія переглядів</h3>
      <InvoiceButton onClick={() => hendleClearDataInvoices()}>
        Видалити историю
      </InvoiceButton>
      {userDataInvoisec.length !== 0 && (
        <ul>
          {userDataInvoisec.map((number, index) => {
            return (
              <li key={index}>
                <InvoiceButton onClick={() => hendleClick(number)}>
                  {number}
                </InvoiceButton>
              </li>
            );
          })}
        </ul>
      )}
    </InvoiceHistoryContainer>
  );
};
