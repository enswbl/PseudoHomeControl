export const initialState = {
  alarmStateInAllRooms: false,
  alarmStateInLounge: false,
  alarmStateInKitchen: false,
  alarmStateInBedroom: false,

  electricityStateInAllRooms: false,
  electricityStateInLounge: false,
  electricityStateInKitchen: false,
  electricityStateInBedroom: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "alarmAllRooms":
      return {
        ...state,
        alarmStateInAllRooms: action.alarmStateInAllRooms,
      };

    case "alarmLounge":
      return {
        ...state,
        alarmStateInLounge: action.alarmStateInLounge,
      };

    case "alarmKitchen":
      return {
        ...state,
        alarmStateInKitchen: action.alarmStateInKitchen,
      };

    case "alarmBedroom":
      return {
        ...state,
        alarmStateInBedroom: action.alarmStateInBedroom,
      };

    case "electricityAllRooms":
      return {
        ...state,
        electricityStateInAllRooms: action.electricityStateInAllRooms,
      };
    case "electricityLounge":
      return {
        ...state,
        electricityStateInLounge: action.electricityStateInLounge,
      };
    case "electricityKitchen":
      return {
        ...state,
        electricityStateInKitchen: action.electricityStateInKitchen,
      };
    case "electricityBedroom":
      return {
        ...state,
        electricityStateInBedroom: action.electricityStateInBedroom,
      };

    default:
      return state;
  }
};
