import './App.css'
import AppRoutes from './routes/AppRoutes'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/contextAchievements';

function App() {

  return (
    <>
        <ContextProvider>
          <AppRoutes />
          <ToastContainer />
        </ContextProvider>
    </>
  )
}

export default App
