import Hero from "./Hero";
import SMenu from "./SMenu";
import brus from "../assets/images/bruschetta.jpg";
import greek from "../assets/images/greek-salad.png";
import dessert from "../assets/images/lemon dessert.jpg";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../assets/Icons/toup.svg";

import Testimonials from "./Testimonials";
import About from "./About";

const data = [
    {
      name: "Greek Salad",
      price: "$8.99",
      image: greek,
      description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
    },
    {
      name: "Bruschetta",
      price: "$6.99",
      image: brus,
      description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      name: "Lemon Special",
      price: "$4.99",
      image: dessert,
      description: "This comes straight from grandma's recipe book.",
    },
  ];

const testimonialsdata = [
    {
      name: "Greek Salad",
      stars: "5",
      image: image1,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
    {
      name: "Bruschetta",
      stars: "4",
      image: image2,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
    {
      name: "Lemon Special",
      stars: "5",
      image: image3,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
    {
      name: "Bruschetta",
      stars: "3",
      image: image4,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
    {
      name: "Lemon Special",
      stars: "2",
      image: image5,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
    {
      name: "Lemon Special",
      stars: "5",
      image: image6,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
    },
  ];
function Main() {
    return (
        <>
            <Hero />
            <SMenu data={data} />
            <Testimonials data={testimonialsdata} />
            <About />
            <ScrollToTop smooth component={<MySVG />} />
        </>
    )
}
export default Main;