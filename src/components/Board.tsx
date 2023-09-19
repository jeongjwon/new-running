import { useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import List from "./List";
import EditForm from "./EditForm";

export type Record = {
  date: string;
  distance: number;
  hour: number;
  minute: number;
  second: number;
  perMin: number;
  perSec: number;
  id: number;
};
type BoardTypes = {
  records: Record[];
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
};

const Board = ({ records, setRecords }: BoardTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<Record | undefined>(undefined);

  const handleAddOpen = () => {
    setIsOpen(true);
  };

  const handleAddClose = () => {
    setIsOpen(false);
  };

  const handleEditOpen = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };
  const onInsert = (record: Record) => {
    setRecords((prevState) => [...prevState, record]);
  };

  const onRemove = (id: number) => {
    setRecords((records) => records.filter((e) => e.id !== id));
  };

  const onUpdate = (record: Record) => {
    setIsEditing(!isEditing);
    setRecords((prevState) =>
      prevState.map((e) => (e.id === record.id ? { ...e, ...record } : e))
    );
  };

  const onEdit = (record: Record) => {
    // setIsEditing(!isEditing);
    handleEditOpen();
    setEditedTask(record);
  };

  return (
    <BoardContainer>
      <AddBtn onClick={handleAddOpen}>추가하기</AddBtn>

      <List records={records} onRemove={onRemove} onEdit={onEdit} />
      {isOpen && (
        <AddForm
          onInsert={onInsert}
          handleModal={handleAddClose}
          isOpen={isOpen} // 모달 열림/닫힘 상태를 전달합니다.
        />
      )}

      {isEditing && (
        <EditForm
          editedTask={editedTask}
          onUpdate={onUpdate}
          handleEditClose={handleEditClose}
        />
      )}
    </BoardContainer>
  );
};
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddBtn = styled.button`
  background-color: #375142; //#73a486;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: fit-content;
  border: none;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
`;
export default Board;
