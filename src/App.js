import ListOfNotes from './components/ListOfNotes.js';
import InputNote from './components/InputNote';
import './App.css';
import { Helmet } from 'react-helmet';
import Note from './components/Note/index.js';


function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: lightblue; }'}</style>
      </Helmet>
      <ListOfNotes />
    </div>
  );
}

export default App;
