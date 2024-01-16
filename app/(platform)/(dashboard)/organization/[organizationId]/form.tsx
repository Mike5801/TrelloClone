"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";
import { FormInput } from "@/components/form/formInput";
import { FormSubmit } from "@/components/form/formSubmit";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    }
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  }


  return (
    <form action={onSubmit}>
        <FormInput
          label="Board Title"
          errors={fieldErrors}
          id="title"
        />
        <FormSubmit>
          Save
        </FormSubmit>
      </form>
  );
};