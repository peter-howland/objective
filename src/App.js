import './styles/App.css';
import Resume from './components/Resume';
import { resumeContent } from './resumeContent';
const App = () => {

 

  return (
      <Resume {...resumeContent}/>
  );
}

export default App;
