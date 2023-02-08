import React, { useState } from 'react';
import './index.css';

export default function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sign, setSign] = useState('+');
  const [result, setResult] = useState('');
  const [operations, setOperations] = useState(0);

  const resetCal = () => {
    setInput1('');
    setInput2('');
    setSign('+');
    setResult('');
  };

  const calResult = (val) => {
    setSign(val);
    if (input1 !== '' && input2 !== '') {
      setOperations(operations + 1);
      if (val === '+') {
        setResult(parseInt(input1) + parseInt(input2));
      } else if (val === '-') {
        setResult(parseInt(input1) - parseInt(input2));
      } else if (val === '*') {
        setResult(parseInt(input1) * parseInt(input2));
      } else if (val === '/') {
        setResult(parseInt(input1) / parseInt(input2));
      }
    }
  };

  return (
    <div className='layout-column align-items-center'>
      <div data-testid='total-operations' className='pt-50 total-operations'>
        Total operations performed: {operations}
      </div>
      <div className='card'>
        <section className='card-text'>
          <div className='layout-row justify-content-around align-items-center mt-40'>
            <input
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              type='number'
              className='ml-3 mr-3'
              data-testid='app-input1'
              autoComplete='off'
              placeholder='Eg: 1'
              name='input1'
            />
            <label
              className='ml-2 mr-2 symbol text-center'
              data-testid='selected-operator'
            >
              {sign}
            </label>
            <input
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              type='number'
              data-testid='app-input2'
              autoComplete='off'
              className='ml-3 mr-3'
              placeholder='Eg: 2'
            />
          </div>

          <div className='layout-row justify-content-around mt-30'>
            <button
              className='operationFont'
              type='submit'
              data-testid='addButton'
              onClick={() => calResult('+')}
            >
              +
            </button>
            <button
              className='operationFont'
              type='submit'
              data-testid='subtractButton'
              onClick={() => calResult('-')}
            >
              -
            </button>
            <button
              className='operationFont'
              type='submit'
              data-testid='multiplyButton'
              onClick={() => calResult('*')}
            >
              *
            </button>
            <button
              className='operationFont'
              type='submit'
              data-testid='divideButton'
              onClick={() => calResult('/')}
            >
              /
            </button>
          </div>

          <div className='layout-row justify-content-between align-items-center mt-30'>
            <button
              type='reset'
              data-testid='resetButton'
              className='outline danger'
              onClick={resetCal}
            >
              Reset
            </button>
            <div className='layout-row justify-content-center align-items-center result-container'>
              {result !== '' && (
                <div
                  data-testid='result'
                  className='result-value ma-0 slide-up-fade-in'
                >
                  Result: {result}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
