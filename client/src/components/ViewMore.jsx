import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ViewMore() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-4 bg-white " id="content2">
      <div className=" px-4">
        <div className="text-black font-bold mb-28 " data-aos="fade-down">
          <h1 className="text-red-600 text-center text-5xl mt-10">
            Importance of Anonymous Crime Reporting Using Blockchain
          </h1>
          <p className="max-w-7xl mx-auto text-lg py-5 " data-aos="flip-up">
            Our platform offers cutting-edge features to enable anonymous
            reporting of crimes using blockchain technology. Here are some of
            the key features:
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  Secure and Anonymous Reporting
                </h2>
                <p className="text-sm mt-auto">
                  Users can report crimes securely and anonymously, ensuring
                  their safety and privacy. The reporting process is encrypted
                  end-to-end, and no personally identifiable information is
                  collected from users. This ensures that whistleblowers can
                  safely report crimes without fear of retaliation.
                </p>
              </div>
            </div>

            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  Immutable Blockchain Records
                </h2>
                <p className="text-sm">
                  All reports are stored on a blockchain, providing an immutable
                  record of reported crimes that cannot be tampered with. This
                  ensures the integrity of the data and prevents any
                  unauthorized modifications to the reported incidents. Law
                  enforcement agencies and other authorized parties can trust
                  the accuracy of the information stored on the blockchain.
                </p>
              </div>
            </div>
            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  Decentralized Verification
                </h2>
                <p className="text-sm">
                  Reports are verified by a decentralized network of nodes,
                  ensuring the accuracy and reliability of the information. Each
                  report undergoes multiple layers of verification by
                  independent validators, reducing the risk of false or
                  misleading information. This decentralized approach enhances
                  the trustworthiness of the reported data and increases
                  transparency in the reporting process.
                </p>
              </div>
            </div>
            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  Smart Contract Execution
                </h2>
                <p className="text-sm">
                  Smart contracts are used to automate the reporting process and
                  ensure transparent and fair handling of reported incidents.
                  These self-executing contracts automatically enforce the terms
                  and conditions of the reporting platform, such as reward
                  distribution for valid reports and penalties for false
                  reporting. Smart contracts eliminate the need for
                  intermediaries and reduce the risk of human error or bias in
                  the reporting process.
                </p>
              </div>
            </div>
            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  User Privacy Protection
                </h2>
                <p className="text-sm">
                  User identities are kept confidential, and only authorized
                  parties have access to the reported information. We use
                  advanced encryption techniques to protect user data and ensure
                  that sensitive information remains secure. Our privacy-first
                  approach ensures that users can report crimes without
                  compromising their anonymity or personal safety.
                </p>
              </div>
            </div>
            <div className="m-2 flex items-start" data-aos="zoom-in">
              <img
                src="images/unnamed.png"
                alt="Logo"
                className="w-8  mr-2 rounded-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-2">
                  Community Engagement Tools
                </h2>
                <p className="text-sm">
                  Our platform includes features for community engagement, such
                  as forums and discussion boards, to foster collaboration in
                  crime prevention efforts. Users can interact with each other,
                  share information and resources, and coordinate action plans
                  to address emerging threats. Community engagement is essential
                  for building strong, resilient communities and creating a
                  safer environment for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMore;
