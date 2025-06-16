
import Education from "@/components/Education";
import Navbar from "../components/Navbar";
// import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <About /> */}
      <Experience />
      <Projects/>
      <Education/>
    </div>
  );
}
