// import { useCallback, useState } from "react";
// import { format } from "date-fns";
// import useInput from "../hooks/useInput";
// import styled from "styled-components";

// type AddFormTypes = {
//   onInsert: (record: string) => void;
//   handleModal: () => void;
// };
// const AddForm = ({ onInsert, handleModal }: AddFormTypes) => {
//   const [date, dateBind] = useInput("");
//   const [distance, distanceBind] = useInput("0.00");
//   const [hour, hourBind] = useInput("0");
//   const [minute, minuteBind] = useInput("00");
//   const [second, secondBind] = useInput("00");
//   const [perMin, perMinBind] = useInput("0");
//   const [perSec, perSecBind] = useInput("00");

//   const formatTwoDigits = (value: string) => {
//     return value.length === 1 ? "0" + value : value;
//   };

//   const handleSumbit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();
//       const newRecord = {
//         id: Date.now(),
//         date,
//         distance,
//         time: `${hour}:${minute.length === 1 ? "0" + minute : minute}:${
//           second.length === 1 ? "0" + second : second
//         }`,
//         pace: `${perMin}:${perSec.length === 1 ? "0" + perSec : perSec}`,
//       };
//       onInsert(newRecord);
//       handleModal();
//     },
//     [onInsert, date, distance, hour, minute, second, perMin, perSec]
//   );

//   return (
//     <AddBackground>
//       <AddFormContainer onSubmit={handleSumbit}>
//         <FormWrapper>
//           <div className="item">
//             <span>날짜</span>
//             <span>
//               <input type="date" {...dateBind} required></input>
//             </span>
//           </div>
//           <div className="item">
//             <span>거리</span>
//             <span>
//               <input
//                 type="number"
//                 {...distanceBind}
//                 min={0}
//                 step="0.01"
//                 required
//               />
//             </span>
//           </div>
//           <div className="item">
//             <span>시간</span>
//             <span>
//               <input type="number" {...hourBind} min={0} />:
//               <input
//                 type="number"
//                 {...minuteBind}
//                 min={0}
//                 max={59}
//                 required
//               />{" "}
//               :
//               <input type="number" {...secondBind} min={0} max={59} required />
//             </span>
//           </div>
//           <div className="item">
//             <span>평균 페이스</span>
//             <span>
//               <input type="number" {...perMinBind} min={0} required /> :
//               <input type="number" {...perSecBind} min={0} max={59} required />
//             </span>
//           </div>
//         </FormWrapper>
//         <BtnZone>
//           <CloseBtn onClick={handleModal}>닫기</CloseBtn>
//           {/* <CloseBtn onClick={closeAddModalHanlder}>닫기</CloseBtn> */}
//           <SubmitBtn type="submit">제출하기</SubmitBtn>
//         </BtnZone>
//       </AddFormContainer>
//     </AddBackground>
//   );
// };
// export const AddBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: 5;
//   background-color: rgba(0, 0, 0, 0.548);
// `;
// export const AddFormContainer = styled.form`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   width: 300px;
//   border-radius: 1rem;
//   background-color: white;
//   justify-content: center;
//   /* align-items: center; */
//   flex-direction: column;
//   padding: 1rem;

//   > .item {
//     display: flex;
//     justify-content: space-between;
//     padding: 0.3rem 0;

//     > span {
//       margin-right: 0.5rem;
//     }
//     > input {
//     }
//     /* > input[type="number"] {
//       width: 3rem;
//     } */
//     /* > :first-child {

//     }
//     > :last-child {
//       width: 60%;
//     } */
//   }
// `;
// export const FormWrapper = styled.div`
//   padding: 0.5rem;
//   > .item {
//     display: flex;
//     justify-content: space-between;
//     margin: 0.5rem 0;
//     > span {
//       > input[type="number"] {
//         width: 3rem;
//         text-align: center;
//       }
//     }
//   }
// `;
// export const SubmitBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   margin-top: 0.5rem;
//   background-color: #375142; //#73a486;
//   padding: 0.5rem 1rem;
//   font-weight: 500;
//   text-align: center;
//   border-radius: 0.8rem;
//   width: 5rem;
//   border: none;
//   color: white;
// `;
// export const CloseBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   margin-top: 0.5rem;
//   background-color: #375142; //#73a486;
//   padding: 0.5rem 1rem;
//   font-weight: 500;
//   text-align: center;
//   border-radius: 0.8rem;
//   width: 5rem;
//   border: none;
//   color: white;
// `;

// export const BtnZone = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export default AddForm;
import React, { useState } from "react";
import styled from "styled-components";
import { Record } from "./Board";

type AddFormTypes = {
  onInsert: (record: Record) => void;
  handleModal: () => void;
  isOpen: boolean;
};

const AddForm: React.FC<AddFormTypes> = ({ onInsert, handleModal, isOpen }) => {
  const [formData, setFormData] = useState<Record>({
    date: "",
    distance: 0,
    hour: 0,
    minute: 0,
    second: 0,
    perMin: 0,
    perSec: 0,
    id: 0,
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onInsert(formData);
  //   handleModal();
  // };
  const generateUniqueId = () => {
    return Date.now();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord = {
      id: generateUniqueId(), // 고유한 ID 생성
      date: formData.date,
      distance: formData.distance,
      hour: formData.hour,
      minute: formData.minute,
      second: formData.second,
      perMin: formData.perMin,
      perSec: formData.perSec,
    };
    onInsert(newRecord);
    handleModal();
  };

  return (
    <ModalContainer isOpen={isOpen}>
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
            <button onClick={handleModal}>닫기</button>
            <button type="submit">제출하기</button>
          </BtnDiv>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.548);
  z-index: 1000;
  overflow: auto;
`;

const ModalContent = styled.div`
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  min-width: 300px;
`;
const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  > :first-child {
    width: 30%;
  }
  > :last-child {
    width: 70%;
    display: flex;
    justify-content: end;
  }
  input[type="number"] {
    width: 3.5rem;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  > button {
    background-color: #375142; //#73a486;
    color: white;
    padding: 0.5rem 1rem;
    font-weight: 500;
    text-align: center;
    border-radius: 0.8rem;
    width: fit-content;
    border: none;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    &:hover {
      background-color: lightgray;
      color: #375142;
    }
  }
`;
export default AddForm;
