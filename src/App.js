import logo from './images/logo.svg';
import dollar from './images/icon-dollar.svg';
import personicon from './images/icon-person.svg';
import React, { useState } from 'react';


import './App.css';


function App() {

  //older handlechnage states..
  // const [amount, setamount] = useState();
  // const [tip,settip ] = useState();
  // const [person, setperson] = useState();
  // const [tipAmount, settipAmount] = useState(0.00);
  // const [Total, setTotal] = useState(0.00);

//older handlechnage unction provided delayed input updation from user which caused error. 
// function handlechange(){
//   let price;
//   let tipp;
//   let people;
//   for(let i=0;i<3;i++){

//   price = document.getElementById('price').value;
//   tipp = document.getElementById('tip').value;
//   people = document.getElementById('person').value;

//   setamount(price);
//   settip(tipp);
//   setperson(people);

  // let totalTip = amount * (tip/100);
  // let personTip = totalTip/person;
  // settipAmount(personTip);
  // let personTotal = (amount/person) + personTip;
  // setTotal(personTotal);

// }

//new handlechange function (the correct way of taking multiple input from single handlechange fucntion). 
//stil same error lol
const [value, setvalue] = useState({
  amount: "",
  tip:"",
  person:"",
});
const [tipAmount, settipAmount] = useState(0.00);
const [Total, setTotal] = useState(0.00);
let totalTip;
let personTip;
let personTotal;
function op(){
  settipAmount(personTip);
  setTotal(personTotal);
}
function calc(){
  totalTip = value.amount * (value.tip/100);
  personTip = totalTip/value.person;
  op();
  personTotal = (value.amount/value.person) + personTip;
  op();

}

function handlechange(event){
 const val = event.target.value;
 setvalue({
   ...value,
   [event.target.name]: val
 });
  calc();
}

function clearAll(){
  for (let i = 0; i < 5; i++) {
  document.getElementsByClassName("percent")[i].classList.remove("active");
}
}

function setPercent(event){
  clearAll();
  let percent=event.target.innerHTML.slice(0, event.target.innerHTML.length - 1);;
  event.target.classList.add("active");
  setvalue({
  ...value,
  tip: percent,
})
}

function reset(){
  setvalue({
    amount: "",
    tip:"",
    person:"",
  });
  setTotal(0);
  settipAmount(0);
  clearAll();
}

function ans(){
  calc();
}    

  return (
      <>
      <div className="body">
        <div className="imglogo">
          <img src={logo} alt="" />
        </div>
        <div className="mainapp">
          <div className="input">
            <div className="label">
              <h3>Bill</h3>
              <span className="error" id="billError">1</span>
            </div>
            <div className="amount">
              <img src={dollar} alt="" />
            <input type="" id="price" name="amount" value={value.amount} onClick={handlechange} onChange={handlechange} placeholder="0"/>
            </div>
            <div className="tipcontainer">
            <h3>Select Tip %</h3>
            <div className="tip">
              <div className="col percent" onClick={setPercent}>0%</div>
              <div className="col percent" onClick={setPercent}>5%</div>
              <div className="col percent" onClick={setPercent}>10%</div>
              <div className="col percent" onClick={setPercent}>15%</div>
              <div className="col percent" onClick={setPercent}>20%</div>
              <input type="text" id="tip" name="tip" value={value.tip} onClick={handlechange} onChange={handlechange} placeholder="Custom"/> 
            </div>
            </div>
            <div className="label">
              <h3 >no. of people</h3>
              <span className="error" id="peopleError">1</span>
            </div>
            <div className="amount">
              <img src={personicon} alt="" />
            <input type="text" id="person" name="person" value={value.person} onClick={handlechange} onChange={handlechange} placeholder="0"/>
            </div>
          </div>


          <div className="output">
            <div className="row">
              <div className="text">
                <h3>Tip Amount</h3>
                <p>/ Person</p>
              </div>
              <div className="amtOP">
                ${tipAmount}
              </div>
            </div>
            <div className="row">
              <div className="text">
                <h3>Total</h3>
                <p>/ Person</p>
              </div>
              <div className="amtOP" >
                ${Total}
              </div>
            </div>
            <div className="btn">
            <div className="btnON" onClick={ans}>SPLIT BILL</div>
            <div className="btnON" onClick={reset}>RESET</div>
            </div>
          </div>
        </div>
      </div>

      
      </>
  );
}

export default App;
