import React from "react";
import { IMaskInput } from "react-imask";

interface CustomMaskInputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  [key: string]: unknown;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomMaskInputProps>(
  function TextMaskCustom(props) {
    const { inputRef, onChange, name, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        definitions={{ "0": /[0-9]/ }}
        inputRef={inputRef as React.Ref<HTMLInputElement>}
        onAccept={(value: string) => {
          (onChange as (event: { target: { name: string; value: string } }) => void)({ 
            target: { 
              name: name as string, 
              value 
            } 
          });
        }}
        overwrite
        lazy={false}
        placeholderChar="_"
      />
    );
  },
);

export default TextMaskCustom;