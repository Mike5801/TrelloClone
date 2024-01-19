"use client"

import { ListWithCards } from "@/types";
import { ListForm } from "./ListForm";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
};

export const ListContainer = ({
  boardId,
  data
} : ListContainerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1"/>
    </ol>
  )
}