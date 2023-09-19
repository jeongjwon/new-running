import { useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";

type Record = {
  date: string;
  distance: number;
  hour: number;
  minute: number;
  second: number;
  perMin: number;
  perSec: number;
};
type BoardTypes = {
  //   records: string;
  //   setRecords: () => void;
  records: Record[]; // Change this to the appropriate type for your records
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
};

const Board = ({ records, setRecords }: BoardTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>("");

  // 모달 열기 핸들러
  const handleOpen = () => {
    setIsOpen(true);
  };

  // 모달 닫기 핸들러
  const handleClose = () => {
    setIsOpen(false);
  };
  const onInsert = (record: Record) => {
    setRecords((prevState) => [...prevState, record]);
  };
  //   const handleModal = () => {
  //     setIsOpen(!isOpen);
  //   };
  //   const onRemove = (id) => {
  //     setRecords((records) => records.filter((e) => e.id !== id));
  //   };

  //   const onUpdate = (record) => {
  //     setIsEditing(!isEditing);
  //     setRecords((prevState) =>
  //       prevState.map((e) => (e.id === record.id ? { ...e, ...record } : e))
  //     );
  //   };

  //   const onEdit = (record) => {
  //     setIsEditing(!isEditing);
  //     setEditedTask(record);
  //   };

  return (
    <BoardContainer>
      <AddBtn onClick={handleOpen}>추가하기</AddBtn>

      {/* <RunningList records={records} onRemove={onRemove} onEdit={onEdit} /> */}
      {isOpen && (
        <AddForm
          onInsert={onInsert}
          handleModal={handleClose}
          isOpen={isOpen} // 모달 열림/닫힘 상태를 전달합니다.
        />
      )}

      {/* {isEditing && <EditForm editedTask={editedTask} onUpdate={onUpdate} />} */}
      {/* {stateEdit.isEditOn && (
        <EditForm editedTask={stateEdit.record} onUpdate={onUpdate} />
      )} */}
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
