import CommunityIntro from "./components/CommunityIntro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MembershipOptions from "./components/MembershipOptions";
import ReadingJourney from "./components/ReadingJourney";
import ReadTogether from "./components/ReadTogether";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="flex flex-col gap-16 lg:gap-30">
      <Header />
      <ReadTogether />
      <CommunityIntro /> 
      <ReadingJourney /> 
      <MembershipOptions /> 
      <Testimonial /> 
      <Footer />
      
    </div>
  );
}

export default App;
