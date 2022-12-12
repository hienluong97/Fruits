import './App.css';
import { Button} from 'antd';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

function App() {
  return (

      <DefaultLayout>
      <header className="App-header">
         hello world
         <Button type="primary">Primary Button</Button>
      </header>
      </DefaultLayout>
  );
}

export default App;
