import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        <Stars count={5} />
      </ul>
    </div>
  )
}

export default App;
