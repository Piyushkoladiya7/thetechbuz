import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <React.Suspense fallback={false}>

      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      {/* </Provider> */}
    </React.Suspense>
  );
}

export default App;
