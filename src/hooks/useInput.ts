import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { TextChange } from "typescript";
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };
  return [value, bind];
};

export default useInput;
