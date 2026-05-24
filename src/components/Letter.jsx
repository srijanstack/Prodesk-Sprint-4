import Loader from "./Loading";
import Markdown from "react-markdown";
import { Ban } from "lucide-react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

function Letter({ loading, letter, error }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    await navigator.clipboard.writeText(letter);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <>
      <div className="flex flex-col w-full h-160 border rounded-xl bg-white border-gray-300 shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-300 shrink-0">
          <h1 className="text-xl font-medium">Generated Cover Letter</h1>

          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg  text-purple-500 font-medium text-sm hover:opacity-90 transition"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="h-full w-full flex items-center justify-center p-4">
            <Ban size={80} className="text-red-400" />
            <p className="text-3xl font-medium text-red-400">{error}</p>
          </div>
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
