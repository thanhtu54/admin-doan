import logo from './logo.svg';
import './App.css';
import Index from './component/Index';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
function App(props) {
  return (
    <>
      <Header />
      <div className="body">
        <div className="content">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default App;
