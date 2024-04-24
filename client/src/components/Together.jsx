import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Together = () => {
  useEffect(() => {
    const scrollHandler = () => {
      let image = document.getElementById("rotatingImage");
      image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center pb-10 md:pb-40 ">
      <div className="md:w-1/3 flex justify-center">
        <img
          id="rotatingImage"
          src="images/people3.png"
          alt="people"
          className="max-w-xs md:max-w-none"
        />
      </div>
      <div className="md:w-1/2 md:ml-44">
        <h1
          className="text-3xl font-bold mb-2 text-black mt-10 text-center md:text-left text-green-400"
          data-aos="zoom-in"
        >
          TOGETHER WE MAKE OUR WORLD SECURE
        </h1>
        <p
          className="text-black text-sm font-bold mt-4 md:mt-20"
          data-aos="fade-left"
        >
          Public awareness and support for reporting crimes on a website
          utilizing blockchain technology are crucial steps towards creating a
          safer world to live in. Blockchain, known for its immutable and
          transparent nature, offers an innovative solution to enhance security
          and trust in crime reporting platforms. By leveraging blockchain,
          reported incidents can be securely recorded, timestamped, and stored
          in a decentralized manner, ensuring data integrity and preventing
          tampering or manipulation. Moreover, public awareness campaigns can
          educate individuals about the benefits of reporting crimes through
          such platforms, emphasizing the role of community involvement in
          combating criminal activities. The transparency afforded by blockchain
          technology ensures that every reported incident is visible to all
          relevant parties, fostering a sense of accountability and trust in the
          crime reporting process. Blockchain's decentralized architecture
          reduces the risk of data breaches and manipulation, providing a robust
          framework for maintaining the confidentiality and integrity of
          sensitive information shared on crime reporting platforms. With
          increased public participation and support, these blockchain-based
          crime reporting websites can become powerful tools for law enforcement
          agencies, enabling quicker response times, more efficient
          investigations, and ultimately contributing to the overall safety and
          well-being of society.
        </p>
      </div>
    </div>
  );
};
