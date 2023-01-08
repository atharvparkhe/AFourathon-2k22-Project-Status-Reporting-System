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
        <Route path="/" element={<ProjectNav navOpen={opened}/>}>
          <Route path="project" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
};
export default App;
