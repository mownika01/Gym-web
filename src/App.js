import './App.css';
import Main from './components/Main/Main';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
         <Main />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonial />
         <Email />
         <Footer />
    </div>
  );
}

export default App;
