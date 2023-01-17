import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { IconType } from "react-icons/lib";
interface linksTypes {
  id: number;
  text: string;
  url: string;
}
export const links: linksTypes[] = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
];

interface servicesTypes {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const services: servicesTypes[] = [
  {
    id: 1,
    icon: GiCompass,
    title: "Mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: GiDiamondHard,
    title: "Vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: GiStabbedNote,
    title: "History",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url: string =
  "https://course-api.com/react-store-products";

export const single_product_url: string = `https://course-api.com/react-store-single-product?id=`;
