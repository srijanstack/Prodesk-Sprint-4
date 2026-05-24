import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-4">
        <Loader2 className="animate-spin text-purple-500" size={64} />
      </div>
    </>
  );
}

export default Loader;
