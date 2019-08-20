const initialState = {
    isChatBox: true,
  };

const TOGGLE_CHATBOX = 'TOGGLE_CHATBOX';

export const toggleChatBox = isChatBox => ({
  type: TOGGLE_CHATBOX, isChatBox
});

export default (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_CHATBOX:
        return { ...state, isChatBox: action.isChatBox };
      default:
        return state;
    }
  };


