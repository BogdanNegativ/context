import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, UserContext } from './context';
import CounterSection from './components/CounterSection';

function App() {
  const user = { firstName: "Ivan", lastName: "Ivanov" };

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeProvider>
          <Header />
          <CounterSection />
          <Footer />
        </ThemeProvider >
      </UserContext.Provider>

    </>
  );
}

export default App;
