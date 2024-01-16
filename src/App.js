import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.js";
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from "./layouts/Header.js";
import Fooder from "./layouts/Footer.js";

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Router />
          <Fooder />
        </BrowserRouter>
      </QueryClientProvider>
    </div>

  );
}

export default App;