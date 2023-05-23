// import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Layout/Footer';
import SignUp from './components/Forms/SignUp';


function App() {
  return (
    <>
      <Header />
<SignUp/>
      <Footer />
    </>
  );
}

export default App;
