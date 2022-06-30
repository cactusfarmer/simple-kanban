import React, { useState } from 'react';
import styled from 'styled-components';
// import { CardData } from '../../types/card_data';
import { CardEvents } from '../../types/kanban_events';
import { SidePanelData } from '../../types/side_panel_data';

const CardViewWrap = styled.div`
position: -webkit-sticky;
position: sticky;
z-index: 1500;
right: 0;
display: flex;
overflow-x: hidden;
overflow-y: auto;
flex-direction: column;
flex-shrink: 0;
width: 10vw;
border-left: 1px solid #999);
`;

const CardViewHead = styled.h2`
padding-left: 16px`;

type Props = {
  sidePanelData: SidePanelData
  events: CardEvents
};

function CardView({ sidePanelData, events: { editCard } }: Props) {
  console.log('initial data', sidePanelData?.cardData?.info);
  const [formState, setFormData] = useState(sidePanelData.cardData);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log('formState', formState);
    editCard({
      ...sidePanelData.cardData, info: formState?.info,
    });
  };

  const handleTextAreaChange = (e: any) => {
    console.log('changeState', e.target.value);
    setFormData(e.target.value);
  };

  return (
    <CardViewWrap>
      <CardViewHead>Edit card...</CardViewHead>
      <form action="" onSubmit={handleFormSubmit} key={sidePanelData.cardData?.info}>
        <input type="textarea" onChange={handleTextAreaChange} defaultValue={formState?.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </CardViewWrap>
  );
}

export default CardView;
