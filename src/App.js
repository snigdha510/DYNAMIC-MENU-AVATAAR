import Header from './components/CustomHeader';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/" element={<Header />} />
          </Routes>
        </BrowserRouter>
      <Header />      
    </>
  );
}

export default App;
