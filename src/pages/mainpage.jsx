import NavBar from "../components/navbar";
import { FaColumns, FaDev, FaMobileAlt, FaLanguage } from "react-icons/fa";
import Card from "../components/ui-card";

const data = [
  { icon: <FaDev size={30} />, title: "Programming" },
  { icon: <FaColumns size={30} />, title: "Graphic Designer" },
  { icon: <FaMobileAlt size={30} />, title: "Digital Marketing" },
  { icon: <FaLanguage size={30} />, title: "Translator or Writer" }
]
export default function MainPage() {
  return (<div>
    <NavBar />
    <div className="container mx-auto m-5 flex flex-col justify-center  items-center bg-sky-50 h-80">
      <p className="text-2xl font-mono m-10 text-center shadow-gray-400">Scale your professional <br /> workforce with freelancers</p>
      <input className="bg-sky-200 p-5 rounded-lg flex w-[60%] h-10" placeholder="Search"></input>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
      {data.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
        />
      ))}
    </div>
  </div>
  );
}
