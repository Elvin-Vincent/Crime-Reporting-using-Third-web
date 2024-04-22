import "./Home.css";
import { Link as ScrollLink } from "react-scroll";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import Menu from "./components/UserMenu";
import ViewMore from "./components/ViewMore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Together } from "./components/Together";
import { useDisconnect } from "@thirdweb-dev/react";

const Home = () => {
  const status = useConnectionStatus();
  const sharedClasses = {
    greenButton:
      "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
    textWhite: "text-white",
    textGreen: "text-green-400",
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {status === "connected" ? (
        <Menu />
      ) : (
        <>
          <Navbar />
          <main className="flex-grow mt-10  p-16 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h2
                  style={{ lineHeight: "1.3" }}
                  className="font-bold text-5xl mb-10 text-gray-800 max-w-md"
                >
                  <span className="text-green-400">Empowering</span> You to
                  Voice Your <span className="text-green-400">Concerns</span>
                </h2>

                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  At{" "}
                  <span className="text-green-500 font-bold">SafeWhistle</span>,
                  we believe that every voice matters. We understand that
                  individuals encounter various issues and concerns in their
                  daily lives, and we're here to provide a platform for you to
                  express and address those concerns.
                </p>
                <div className="mt-8">
                  <ConnectWallet className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="">
                  <img class="group" src="/images/group_x2.svg" />
                </div>
              </div>
            </div>
          </main>
          <div className="flex justify-center mt-8 mb-12 ">
            <div className="text-gray-700 font-semibold text-lg border-b-2 border-transparent hover:border-gray-700 transition duration-300 ease-in-out cursor-pointer">
              <ScrollLink
                to="content2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-gray-800"
              >
                View More
              </ScrollLink>
            </div>
          </div>
          <ViewMore />
          <Together />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
