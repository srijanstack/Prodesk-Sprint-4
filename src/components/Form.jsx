import Input from "./Input";

function Form() {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col p-4 border border-gray-300 rounded-xl gap-3 w-fit bg-white"
      >
        <h1 className="text-xl font-semibold ml-8">Your Details</h1>
        <Input
          id="username"
          name={"Candidate's Name"}
          placeholder={"e.g. John Doe"}
        />
        <Input
          id="jobrole"
          name={"Job Role"}
          placeholder={"e.g. Full Stack Dev, Business Analyst"}
        />
        <Input
          id="tgtcomp"
          name={"Target Company"}
          placeholder={"e.g. Microsoft, Adobe, Google"}
        />
        <Input id="skills" name={"Skills"} placeholder={"e.g. =Javascript, React, Power BI"} />

        <hr className="text-gray-400 my-3" />

        <div className="w-full">
          <label
            htmlFor="resume-upload"
            className="flex flex-col items-center justify-center w-full h-30 border-2 border-dashed border-purple-300 rounded-2xl cursor-pointer bg-white"
          >
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="text-sm font-medium text-gray-700">
                Choose your file
              </p>

              <p className="text-xs text-gray-500 mt-1">
                PDF only • Max size 5MB
              </p>
            </div>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
            />
          </label>
        </div>
        <button
          type=""
          className="p-5 rounded-2xl text-white text-xl font-semibold bg-purple-500 w-full cursor-pointer transition duration-300 hover:scale-105 active:scale-95"
        >
          Generate
        </button>
      </form>
    </>
  );
}
export default Form;
