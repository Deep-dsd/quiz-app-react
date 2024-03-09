import React from "react";
import QuizApp from "./QuizApp";
import { AppProvider } from "./context";
const Quiz = () => {
  return (
    <AppProvider>
      <QuizApp />
    </AppProvider>
  );
};

export default Quiz;
