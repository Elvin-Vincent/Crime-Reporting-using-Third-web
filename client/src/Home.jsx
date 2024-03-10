import "./Home.css";
import { Link as ScrollLink } from "react-scroll";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import Menu from "./UserMenu";
import ViewMore from "./components/ViewMore";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Together } from "./components/Together";
import { useDisconnect } from "@thirdweb-dev/react";

const Home = () => {
  const status = useConnectionStatus();

  return (
    <div className=" bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen ">
      <div className="backdrop-blur-sm bg-white/10">
        {status === "connected" ? (
          <Menu />
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

            <div className="flex justify-center mt-72 mb-20 ">
              <div className="bg-neutral-400 text-black rounded-full py-2 px-3 text-xs cursor-pointer uppercase tracking-wider transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-200">
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
            <Together />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
