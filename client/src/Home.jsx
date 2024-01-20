import "./Home.css";
import { Link as ScrollLink } from "react-scroll";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import UserComplaint from "./UserComplaint";
import ViewMore from "./components/ViewMore";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

const Home = () => {
  const status = useConnectionStatus();

  return (
    <div>
      {status === "connected" ? (
        <UserComplaint />
      ) : (
        <div className="uppercase  ">
          <Navbar />
          <div className="w-full text-center text-red-600 mt-56  ">
            <h1 className="text-4xl font-bold">
              Complaint Registration Website
            </h1>
            <p className="mx-auto font-medium leading-loose mt-5 text-white">
              Efficient and user-friendly platform to register and manage
              complaints
            </p>
            <div className="mt-10">
              <ConnectWallet />
            </div>
          </div>

          <div className="flex justify-center mt-60 mb-7">
            <div className="bg-neutral-400 rounded-full py-2 px-3 text-xs cursor-pointer uppercase tracking-wider transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-200">
              <ScrollLink
                to="content2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                view more
              </ScrollLink>
            </div>
          </div>
          <ViewMore />
          <AboutUs />
        </div>
      )}
    </div>
  );
};

export default Home;
