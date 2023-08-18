import { GetDataProps } from "../../interfaces/interfaces";
import {
  PageTitle,
  Form,
  Label,
  Input,
  SubmitButton,
} from "./GetDataForm.styled";

export const GetDataForm = ({
  hendleSubmit,
  setState,
  value,
  title,
  buttonContent,
  placeholder,
  pattern,
}: GetDataProps) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Form onSubmit={(e) => hendleSubmit(e)}>
        <Label>
          <Input
            type="text"
            pattern={pattern}
            placeholder={placeholder}
            maxLength={14}
            required
            value={value}
            onChange={(e) => setState(e.target.value)}
          />
        </Label>
        <SubmitButton type="submit">{buttonContent}</SubmitButton>
      </Form>
    </>
  );
};
