import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from 'react';

const initialState = {
  questions: [],

  //can be 'loading', 'error', 'ready','active', 'finished'
  status: 'loading',
};

function reducer(state, action) {
  console.log(state)
  //console.log(action)
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
  }

}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => console.log(err))

  }, [])

  return (
    <div className='app'>
      <Header />

      <Main className='main'>
        <p>1/15</p>
        <p>question?</p>
      </Main>
    </div>
  )
}
