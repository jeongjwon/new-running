import React from "react";

import styled from "styled-components";
import { Record } from "./Board";
import Item from "./Item";

type ListProps = {
  records: Record[];
  onRemove: (id: number) => void;
  onEdit: (record: Record) => void;
};

const List: React.FC<ListProps> = ({ records, onRemove, onEdit }) => {
  return (
    <ListContainer>
      {records
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((record, index) => (
          <Item
            key={index}
            record={record}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 0;
`;

export default List;
