import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router.js";
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

function App() {
  return <>
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> 
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  </>
}

export default App;