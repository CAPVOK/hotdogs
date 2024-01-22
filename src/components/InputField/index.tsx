import "./InputField.css";
import { FC } from "react";
import { Button } from "react-bootstrap";

interface Props {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
  loading?: boolean;
  placeholder?: string;
  buttonTitle?: string;
}

export const InputField: FC<Props> = ({
  value,
  setValue,
  onSubmit,
  loading,
  placeholder,
  buttonTitle = "Искать",
}) => {
  return (
    <div className="inputField">
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button disabled={loading} onClick={onSubmit}>
        {buttonTitle}
      </Button>
    </div>
  );
};
