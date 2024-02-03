import { useEffect, useReducer, useState } from "react";
import "./App.css";
import reducer from "./reducer.js";

export default function App() {
  const [state, disptach] = useReducer(reducer, false);

  const [alarmStateInAllRooms, setAlarmStateInAllRooms] = useState(false);
  const [alarmStateInLounge, setAlarmStateInLounge] = useState(false);
  const [alarmStateInBedroom, setAlarmStateInBedroom] = useState(false);
  const [alarmStateInKitchen, setAlarmStateInKitchen] = useState(false);

  const [electricityStateInAllRooms, setElectricityStateInAllRooms] =
    useState(false);
  const [electricityStateInLounge, setElectricityStateInLounge] =
    useState(false);
  const [electricityStateInBedroom, setElectricityStateInBedroom] =
    useState(false);
  const [electricityStateInKitchen, setElectricityStateInKitchen] =
    useState(false);

  const toggleAlarmSystemSwitches = () => {
    if (alarmStateInLounge && alarmStateInBedroom && alarmStateInKitchen) {
      setAlarmStateInAllRooms(false);

      setAlarmStateInLounge(false);
      setAlarmStateInBedroom(false);
      setAlarmStateInKitchen(false);
    } else if (
      (alarmStateInAllRooms &&
        alarmStateInLounge &&
        alarmStateInBedroom &&
        alarmStateInKitchen) === false
    ) {
      setAlarmStateInAllRooms(true);

      setAlarmStateInLounge(true);
      setAlarmStateInBedroom(true);
      setAlarmStateInKitchen(true);
    }
  };

  const toggleElectricitySwitches = () => {
    if (
      electricityStateInLounge &&
      electricityStateInBedroom &&
      electricityStateInKitchen
    ) {
      setElectricityStateInAllRooms(false);

      setElectricityStateInLounge(false);
      setElectricityStateInBedroom(false);
      setElectricityStateInKitchen(false);
    } else if (
      (electricityStateInAllRooms &&
        electricityStateInLounge &&
        electricityStateInBedroom &&
        electricityStateInKitchen) === false
    ) {
      setElectricityStateInAllRooms(true);

      setElectricityStateInLounge(true);
      setElectricityStateInBedroom(true);
      setElectricityStateInKitchen(true);
    }
  };

  useEffect(() => {
    if (alarmStateInLounge && alarmStateInBedroom && alarmStateInKitchen) {
      setAlarmStateInAllRooms(true);
    } else {
      setAlarmStateInAllRooms(false);
    }
  }, [alarmStateInLounge, alarmStateInBedroom, alarmStateInKitchen]);

  useEffect(() => {
    if (
      electricityStateInLounge &&
      electricityStateInBedroom &&
      electricityStateInKitchen
    ) {
      setElectricityStateInAllRooms(true);
    } else {
      setElectricityStateInAllRooms(false);
    }
  }, [
    electricityStateInLounge,
    electricityStateInBedroom,
    electricityStateInKitchen,
  ]);

  console.log(electricityStateInKitchen);

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
            checked={alarmStateInAllRooms ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setAlarmStateInLounge((value) => !value)}
            checked={alarmStateInLounge ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setAlarmStateInKitchen((value) => !value)}
            checked={alarmStateInKitchen ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setAlarmStateInBedroom((value) => !value)}
            checked={alarmStateInBedroom ? true : false}
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
            checked={electricityStateInAllRooms ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setElectricityStateInLounge((value) => !value)}
            checked={electricityStateInLounge ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setElectricityStateInKitchen((value) => !value)}
            checked={electricityStateInKitchen ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setElectricityStateInBedroom((value) => !value)}
            checked={electricityStateInBedroom ? true : false}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
