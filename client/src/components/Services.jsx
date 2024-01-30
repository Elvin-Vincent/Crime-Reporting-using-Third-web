import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
      <Navbar />
      <div className="text-gray-600 font-bold grid">
        <main className="px-2 sm:px-4 md:px-8 lg:px-16 py-6 md:col-span-5">
          <div>
            {/*card*/}
            <div className="mt-14  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
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
                {/* <div class=" flex items-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
                  <svg
                    class="mr-2 w-5 inline-block "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>96.20 Lakh</span>
                </div> */}
              </div>
              {/* Card 2 */}
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

              {/* New Card 5 */}
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
              {/* New Card 6 */}
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
              {/* New Card 7 */}
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
              {/* New Card 8 */}
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
            </div>

            <div className="flex justify-center mt-7">
              <div className="bg-gray-100 rounded-full py-2 px-3 text-xs cursor-pointer uppercase tracking-wider transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-200 ">
                load more
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
