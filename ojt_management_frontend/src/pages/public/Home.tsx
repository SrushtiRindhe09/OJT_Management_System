import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/home/Hero";
import Steps from "../../components/home/Steps";
import Featured from "../../components/home/Featured";
import Testimonials from "../../components/home/Testimonials";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
     <Featured />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
