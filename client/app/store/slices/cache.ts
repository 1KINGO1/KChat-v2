import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '@/shared/interfaces/User';
import Conversation from '@/shared/interfaces/Conversation';
import Message from '@/shared/interfaces/Message';

interface cacheState{
  selectedConversationId: null | string,
  conversations: Conversation[],
  messages: Message[]
}

const initialState: cacheState = {
  selectedConversationId: null,
  conversations: [],
  messages: []
}

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    fetchConversations(state, action: PayloadAction<Conversation[]>){
      state.conversations = action.payload;
    },
    fetchMessages(state, action: PayloadAction<Message[]>){
      state.messages = action.payload;
    },
    selectConversation(state, action: PayloadAction<string>){
      state.selectedConversationId = action.payload;
    },
    addMessage(state, action: PayloadAction<Message>){
      state.messages = [...state.messages, action.payload];
    }
  },
})

export const { fetchConversations, selectConversation, fetchMessages, addMessage } = cacheSlice.actions
export default cacheSlice.reducer