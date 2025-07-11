import Resume from './components/view/Resume'
import NavBar from './components/view/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { resumeContent } from './resumeContent'
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <Resume {...resumeContent} />
    </>
  )
}

export default App
