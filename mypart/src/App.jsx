import './App.css';
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Features } from "./Components/FeaturesPage/Features";
import { Timetracker } from "./Components/FeaturesPage/Timetracker";
import { Timesheet } from "./Components/FeaturesPage/Timesheet";
import { Invoicing } from "./Components/FeaturesPage/Invoicing";
// import {Project} from "./Components/Projects/Projects.jsx"
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>

      <Features />
      <br />
      <hr />
      <Timetracker />
      <Timesheet />
      <Invoicing />
{/* <Project/> */}
      <hr />
    </div>
  );
}