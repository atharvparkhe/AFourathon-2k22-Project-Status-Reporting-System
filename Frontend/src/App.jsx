import { MantineProvider } from "@mantine/core";
import AppShellDemo from "./components/Nav/NavShell";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Status from "./pages/Status";
import NavHeader from "./components/Nav/NavHeader";
import { useState } from "react";
import About from "./components/Project/About";
import ProjectNav from "./components/Project/ProjectNav";
import Modules from "./components/Project/Modules";
import Tasks from "./components/Project/Tasks";
import TeamsAll from "./components/TeamsAll/TeamsAll";
import TeamNav from "./components/Team/TeamNav";
import TeamDetail from "./components/Team/TeamDetail";
import TeamMembers from "./components/Team/TeamMembers";
import MemberUpload from "./components/Team/MemberUpload";

const App = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <NavHeader navOpened={setOpened} navOpen={opened}/>
      <Routes>
        <Route element={<AppShellDemo navOpen={opened}/>}>
          <Route path="/" element={<Projects />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/status" element={<Status />} />
        </Route>
        <Route path="/project" element={<ProjectNav navOpen={opened}/>}>
          <Route path="about" element={<About/>}/>
          <Route path="modules">
            <Route index element={<Modules/>}/>
            <Route path="tasks" element={<Tasks/>}/>
          </Route>
        </Route>  
        <Route path="/teams/team" element={<TeamNav navOpen={opened}/>}>
          <Route path="details" element={<TeamDetail/>}/>
          <Route path="members" element={<TeamMembers/>}/>
          <Route path="upload" element={<MemberUpload/>}/>
        </Route>  
      </Routes>
    </>
  );
};
export default App;
