"use client";

import { State, create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "./formInput";
import { FormButton } from "./formButton";

export const Form = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
        <FormInput errors={state?.errors}/>
        <FormButton />
      </form>
  );
};