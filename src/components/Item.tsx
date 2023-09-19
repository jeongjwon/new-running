import React from "react";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import styled from "styled-components";
import { Record } from "./Board";

type ItemProps = {
  record: Record; // Record 타입을 적절히 정의해야 합니다.
  onRemove: (id: number) => void;
  onEdit: (record: Record) => void;
};

const Item: React.FC<ItemProps> = ({ record, onRemove, onEdit }) => {
  //   const { date, distance, time, pace, id } = record;
  const { date, distance, hour, minute, perMin, perSec, second } = record;
  console.log(record);
  return (
    <ItemContainer>
      <ItemWrapper>
        <div className="title_date">{date}</div>
        {/* <div className="btn_zone">
          <BtnZone className="edit" onClick={onEdit}>
            <HiOutlinePencilAlt size={20} />
          </BtnZone>
          <BtnZone className="remove" onClick={() => onRemove(id)}>
            <HiOutlineTrash size={20} />
          </BtnZone>
        </div> */}
      </ItemWrapper>
      <ItemWrapper>
        <div className="memo">
          <div>{distance}</div>
          <div>Km</div>
        </div>
        <div className="memo">
          <div>{`${perMin}'${perSec}"`}</div>
          <div>평균 페이스</div>
        </div>
        <div className="memo">
          <div>
            {hour > 0 ? `${hour}:${minute}:${second}` : `${minute}:${second}`}
          </div>
          <div>총 시간</div>
        </div>
      </ItemWrapper>
    </ItemContainer>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  :first-child {
    margin-bottom: 0.3rem;
  }

  > .memo {
    display: flex;
    flex-direction: column;

    font-weight: 600;
    > :nth-child(2) {
      font-size: 0.8rem;
      font-weight: 400;
      color: darkgray;
    }
  }
`;

const ItemContainer = styled.li`
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  border-radius: 1rem;
  background-color: white;
  padding: 1rem 0.8rem;
  margin: 1rem 0;
`;

const BtnZone = styled.button`
  border: none;
  background: transparent;
  margin-left: 0.5rem;

  > svg:hover {
    color: red;
    transform: scale(1.3);
    transition: transform 0.5s;
  }
`;

export default Item;
