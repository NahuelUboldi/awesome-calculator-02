
import './App.css';
import { useState} from "react"


function App() {
  const [expression, setExpression] = useState("")
  const [fullInput, setFullInput] = useState("")
  const [answer, setAnswer] = useState("")
  
  const display = (sym) => {
    let isExpLastDigitNumber = /[0-9.]/.test(expression[expression.length - 1])
    let isInputLastDigitNumber = /[0-9.]/.test(sym)
    let isInputLastDigitNegativeSign = /[-]/.test(sym);

    if (isInputLastDigitNumber || isInputLastDigitNegativeSign) {

      if (fullInput[0] === "-" && sym === "-") {
        return
      }
      let tested = /[.]g/.test(fullInput)
      if (sym === "." ) {
        setFullInput((prev) => prev + sym);

      }
   
    
    }

    




    if (!/[0-9.-]/.test(sym)) {
      setAnswer((prev) => prev + sym)

      if (expression.length === 0 || expression[0] === "-") {
        return;
      }
    }
 
    if (!isExpLastDigitNumber && !isInputLastDigitNumber) {
      setExpression((prev) => {
        let sliced = prev.slice('0', prev.length - 1);
        return sliced + sym;
      });
    } else {
      setExpression((prev) => prev + sym);
    }
  
    if (expression[expression.length - 1] === "=") {
      if(isInputLastDigitNumber) {
        setExpression(sym)
      } else {
        setExpression(answer + sym)
      }
    }
    
  }
  const calculate = () => {
    let isExpLastDigitNumber = /[0-9.]/.test(expression[expression.length - 1]);
    if (isExpLastDigitNumber) {
      setAnswer(eval(expression))
      setExpression(prev => prev + "=")
    } 
  }
  
  const clear = () => {
    setExpression("")
    setAnswer(0)

  };


  return (
    <div className='App'>
      <div className='container'>
        <h1 className='h1 mb-5'>Awesome calculator 2</h1>
        <div className='grid pb-5'>
          <div className='display alert alert-dismissible alert-primary'>
            <div className='expression fs-4 text-warning'>{expression}</div>
            <div id='display' className="fs-4 text-">input: {fullInput} || answer: {answer}</div>
          </div>
          <button type='button' onClick={() => clear()} className='btn btn-secondary clear' id='clear'>
            AC
          </button>
          <button
            type='button' onClick={() => display("/")}
            className='btn btn-outline-info divide'
            id='divide'
          >
            /
          </button>
          <button
            type='button' onClick={() => display("*")}
            className='btn btn-outline-info multiply'
            id='multiply'
          >
            x
          </button>
          <button
            type='button' onClick={() => display("7")}
            className='btn btn-outline-primary seven'
            id='seven'
          >
            7
          </button>
          <button
            type='button' onClick={() => display("8")}
            className='btn btn-outline-primary eight'
            id='eight'
          >
            8
          </button>
          <button
            type='button' onClick={() => display("9")}
            className='btn btn-outline-primary nine'
            id='nine'
          >
            9
          </button>
          <button
            type='button' onClick={() => display("-")}
            className='btn btn-outline-info subtract'
            id='subtract'
          >
            -
          </button>
          <button
            type='button' onClick={() => display("4")}
            className='btn btn-outline-primary four'
            id='four'
          >
            4
          </button>
          <button
            type='button' onClick={() => display("5")}
            className='btn btn-outline-primary five'
            id='five'
          >
            5
          </button>
          <button
            type='button' onClick={() => display("6")}
            className='btn btn-outline-primary six'
            id='six'
          >
            6
          </button>
          <button type='button' onClick={() => display("+")} className='btn btn-outline-info six' id='add'>
            +
          </button>
          <button
            type='button' onClick={() => display("1")}
            className='btn btn-outline-primary one'
            id='one'
          >
            1
          </button>
          <button
            type='button' onClick={() => display("2")}
            className='btn btn-outline-primary two'
            id='two'
          >
            2
          </button>
          <button
            type='button' onClick={() => display("3")}
            className='btn btn-outline-primary three'
            id='three'
          >
            3
          </button>
          <button type='button' onClick={() => calculate()} className='btn btn-info equals' id='equals'>
            =
          </button>
          <button
            type='button' onClick={() => display("0")}
            className='btn btn-outline-primary zero'
            id='zero'
          >
            0
          </button>
          <button
            type='button' onClick={() => display(".")}
            className='btn btn-outline-primary decimal'
            id='decimal'
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
