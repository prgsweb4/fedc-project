import Hero from "./Hero";
import SMenu from "./SMenu";
import brus from "../assets/images/bruschetta.jpg";
import greek from "../assets/images/greek-salad.png";
import dessert from "../assets/images/lemon dessert.jpg";

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

function Main() {
    return (
        <>
            <Hero />
            <SMenu data={data} />
        </>
    )
}
export default Main;