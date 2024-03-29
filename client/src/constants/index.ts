import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";

import userImg1 from "../assets/images/kelly.jpg";
import userImg2 from "../assets/images/mubariz.jpg";
import userImg3 from "../assets/images/sergio.jpg";
import userImg4 from "../assets/images/stefan.jpg";

import resturantChef from "../assets/images/restaurant chef B.jpg";
import resturantPlace from "../assets/images/restaurant.jpg";

import { HiLocationMarker } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { TbBrandFacebookFilled } from "react-icons/tb";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

export const Header = {
  title: "Little Lemon",
  highlight: "Chicago",
  text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
`,
  btn: "Reserve a Table",
};

export const Highlight = {
  title: "This weeks specials!",
  btn: "Online Menu",
  card: [
    {
      img: greekSalad,
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      img: bruchetta,
      title: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ",
    },
    {
      img: LemonDessert,
      title: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
    },
  ],
};

export const Testimonial = {
  title: "Testimonials",
  card: [
    {
      name: "Ronald",
      img: userImg1,
      description:
        "origin relationship avoid clothing greatest explore together better please sight distance blanket double discuss.",
      star: 4,
    },
    {
      name: "Jeffery",
      img: userImg2,
      description:
        "future closer few ten higher private period younger manufacturing claws pain purple teach machine jump rear.",
      star: 3,
    },
    {
      name: "Eva",
      img: userImg3,
      description:
        "sold skill trap or syllable triangle structure bigger function aside age perfect mountain fight tomorrow yet open.",
      star: 4,
    },
    {
      name: "Alice",
      img: userImg4,
      description:
        "lower bright military gun death directly drove eat captured tank wet choose equator aware calm shop.",
      star: 5,
    },
  ],
};

export const about = {
  title: "Little Lemon",
  highlight: "Chicago",
  description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. `,
  img: resturantChef,
  overlayImg: resturantPlace,
};

export const footer = {
  nav: {
    title: "Doormat Navigation",
  },
  contact: {
    title: "Contact",
    list: [
      {
        Icon: HiLocationMarker,
        name: "Addis Ababa, st.",
      },
      {
        Icon: BiSolidPhoneCall,
        name: "+251-9-20-36-92-62",
      },
      {
        Icon: MdEmail,
        name: "littleLemon@gmail.com",
      },
    ],
  },
  socialMediaLink: [
    {
      Icon: AiFillLinkedin,
      link: "",
    },
    {
      Icon: AiOutlineTwitter,
      link: "",
    },
    {
      Icon: BiLogoTelegram,
      link: "",
    },
    {
      Icon: TbBrandFacebookFilled,
      link: "",
    },
  ],
};

export const Reservation = {
  title: "Make a Reservation",
  highlight: "Your table",
  images: [
    greekSalad,
    LemonDessert,
    resturantChef,
    greekSalad,
    LemonDessert,
    resturantChef,
    greekSalad,
  ],
};

export const BookingForm = {};

export { HiOutlineMenuAlt3, GrFormClose, FaUserCircle };
