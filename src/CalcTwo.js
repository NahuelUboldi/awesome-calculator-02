import './App.css';
import { useState } from 'react';

function CalcTwo() {
  const [placeholder, setPlaceholder] = useState("0")
  const [display, setDisplay] = useState("")
  const [formula, setFormula] = useState("")

  const handleClear = () => {
    setPlaceholder("0")
    setDisplay("")
    setFormula("")
  };
  const handleCalculate = () => {
   let result = eval(formula + display)
   setDisplay(JSON.stringify(result));
   setFormula("")
  };
  const handleInput = (input) => {
    const isNumber = /[0-9]/.test(input);
    const isZero = /0/.test(input);
    const isOperator = /[^0-9.]/.test(input);
    const isNegativeSign = /-/.test(input);
    const isDecimalSign = /[.]/.test(input);

    const hasDisplayNegativeSign = /[-]/.test(display)
    const hasDisplayDecimal = /[.]/.test(display);

    const doesFormulaEndsWithOperator = /[^0-9.]$/.test(formula);
    setPlaceholder(input)

    if (isDecimalSign && hasDisplayDecimal) {
      return
    }
    
    if (isZero && (display.length >= 1 && !hasDisplayNegativeSign)) {
      setDisplay((prev) => prev + input);
      return
    }

    if (display.length === 0) {
      if (isZero) return
      if (isOperator && !doesFormulaEndsWithOperator) {
        if (isNegativeSign && display.length === 0) {
          setDisplay(prev => prev + input)
          return
        }
        return
      }
      if ((isOperator && !isNegativeSign) && doesFormulaEndsWithOperator) {
        let sliced = formula.slice('0', formula.length - 1);
        setFormula(prev => sliced + input)
        return
      }
    }

    if (isDecimalSign && (display.length === 0 || (display.length === 1 && hasDisplayNegativeSign))) {
      setDisplay((prev) => prev + '0.');
      return
    }
    if (isNegativeSign && display.length === 0) {
      setDisplay(prev => prev + input)
      return
    }
    if (isNumber || isZero || isDecimalSign) {
       setDisplay((prev) => prev + input)
      return
    }
    if (isOperator && display.length >= 1) {
      if (display.length === 1 && hasDisplayNegativeSign) {
        if(doesFormulaEndsWithOperator) {
          let sliced = formula.slice('0', formula.length - 1);
          setFormula((prev) => sliced + input);
          setDisplay("")
          return
        }
        setDisplay(input)
        return
      }
      setFormula(prev => prev + display + input)
      setDisplay ("")
      return
    }
  };

  return (
    <div className='CalcTwo'>
      <div className='container'>
        <h1 className='h1 mb-5'>Awesome calculator 2</h1>
        <div className='grid pb-5'>
          <div className='display alert alert-dismissible alert-primary'>
            <div className='expression fs-4 text-warning'>{formula}</div>
            <div id='display' className='fs-4 text-'>{display || placeholder}</div>
          </div>
          <button
            type='button'
            onClick={() => handleClear()}
            className='btn btn-secondary clear'
            id='clear'
          >
            AC
          </button>
          <button
            type='button'
            onClick={() => handleInput('/')}
            className='btn btn-outline-info divide'
            id='divide'
          >
            /
          </button>
          <button
            type='button'
            onClick={() => handleInput('*')}
            className='btn btn-outline-info multiply'
            id='multiply'
          >
            x
          </button>
          <button
            type='button'
            onClick={() => handleInput('7')}
            className='btn btn-outline-primary seven'
            id='seven'
          >
            7
          </button>
          <button
            type='button'
            onClick={() => handleInput('8')}
            className='btn btn-outline-primary eight'
            id='eight'
          >
            8
          </button>
          <button
            type='button'
            onClick={() => handleInput('9')}
            className='btn btn-outline-primary nine'
            id='nine'
          >
            9
          </button>
          <button
            type='button'
            onClick={() => handleInput('-')}
            className='btn btn-outline-info subtract'
            id='subtract'
          >
            -
          </button>
          <button
            type='button'
            onClick={() => handleInput('4')}
            className='btn btn-outline-primary four'
            id='four'
          >
            4
          </button>
          <button
            type='button'
            onClick={() => handleInput('5')}
            className='btn btn-outline-primary five'
            id='five'
          >
            5
          </button>
          <button
            type='button'
            onClick={() => handleInput('6')}
            className='btn btn-outline-primary six'
            id='six'
          >
            6
          </button>
          <button
            type='button'
            onClick={() => handleInput('+')}
            className='btn btn-outline-info six'
            id='add'
          >
            +
          </button>
          <button
            type='button'
            onClick={() => handleInput('1')}
            className='btn btn-outline-primary one'
            id='one'
          >
            1
          </button>
          <button
            type='button'
            onClick={() => handleInput('2')}
            className='btn btn-outline-primary two'
            id='two'
          >
            2
          </button>
          <button
            type='button'
            onClick={() => handleInput('3')}
            className='btn btn-outline-primary three'
            id='three'
          >
            3
          </button>
          <button
            type='button'
            onClick={() => handleCalculate()}
            className='btn btn-info equals'
            id='equals'
          >
            =
          </button>
          <button
            type='button'
            onClick={() => handleInput('0')}
            className='btn btn-outline-primary zero'
            id='zero'
          >
            0
          </button>
          <button
            type='button'
            onClick={() => handleInput('.')}
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

export default CalcTwo;
