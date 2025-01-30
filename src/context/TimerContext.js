import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimerContext = createContext();

export const useTimers = () => {
  return useContext(TimerContext);
};

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([]);
  const [categories, setCategories] = useState(['Workout', 'Study', 'Break']);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadTimers();
    loadHistory();
  }, []);

  const loadTimers = async () => {
    const storedTimers = await AsyncStorage.getItem('timers');
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
  };

  const loadHistory = async () => {
    const storedHistory = await AsyncStorage.getItem('history');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  };

  const saveTimers = async (newTimers) => {
    setTimers(newTimers);
    await AsyncStorage.setItem('timers', JSON.stringify(newTimers));
  };

  const saveHistory = async (newHistory) => {
    setHistory(newHistory);
    await AsyncStorage.setItem('history', JSON.stringify(newHistory));
  };

  const addTimer = (name, duration, category) => {
    const newTimer = {
      id: Date.now(),
      name,
      duration: parseInt(duration),
      remainingTime: parseInt(duration),
      status: 'Paused',
      category,
    };

    const updatedTimers = [...timers, newTimer];
    saveTimers(updatedTimers);
  };

  const startTimer = (id) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id && timer.status !== 'Running') {
        timer.status = 'Running';
        timer.interval = setInterval(() => {
          if (timer.remainingTime > 0) {
            timer.remainingTime -= 1;
            setTimers([...timers]);
          } else {
            clearInterval(timer.interval);
            timer.status = 'Completed';
            addToHistory(timer);
            setTimers([...timers]);
          }
        }, 1000);
      }
      return timer;
    });
    saveTimers(updatedTimers);
  };

  const pauseTimer = (id) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id && timer.status === 'Running') {
        clearInterval(timer.interval);
        timer.status = 'Paused';
      }
      return timer;
    });
    saveTimers(updatedTimers);
  };

  const resetTimer = (id) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id) {
        clearInterval(timer.interval);
        timer.status = 'Paused';
        timer.remainingTime = timer.duration;
      }
      return timer;
    });
    saveTimers(updatedTimers);
  };

  const addToHistory = (timer) => {
    const newHistory = [
      ...history,
      { name: timer.name, completionTime: new Date().toLocaleString() },
    ];
    saveHistory(newHistory);
  };

   // The deleteTimer function
   const deleteTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };
  

  const bulkAction = (action, category) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.category === category) {
        if (action === 'Start') {
          startTimer(timer.id);
        } else if (action === 'Pause') {
          pauseTimer(timer.id);
        } else if (action === 'Reset') {
          resetTimer(timer.id);
        }
      }
      return timer;
    });
    saveTimers(updatedTimers);
  };

  return (
    <TimerContext.Provider
      value={{
        timers,
        categories,
        history,
        addTimer,
        startTimer,
        pauseTimer,
        resetTimer,
        bulkAction,
        deleteTimer
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

















