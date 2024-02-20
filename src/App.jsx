import './App.css'
import AppRoutes from './routes/AppRoutes'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/contextAchievements';
import { ContextProviderQuestion } from './context/contextQuestion';

function App() {

  return (
    <>
      <ContextProviderQuestion>
        <ContextProvider>
          <AppRoutes />
          <ToastContainer />
        </ContextProvider>
      </ContextProviderQuestion>
    </>
  )
}

export default App
