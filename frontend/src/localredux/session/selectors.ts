import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card, Session } from 'models/session_type';

export const SelectSessionData = (state: RootState) => state.session.session;

export const SelectTransformedSessionData = createSelector(SelectSessionData, (data) => {
    const cards: Card[] | undefined = data?.cards?.map((value) => {
        const card: Card = {
            id: value.session_id,
            title: value.title,
            body: value.text,
            bullet: ["Hello" , "Another Hello"],
            cardType: value.card_type,
            audio_url: value.audio_file,
            inputs: value.inputs,
            inputType: value.inputType
        }
        return card
    })
    const session: Session = {
        id: data?.id || 0,
        title: data?.title || "",
        numberOfCards: data?.cards?.length || 0,
        cards: cards
    }
    return session;
  })