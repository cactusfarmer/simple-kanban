import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { CardActions } from '../../types/kanban_actions';
import { CardData } from '../../types/card_data';
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
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log('re render: ', sidePanelData.cardData);
    function handleFormSubmit(e: any) {
      e.preventDefault();
      if (textAreaRef.current !== null) {
        editCard({
          ...sidePanelData.cardData, info: textAreaRef.current.value,
        } as CardData);
      }
    }

    function handleTextAreaChange() {
      if (textAreaRef.current !== null) {
        console.log(textAreaRef.current.value);
      }
    }

    textAreaRef.current?.addEventListener('change', handleTextAreaChange);
    formRef.current?.addEventListener('submit', handleFormSubmit);

    return () => {
      textAreaRef.current?.removeEventListener('change', handleTextAreaChange);
      formRef.current?.removeEventListener('submit', handleFormSubmit);
    };
  }, [sidePanelData]);

  return (
    <CardEditWrap>
      <CardEditHead>Edit card...</CardEditHead>
      <form action="" ref={formRef} onChange={() => { }}>
        <textarea ref={textAreaRef} value={sidePanelData.cardData?.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </CardEditWrap>
  );
}

export default CardEdit;
