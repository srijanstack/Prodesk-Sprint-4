import Header from "./components/Header";
import Form from "./components/Form";
import Letter from "./components/Letter";

function App() {
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
          <Form />
          <Letter />
        </div>
      </div>
    </>
  );
}

export default App;
