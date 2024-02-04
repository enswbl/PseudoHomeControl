import { useEffect, useReducer } from "react";
import "./App.css";
import { reducer, initialState } from "./reducer.js";
import { data } from "./data.json";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  useEffect(() => {
    const updateData = async () => {
      try {
        const toggleData = await fetchData();
        console.log(toggleData[0].lounge);
        dispatch({
          type: "alarmLounge",
          alarmStateInLounge: toggleData[0].lounge,
        });
        dispatch({
          type: "alarmKitchen",
          alarmStateInKitchen: toggleData[0].kitchen,
        });
        dispatch({
          type: "alarmBedroom",
          alarmStateInBedroom: toggleData[0].bedroom,
        });

        dispatch({
          type: "electricityLounge",
          electricityStateInLounge: toggleData[0].lounge,
        });
        dispatch({
          type: "electricityKitchen",
          electricityStateInKitchen: toggleData[0].kitchen,
        });
        dispatch({
          type: "electricityBedroom",
          electricityStateInBedroom: toggleData[0].bedroom,
        });
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
    updateData();
  }, []);

  const toggleAlarmSystemSwitches = () => {
    if (
      state.alarmStateInLounge &&
      state.alarmStateInBedroom &&
      state.alarmStateInKitchen
    ) {
      dispatch({
        type: "alarmAllRooms",
        alarmStateInAllRooms: false,
      });

      dispatch({
        type: "alarmLounge",
        alarmStateInLounge: false,
      });

      dispatch({
        type: "alarmKitchen",
        alarmStateInKitchen: false,
      });

      dispatch({
        type: "alarmBedroom",
        alarmStateInBedroom: false,
      });
    } else if (
      (state.alarmStateInAllRooms &&
        state.alarmStateInLounge &&
        state.alarmStateInBedroom &&
        state.alarmStateInKitchen) === false
    ) {
      dispatch({
        type: "alarmAllRooms",
        alarmStateInAllRooms: true,
      });

      dispatch({
        type: "alarmLounge",
        alarmStateInLounge: true,
      });

      dispatch({
        type: "alarmKitchen",
        alarmStateInKitchen: true,
      });

      dispatch({
        type: "alarmBedroom",
        alarmStateInBedroom: true,
      });
    }
  };

  const toggleElectricitySwitches = () => {
    if (
      state.electricityStateInLounge &&
      state.electricityStateInKitchen &&
      state.electricityStateInBedroom
    ) {
      dispatch({
        type: "electricityAllRooms",
        electricityStateInAllRooms: false,
      });

      dispatch({
        type: "electricityLounge",
        electricityStateInLounge: false,
      });

      dispatch({
        type: "electricityKitchen",
        electricityStateInKitchen: false,
      });

      dispatch({
        type: "electricityBedroom",
        electricityStateInBedroom: false,
      });
    } else if (
      (state.electricityStateInAllRooms &&
        state.electricityStateInLounge &&
        state.electricityStateInKitchen &&
        state.electricityStateInBedroom) === false
    ) {
      dispatch({
        type: "electricityAllRooms",
        electricityStateInAllRooms: true,
      });

      dispatch({
        type: "electricityLounge",
        electricityStateInLounge: true,
      });

      dispatch({
        type: "electricityKitchen",
        electricityStateInKitchen: true,
      });

      dispatch({
        type: "electricityBedroom",
        electricityStateInBedroom: true,
      });
    }
  };

  useEffect(() => {
    if (
      state.alarmStateInLounge &&
      state.alarmStateInBedroom &&
      state.alarmStateInKitchen
    ) {
      dispatch({
        type: "alarmAllRooms",
        alarmStateInAllRooms: true,
      });
    } else {
      dispatch({
        type: "alarmAllRooms",
        alarmStateInAllRooms: false,
      });
    }
  }, [
    state.alarmStateInLounge,
    state.alarmStateInBedroom,
    state.alarmStateInKitchen,
  ]);

  useEffect(() => {
    if (
      state.electricityStateInLounge &&
      state.electricityStateInBedroom &&
      state.electricityStateInKitchen
    ) {
      dispatch({
        type: "electricityAllRooms",
        electricityStateInAllRooms: true,
      });
    } else {
      dispatch({
        type: "electricityAllRooms",
        electricityStateInAllRooms: false,
      });
    }
  }, [
    state.electricityStateInLounge,
    state.electricityStateInBedroom,
    state.electricityStateInKitchen,
  ]);

  return (
    <div className="App">
      <h1>Управление умным псевдо-домом 😼</h1>
      <h2>Сигнализация 🔔</h2>
      <div className="container">
        <div className="title">
          <b>Центральный переключатель</b>
        </div>
        <div className="title">
          <b>Гостинная</b>
        </div>
        <div className="title">
          <b>Кухня</b>
        </div>
        <div className="title">
          <b>Спальня</b>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleAlarmSystemSwitches()}
            checked={state.alarmStateInAllRooms ? true : false}
          />
          <span className="slider round"></span>
        </label>

        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "alarmLounge",
                alarmStateInLounge: e.target.checked,
              })
            }
            checked={state.alarmStateInLounge ? true : false}
          />
          <span className="slider round"></span>
        </label>

        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "alarmKitchen",
                alarmStateInKitchen: e.target.checked,
              })
            }
            checked={state.alarmStateInKitchen ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "alarmBedroom",
                alarmStateInBedroom: e.target.checked,
              })
            }
            checked={state.alarmStateInBedroom ? true : false}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <h2>Электричество ⚡️</h2>
      <div className="container">
        <div className="title">
          <b>Центральный переключатель</b>
        </div>
        <div className="title">
          <b>Гостинная</b>
        </div>
        <div className="title">
          <b>Кухня</b>
        </div>
        <div className="title">
          <b>Спальня</b>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleElectricitySwitches()}
            checked={state.electricityStateInAllRooms ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "electricityLounge",
                electricityStateInLounge: e.target.checked,
              })
            }
            checked={state.electricityStateInLounge ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "electricityKitchen",
                electricityStateInKitchen: e.target.checked,
              })
            }
            checked={state.electricityStateInKitchen ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "electricityBedroom",
                electricityStateInBedroom: e.target.checked,
              })
            }
            checked={state.electricityStateInBedroom ? true : false}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
