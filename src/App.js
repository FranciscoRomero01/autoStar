import 'materialize-css/dist/css/materialize.css';
import './style/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return<>
    <NavBar/>
    <ItemListContainer title="el auto de tus sueños, lo encontras en autostar" />
  </>;
}

export default App;