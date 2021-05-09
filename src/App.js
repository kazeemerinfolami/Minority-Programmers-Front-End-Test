import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Incubator from './Pages/IncubatorPage/Incubator';
import IncubatorPage2 from './Pages/IncubatorPage2/IncubatorPage2';
import Learn from './Pages/MyCourse/Learn/Learn';
import MyCourses from './Pages/MyCourse/MyCourses/MyCourses';
import ResumeCourse from './Pages/MyCourse/ResumeCourse/ResumeCourse';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Incubator />
        </Route>
        <Route exact path="/incubator">
          <IncubatorPage2 />
        </Route>
        <Route exact path="/learn">
          <Learn />
        </Route>
        <Route exact path="/mycourses">
          <MyCourses />
        </Route>
        <Route exact path="/resumeCourse">
          < ResumeCourse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
