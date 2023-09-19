import React, { useState } from "react";
import useInput from "../hooks/useInput";
import { Record } from "./Board";
import { ModalContainer, ModalContent, ItemDiv, BtnDiv } from "./AddForm";

interface EditFormProps {
  editedTask: Record | undefined;
  onUpdate: (record: Record) => void;
  handleEditClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({
  editedTask,
  onUpdate,
  handleEditClose,
}) => {
  const { id, date, distance, hour, minute, second, perMin, perSec } =
    editedTask || {
      id: 0,
      date: "",
      distance: 0,
      hour: 0,
      minute: 0,
      second: 0,
      perMin: 0,
      perSec: 0,
    };

  const [formData, setFormData] = useState<Record>({
    id,
    date,
    distance,
    hour,
    minute,
    second,
    perMin,
    perSec,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldName === "date" ? value : parseFloat(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord = {
      id, // 고유한 ID 생성
      date: formData.date,
      distance: formData.distance,
      hour: formData.hour,
      minute: formData.minute,
      second: formData.second,
      perMin: formData.perMin,
      perSec: formData.perSec,
    };
    onUpdate(newRecord);
    handleEditClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ItemDiv>
            <label>날짜</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange(e, "date")}
              required
            />
          </ItemDiv>
          <ItemDiv>
            <label>거리 (km)</label>
            <input
              type="number"
              value={formData.distance}
              onChange={(e) => handleInputChange(e, "distance")}
              min={0}
              step={0.01}
              required
            />
          </ItemDiv>
          <ItemDiv>
            <label>평균 페이스</label>
            <div>
              <input
                type="number"
                value={formData.perMin}
                onChange={(e) => handleInputChange(e, "perMin")}
                min={0}
                required
              />
              :
              <input
                type="number"
                value={formData.perSec}
                onChange={(e) => handleInputChange(e, "perSec")}
                min={0}
                max={59}
                required
              />
            </div>
          </ItemDiv>
          <ItemDiv>
            <label>시간</label>
            <div>
              <input
                type="number"
                value={formData.hour}
                onChange={(e) => handleInputChange(e, "hour")}
                min={0}
                required
              />
              :
              <input
                type="number"
                value={formData.minute}
                onChange={(e) => handleInputChange(e, "minute")}
                min={0}
                max={59}
                required
              />
              :
              <input
                type="number"
                value={formData.second}
                onChange={(e) => handleInputChange(e, "second")}
                min={0}
                max={59}
                required
              />
            </div>
          </ItemDiv>

          <BtnDiv>
            <button onClick={handleEditClose}>닫기</button>
            <button type="submit">제출하기</button>
          </BtnDiv>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditForm;
