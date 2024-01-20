import React from "react";
import Navbar from "./Navbar";

const Admin = () => {
  return (
    <div>
      <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
        {/* <div className="bg-cover bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen"> */}
        <Navbar />
        <nav className="p-4">
          <div className="container mx-auto flex justify-center items-center">
            {/* Centered h1 tag */}
            <h1 className="text-red-500 text-5xl font-bold uppercase">
              Officer Dashboard
            </h1>
          </div>
        </nav>
        <div className="container mx-auto mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>

          {/* Cards */}
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="public\images\unnamed.png"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {/* <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">BMW X4</h1>
                    <p class="text-lg">5 seater SUV</p>
                    <p class="text-base">
                      3L petrol engine along with automatic transmission{" "}
                    </p>
                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="public\images\unnamed.png"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {/* <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Mercedes EQE</h1>
                    <p class="text-lg">Electric SUV</p>
                    <p class="text-base">
                      power of 402.3bhp and 858nm of torque.
                    </p>
                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="public\images\unnamed.png"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {/* <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">BMW iX1</h1>
                    <p class="text-lg"> 5 seater SUV</p>
                    <p class="text-base">
                      {" "}
                      power of 308.43bhp and 494nm of torque
                    </p>
                    <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Read More
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
