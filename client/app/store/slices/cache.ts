import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Conversation from '@/shared/interfaces/Conversation';
import Message from '@/shared/interfaces/Message';

interface cacheState{
  selectedConversationId: null | string,
  conversations: Conversation[],
  onlineUsers: string[]
}

const initialState: cacheState = {
  selectedConversationId: null,
  conversations: [],
  onlineUsers: []
}

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    fetchConversations(state, action: PayloadAction<Conversation[]>){
      state.conversations = action.payload;
    },
    selectConversation(state, action: PayloadAction<string>){
      state.selectedConversationId = action.payload;
    },
    addMessage(state, action: PayloadAction<{conversationId: string, message: Message}>){
      let conversations = [];

      for (let conversation of state.conversations){
        if (conversation._id === action.payload.conversationId){
          conversations.push({...conversation, messages: [...conversation.messages, action.payload.message]});
        }
        else{
          conversations.push(conversation);
        }
      }

      state.conversations = conversations;
    },
    fetchOnlineUsers(state, action: PayloadAction<string[]>){
      state.onlineUsers = action.payload;
    },
    addOnlineUser(state, action: PayloadAction<string>){
      state.onlineUsers = [...state.onlineUsers, action.payload]
    },
    removeOnlineUser(state, action: PayloadAction<string>){
      state.onlineUsers = state.onlineUsers.filter(id => id !== action.payload)
    }
  },
})

export const {
  fetchConversations,
  selectConversation,
  addMessage,
  fetchOnlineUsers,
  addOnlineUser,
  removeOnlineUser
} = cacheSlice.actions
export default cacheSlice.reducer