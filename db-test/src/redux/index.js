import { ADD_PROFILES, SELECT_PROFILES } from "../constance";

const initialState = {
  profiles: [],
  selectedProfiles: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };
    case SELECT_PROFILES:
      if (state.selectedProfiles.includes(action.payload)) {
        const filteredArray = state.selectedProfiles.filter(
          id => id !== action.payload
        );

        return {
          ...state,
          selectedProfiles: filteredArray
        };
      }  else {
        return {
          ...state,
          selectedProfiles: [...state.selectedProfiles, action.payload]
        };
      }

    default:
      return state;
  }
};
