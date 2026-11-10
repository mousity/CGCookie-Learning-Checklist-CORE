import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import SingleCourse from "./components/Course";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="container">
      <h1>CG-Cookie Course Tracker</h1>

        <div className="grid-wrapper-main">
          <section><h1>MyCourses</h1>
            <SingleCourse title="Example1" lessonCount={28}></SingleCourse>
            <SingleCourse title="Example2" lessonCount={21}></SingleCourse>
            <SingleCourse title="Example3" lessonCount={34}></SingleCourse>
          </section>
  
          <section>Lesson Details</section>
        </div>
    </main>
  );
}

export default App;
