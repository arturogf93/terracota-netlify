import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }) => {
  app.AOS = new AOS.init({
    once: true,
    duration: 600,
    offset: 200
  }); // or any other options you need
};
