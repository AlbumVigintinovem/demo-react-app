import './style.css';
import Home from './components/Home';
import SettingsContext, { useSiteContext } from './context/SettingsContext';
import Sidebar from './components/Sidebar';
import classNames from 'classnames';
import Content from './components/Content';

function App() {

  return (
    <div>
      <SettingsContext>
        <Content />
      </SettingsContext>
    </div>
  );
}

export default App;
