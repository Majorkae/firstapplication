import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Calculator() {
  const[calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true
  });

  function handleNumber(value) {
  let newValue = value;   

  if(!calc.isInitial) {
  newValue = calc.current + value;
  }
  setCalc({current : newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  function handleOperator(value) {
   const total = doCalculation();
   setCalc({current : total.toString(), total : total.toString(), isInitial: true, preOp: value });
  }
function doCalculation() {
  let total = parseInt(calc.total);
  

  switch (calc.preOp) {
    case "+":
      total += parseInt(calc.current);
      
      break;
      case "-":
        total -= parseInt(calc.current);
        
        break;
        case "*":
      total *= parseInt(calc.current);
      
      break;
      case "/":
      total /= parseInt(calc.current);
      
      break;
    default:
      total = parseInt(calc.current);
      break;
  }
  return total;
}

 
  function renderDisplay() {
    return calc.current;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    });

   
  }
  return (
    <div className="Calculator">
    <div className="display">{renderDisplay()}</div>
    <CalcButton value="7" onClick={handleNumber}/>
    <CalcButton value="8" onClick={handleNumber}/>
    <CalcButton value="9" onClick={handleNumber}/>
    <CalcButton className="operator" onClick={handleOperator} value="/"/>


    <CalcButton value="4" onClick={handleNumber}/>
    <CalcButton value="5" onClick={handleNumber}/>
    <CalcButton value="6" onClick={handleNumber}/>
    <CalcButton className="operator" onClick={handleOperator} value="*"/>


    <CalcButton value="1" onClick={handleNumber}/>
    <CalcButton value="2" onClick={handleNumber}/>
    <CalcButton value="3" onClick={handleNumber}/>
    <CalcButton className="operator" onClick={handleOperator} value="-"/>

    <CalcButton value="C" onClick={handleClear}/>
    <CalcButton value="0" onClick={handleNumber}/>
    <CalcButton value="=" onClick={handleOperator}/>
    <CalcButton className="operator" onClick={handleOperator} value="+"/>
    </div>
  )
}
function CalcButton(props){
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}
ReactDOM.render(<div className="app-container"><Calculator/></div>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

