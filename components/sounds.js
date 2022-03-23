import {
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCoffee,
  FiMoon,
  FiTwitter,
} from "react-icons/fi";
import {
  RiCloudWindyLine,
  RiPlantLine,
  RiSeedlingLine,
  RiShip2Line,
} from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { BiFootball, BiWalk} from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";
import { BsBriefcase, BsClock } from "react-icons/bs";

const sounds = [
  {
    name: "rain",
    icon: <FiCloudRain className="text-7xl" />,
  },
  {
    name: "lightning",
    icon: <FiCloudLightning className="text-7xl" />,
  },
  {
    name: "snow",
    icon: <FiCloudSnow className="text-7xl" />,
  },
  {
    name: "campfire",
    icon: <AiOutlineFire className="text-7xl" />,
  },
  {
    name: "forest",
    icon: <RiPlantLine className="text-7xl" />,
  },
  {
    name: "birds",
    icon: <FiTwitter className="text-7xl" />,
  },
  {
    name: "rowing",
    icon: <RiShip2Line className="text-7xl" />,
  },
  {
    name: "wind",
    icon: <RiCloudWindyLine className="text-7xl" />,
  },
  {
    name: "leaves",
    icon: <RiSeedlingLine className="text-7xl" />,
  },
  {
    name: "cafe",
    icon: <FiCoffee className="text-7xl" />,
  },
  {
    name: "farm",
    icon: <RiSeedlingLine className="text-7xl" />,
  },
  {
    name: "keyboard",
    icon: <FaRegKeyboard className="text-7xl" />,
  },
  {
    name: "night",
    icon: <FiMoon className="text-7xl" />,
  },
  {
    name: "stadium",
    icon: <BiFootball className="text-7xl" />,
  },
  {
    name: "steps",
    icon: <BiWalk className="text-7xl" />,
  },
  {
    name: "clock",
    icon: <BsClock className="text-7xl" />,
  },
  {
    name: "office",
    icon: <BsBriefcase className="text-7xl" />,
  },
];

export default sounds;
