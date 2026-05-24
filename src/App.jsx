import Header from "./components/Header";
import Form from "./components/Form";
import Letter from "./components/Letter";
import { generateCoverLetter } from "./services/geminiAPI";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    try {
      setLoading(true);
      const data = await generateCoverLetter(formData);
      if (!data) return console.log("no data");
      setLetter(data);
    } catch (err) {
      setLoading(true);
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className="px-10 py-8 gap-6 flex flex-col bg-purple-50">
        <section>
          <h1 className="text-3xl font-bold ">
            Create a Professional Cover Letter
          </h1>
          <span className="text-3xl font-bold text-purple-500">
            with the Power of AI
          </span>
          <br />
          <span>powered by gemini</span>
        </section>
        <div className="flex gap-3  items-stretch min-h-150">
          <Form handleSubmit={handleSubmit} />
          <Letter loading={loading} letter={letter} error={error} />
        </div>
      </div>
    </>
  );
}

export default App;
