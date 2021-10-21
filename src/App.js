import './App.css';
import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState('');
  const [display, setDisplay] = useState('');
  const [answer, setAnswer] = useState('');

  const handleInput = (sym) => {
    let isExpLastDigitNumber = /[0-9.]/.test(expression[expression.length - 1]);
    let isInputNumber = /[0-9.]/.test(sym);
    let isInputNegativeSign = /[-]/.test(sym);
    let hasDisplayDecimal = /[.]/.test(display);
    let isDisplayNegative = /[-]/.test(display[0]);

    if (
      isInputNumber ||
      (isInputNegativeSign &&
        !isDisplayNegative &&
        (isExpLastDigitNumber || expression.length === 0))
    ) {
      if (
        (display[0] === '-' && isInputNegativeSign) ||
        (sym === '.' && hasDisplayDecimal) ||
        (sym === '0' && display[display.length - 1] === '0')
      ) {
        return;
      } else {
        setDisplay((prev) => prev + sym);
      }
    }

    if (!isInputNumber && display.length > 0) {
      if (isInputNegativeSign && isDisplayNegative && display.length === 1) {
        return;
      }

      setExpression((prev) => prev + display + sym);
      setDisplay('');
    }
    if (!isInputNumber && display.length === 0 && !isExpLastDigitNumber) {
      console.log(5 + 'acá está el error');
      // setExpression((prev) => {
      //   let sliced = prev.slice('0', prev.length - 1);
      //   return sliced + sym;
      // });
      setExpression((prev) => prev);
    }
  };

  const calculate = () => {
    //display could be:
    // empty -> nothing
    // number -> calculate
    // minus -> nothing
    // decimal -> nothing
    //expression finish with:
    // operator -> delete operator and calculate
    // number -> calculate

    let isExpLastDigitNumber = /[0-9]/.test(expression[expression.length - 1]);
    let isDisplayLastDigitNumber = /[0-9]/.test(display[display.length - 1]);
    let isDisplayNegative = /[-]/.test(display[0]);

    if (!isDisplayLastDigitNumber) {
      return;
    } else {
      if (isExpLastDigitNumber) {
        console.log('isExpLastDigitNumber', expression, display, answer);
        setExpression((prev) => prev + '=');
        setAnswer(evaluateExpression(expression));
      } else {
        let joined = [expression, display].join('');
        setExpression((prev) => prev + display + '=');
        let result = eval(joined);
        setAnswer(result);
        setDisplay('');
        setExpression(result);
      }
    }
  };

  const evaluateExpression = (exp) => {
    let sliced = exp.slice('0', exp.length - 1);
    return eval(sliced);
  };

  const clear = () => {
    setExpression('');
    setAnswer(0);
    setDisplay('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='h1 mb-5'>Awesome calculator 2</h1>
        <div className='grid pb-5'>
          <div className='display alert alert-dismissible alert-primary'>
            <div className='expression fs-4 text-warning'>
              expression: {expression}
            </div>
            <div id='display' className='fs-4 text-'>
              {display || answer}
            </div>
          </div>
          <button
            type='button'
            onClick={() => clear()}
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
            onClick={() => calculate()}
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

export default App;
