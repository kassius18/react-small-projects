import {useState} from 'react';
import Header from './Header'
import sublinks from './data' 
import phone from "./images/phone.svg"
import "./App.scss"

function App() {
  return (
    <>
    <Header sublinks={sublinks}/>
    <main className={"hero"}>
      <div className="hero__left">
    <h1 className="hero__title">
      Payments infrastructure
for the internet
    </h1>
      <p className="hero__description">
        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
      </p>
      <button className="hero__btn">Start now</button>
      </div>
      <div className="hero__right">
        <img src={phone} alt=""/>
      </div>
    </main>
    </>
  );
}

export default App;
