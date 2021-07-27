import {Fragment} from 'react';
import Header from './Components/Layout/Header';
import Sweets from './Components/Sweets/Sweets';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Sweets />
      </main>
    </Fragment>
  );
}

export default App;
