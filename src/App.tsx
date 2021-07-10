import { useState } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';
import User from './components/User';
import UserList from './components/UserList';

function App() {  
  let [isPageNo, setIsPageNo] = useState(1)

  return (
    <>
      <UserList /> 
    </>
  );
}

export default App;
