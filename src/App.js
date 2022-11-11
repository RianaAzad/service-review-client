import { Router, RouterProvider } from 
'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
