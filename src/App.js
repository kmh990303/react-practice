import './App.css';
import Element from './Element';


const dt = [{
  name: 'fire',
  nick: 'f'
},
{
  name: 'water',
  nick: 'w',
},
{
  name: 'tree',
  nick: 't'
}];

function App() {
  return (
    <div className="App">
      {dt.map((d) => {
        return <Element {...d} />
      })}
    </div>
  );
}

export default App;
