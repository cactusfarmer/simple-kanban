import React from 'react';
import styled from 'styled-components';
import { CardData } from '../../types/card_data';
import { CardActions } from '../../types/kanban_actions';
import { SidePanelData } from '../../types/side_panel_data';

const CardEditWrap = styled.div`
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

const CardEditHead = styled.h2`
padding-left: 16px`;

type Props = {
  sidePanelData: SidePanelData
  actions: CardActions
};

function CardEdit({ sidePanelData, actions: { editCard } }: Props) {
  let info = '';

  function handleFormSubmit(e: any) {
    e.preventDefault();
    editCard({
      ...sidePanelData.cardData, info,
    } as CardData);
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    info = e.target.value;
    console.log('state:', info);
  }

  return (
    <CardEditWrap>
      <CardEditHead>Edit card...</CardEditHead>
      <form action="" onSubmit={handleFormSubmit}>
        <textarea onChange={handleTextAreaChange} defaultValue={sidePanelData.cardData?.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </CardEditWrap>
  );
}

export default CardEdit;
