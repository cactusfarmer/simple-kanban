import React from 'react';
import styled from 'styled-components';
import { CardData } from '../../types/card_data';
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
  let info = sidePanelData.cardData?.info;

  function handleFormSubmit(e: any) {
    e.preventDefault();
    editCard({
      ...sidePanelData.cardData, info,
    } as CardData);
  }

  function handleTextAreaChange(e: any) {
    console.log(e.target.value);
    info = e.target.value;
    console.log('state:', info);
  }

  return (
    <CardViewWrap>
      <CardViewHead>Edit card...</CardViewHead>
      <form action="" onSubmit={handleFormSubmit}>
        <textarea onChange={handleTextAreaChange} value={sidePanelData.cardData?.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </CardViewWrap>
  );
}

export default CardView;
