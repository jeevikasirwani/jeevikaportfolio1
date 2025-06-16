
import Education from "@/components/Education";
import Navbar from "../components/Navbar";
// import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ExtraCurricular from "@/components/ExtraCurricular";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <About /> */}
      <Experience />
      <Projects/>
      <Education/>
      <ExtraCurricular/>
      <Footer/>
    </div>
  );
}
