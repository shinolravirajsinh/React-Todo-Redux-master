import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App; 
