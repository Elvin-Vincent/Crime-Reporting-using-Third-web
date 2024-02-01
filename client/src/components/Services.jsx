import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from "./Navbar";
import { Modal, Space } from "antd";

const Services = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div class="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
      <Navbar />
      <div class="relative">
        <img
          class="w-full h-96 rounded-t-xl object-cover shadow-xl shadow-black/40"
          src=""
          alt=""
        />
        <div class="absolute inset-0 bg-black opacity-25 rounded-t-xl"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold ">
          OUR SERVICES
          <p class="text-center text-lg mt-4">
            We offer a social issues reporting platform utilizing blockchain
            technology. Through our secure and transparent system, users can
            report various social issues anonymously and contribute to creating
            positive change in their communities.
          </p>
        </div>
      </div>

      <div className="text-gray-600 font-bold grid">
        <main className="px-2 sm:px-4 md:px-8 lg:px-16 py-6 md:col-span-5 ">
          {/*card*/}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="group h-96 w-full sm:w-80 [perspective:1000px]">
              {/* Card Content */}
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="/images/drug.jpeg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <p class="text-lg mt-3">
                      Blockchain enables secure, transparent reporting of
                      illegal drug trafficking, enhancing accountability and
                      aiding efficient enforcement efforts.
                    </p>

                    <>
                      <Space>
                        <button
                          class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 "
                          type="primary"
                          onClick={showModal}
                        >
                          Read More
                        </button>
                      </Space>
                      <Modal
                        open={open}
                        title={
                          <div className="flex items-center">
                            <img
                              src="/images/bgimg.jpg"
                              alt="Image"
                              className="mr-2 w-24 h-24"
                            />{" "}
                            <span className="text-red-500 text-lg font-bold italic">
                              Illegal drug trafficking Reporting
                            </span>
                          </div>
                        }
                        onOk={handleOk}
                        onCancel={handleCancel}
                        className="w-3/4 max-w-lg"
                        footer={() => (
                          <>
                            {/* <ButtonGroup /> */}
                            <ConnectWallet />
                          </>
                        )}
                      >
                        <p>
                          Reporting illegal drug trafficking is vital for
                          community safety. Your vigilance can prevent
                          drug-related crimes and help dismantle illicit
                          networks. By reporting suspicious activity, you
                          contribute to disrupting drug supply chains and
                          protecting vulnerable individuals. Together, we can
                          make our communities safer and healthier.
                        </p>
                      </Modal>
                    </>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 uppercase">
                <span className="text-red-500 text-lg font-bold italic text-center">
                  Illegal drug trafficking Reporting
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group h-96 w-full sm:w-80">
              {/* Card Content */}
              <div class="relative h-full w-full rounded-xl shadow-xl">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="/img/bmw-x4.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <p class="text-lg mt-3 font-bold">
                      Blockchain enables secure, transparent reporting of
                      illegal drug trafficking, enhancing accountability and
                      aiding efficient enforcement efforts.
                    </p>

                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group h-96 w-full sm:w-80 [perspective:1000px]">
              {/* Card Content */}
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="/img/bmw-x4.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">BMW X4</h1>
                    <p class="text-lg">5 seater SUV</p>
                    <p class="text-base">
                      3L petrol engine along with automatic transmission{" "}
                    </p>
                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group h-96 w-full sm:w-80 [perspective:1000px]">
              {/* Card Content */}
              <div class="relative  h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="/img/bmw-x4.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">BMW X4</h1>
                    <p class="text-lg">5 seater SUV</p>
                    <p class="text-base">
                      3L petrol engine along with automatic transmission{" "}
                    </p>
                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-7">
            <div className="bg-gray-100 rounded-full py-2 px-3 text-xs cursor-pointer uppercase tracking-wider transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-200 ">
              load more
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
