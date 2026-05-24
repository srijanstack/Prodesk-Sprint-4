import Loader from "./Loading";
import Markdown from "react-markdown";

function Letter({ loading, letter }) {
  return (
    <>
      <div className="flex flex-col w-full h-160 border rounded-xl bg-white border-gray-300 shadow-xl">
        <div className="h-1/10 p-10 border-b w-full border-gray-300">
          <h1 className="text-2xl font-medium">Generated Cover letter</h1>
        </div>
        {loading ? (
          <Loader />
        ) : letter ? (
          <div className="text-lg h-full w-full p-4 overflow-auto text-gray-700">
          
            <Markdown>{letter}</Markdown>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center p-4">
            <p className="text-2xl text-gray-500">No Content Here</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Letter;
