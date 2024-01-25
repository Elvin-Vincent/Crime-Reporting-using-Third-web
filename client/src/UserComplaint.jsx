import { useDisconnect } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const UserComplaint = () => {
  const disconnect = useDisconnect();

  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% text-white min-h-screen">
      <h1 className="text-4xl font-bold ml-6 text-zinc-800 py-3 uppercase">
        Safe Whistle
      </h1>
      <div className="flex items-center justify-center h-full">
        <div className="border-2 border-neutral-100 p-6 rounded-lg shadow-2xl w-full max-w-md mt-32 bg-white dark:bg-transparent">
          <form>
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4 text-center text-red-800 uppercase">
                Complaint Registration
              </h1>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-800 flex items-center"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon
                  icon={faCamera}
                  className="mr-2 text-gray-800"
                />
                Upload a Photo
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-transparent dark:text-white dark:border-white dark:bg-transparent focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Please upload a photo of the crime scene"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-gray-800"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Details
              </label>
              <textarea
                id="details"
                className="block w-full h-20 px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-white dark:text-white dark:border-white dark:bg-transparent focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {/* Location */}
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-800"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-transparent dark:text-white dark:border-white dark:bg-transparent focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter location"
                />
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-32 mr-10 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Report
            </button>
            <button
              className="bg-red-500 text-white font-medium py-3 ml-36 px-6 mt-4 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={disconnect}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComplaint;
