import Input from "./Input";
import { useState } from "react";
import { extractTextFromPDF } from "../utils/extractTextFromPDF";

function Form({ handleFormSubmit, handlePdfSubmit }) {
  const [formData, setFormData] = useState({
    candidateName: "",
    jobRole: "",
    tgtComp: "",
    skills: "",
  });

  const [resumeFile, setResumeFile] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  function handleFileChange(e) {
    setResumeFile(e.target.files[0]);
  }

  async function handleClick(e) {
    e.preventDefault();

    if (resumeFile) {
      const data = await extractTextFromPDF(resumeFile);
      handlePdfSubmit(data);
      return;
    }
    if (!formData.candidateName || !formData.skills) {
      alert("Fill the form or upload resume");

      return;
    }
    handleFormSubmit(formData);
  }

  return (
    <>
      <form
        onSubmit={(e) => handleClick(e)}
        className="flex flex-col p-4 border border-gray-300 rounded-xl gap-3 w-fit bg-white shadow-lg max-h-160"
      >
        <h1 className="text-xl font-semibold ml-8">Your Details</h1>
        <Input
          id="candidateName"
          name={"Candidate's Name"}
          placeholder={"e.g. John Doe"}
          value={formData.candidateName}
          onChange={handleChange}
          required={!resumeFile}
        />
        <Input
          id="skills"
          name={"Skills"}
          value={formData.skills}
          placeholder={"e.g. Javascript, React, Power BI"}
          onChange={handleChange}
          required={!resumeFile}
        />
        <Input
          id="jobRole"
          name={"Job Role (optional)"}
          placeholder={"e.g. Full Stack Dev, Business Analyst"}
          value={formData.jobRole}
          onChange={handleChange}
        />
        <Input
          id="tgtComp"
          name={"Target Company (optional)"}
          value={formData.tgtComp}
          placeholder={"e.g. Microsoft, Adobe, Google"}
          onChange={handleChange}
        />

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
              onChange={handleFileChange}
            />
            <p className="text-sm text-purple-500 mt-2">
              {resumeFile ? resumeFile.name : ""}
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="p-5 rounded-2xl text-white text-xl font-semibold bg-purple-500 w-full cursor-pointer transition duration-300 hover:scale-105 active:scale-95"
        >
          Generate
        </button>
      </form>
    </>
  );
}
export default Form;
