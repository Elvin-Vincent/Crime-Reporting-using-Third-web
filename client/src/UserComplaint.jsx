import { useDisconnect } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const UserComplaint = () => {
  const disconnect = useDisconnect();

  return (
    <div className="bg-cover  bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% text-white min-h-screen">
      <h1 className="text-4xl font-bold ml-6  text-zinc-800 py-3 uppercase">
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
                className="block mb-2 text-sm font-medium text-gray-800"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon
                  icon={faCamera}
                  className="mr-2 text-gray-800"
                />
                Photo
              </label>
              <input
                type="file"
                id="photo"
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
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-32 mr-10"
            >
              Submit Report
            </button>
            <button
              className="bg-red-500 text-white font-medium py-3 ml-36 px-6 mt-4 rounded-full hover:bg-red-600"
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
