import Header from "./components/Header";
import Form from "./components/Form";
import Letter from "./components/Letter";
import { generateCoverLetter } from "./services/geminiAPI";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState("");

  async function handleSubmit(formData) {
    try {
      setLoading(true);
      // const data = await generateCoverLetter(formData);
      // if (!data) console.log("no data");
      let data;

      setTimeout(() => {
        data = `[Current Date]

Hiring Manager
[Target Company Name]
[Company Address, if known, or "Remote Position"]

Dear Hiring Manager,

I am writing to express my enthusiastic interest in the Full Stack Developer position, which I discovered on [Platform where you saw the advertisement, e.g., "LinkedIn" or "your company website"]. With a robust background in both front-end and back-end development, I am confident that my skills and experience align perfectly with your requirements and will enable me to make significant contributions to your team.

My expertise includes proficiency across the MERN (MongoDB, Express.js, React, Node.js) and PERN (PostgreSQL, Express.js, React, Node.js) stacks, providing me with a comprehensive skill set for building scalable and efficient web applications. I have extensive experience in designing and implementing RESTful APIs, managing databases, and crafting responsive, user-friendly interfaces. My development philosophy prioritizes clean code, robust testing, and delivering high-quality, maintainable solutions.

I am particularly drawn to [Target Company Name, if known, or "innovative companies"] and its [mention a specific aspect, e.g., "commitment to technological excellence" or "impactful projects"]. I am eager to apply my technical abilities to contribute to challenging projects and collaborate with a dynamic and forward-thinking team. My passion for continuous learning and adapting to new technologies would allow me to quickly integrate and add value.

Thank you for your time and consideration. My resume, which I have attached for your review, further details my qualifications and accomplishments. I am keen to discuss how my MERN/PERN stack expertise and full-stack development experience can benefit your organization. I look forward to hearing from you soon.

Sincere Dear Hiring Manager,

I am writing to express my enthusiastic interest in the Full Stack Developer position, which I discovered on [Platform where you saw the advertisement, e.g., "LinkedIn" or "your company website"]. With a robust background in both front-end and back-end development, I am confident that my skills and experience align perfectly with your requirements and will enable me to make significant contributions to your team.

My expertise includes proficiency across the MERN (MongoDB, Express.js, React, Node.js) and PERN (PostgreSQL, Express.js, React, Node.js) stacks, providing me with a comprehensive skill set for building scalable and efficient web applications. I have extensive experience in designing and implementing RESTful APIs, managing databases, and crafting responsive, user-friendly interfaces. My development philosophy prioritizes clean code, robust testing, and delivering high-quality, maintainable solutions.

I am particularly drawn to [Target Company Name, if known, or "innovative companies"] and its [mention a specific aspect, e.g., "commitment to technological excellence" or "impactful projects"]. I am eager to apply my technical abilities to contribute to challenging projects and collaborate with a dynamic and forward-thinking team. My passion for continuous learning and adapting to new technologies would allow me to quickly integrate and add value.

Thank you for your time and consideration. My resume, which I have attached for your review, further details my qualifications and accomplishments. I am keen to discuss how my MERN/PERN stack expertise and full-stack development experience can benefit your organization. I look forward to hearing from you soon.

Sincer`;
        console.log("data called");

        setLetter(data);
      }, 3 * 1000);
    } catch (err) {
      setLoading(true);
      console.error(err);
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
          <Letter loading={loading} letter={letter} />
        </div>
      </div>
    </>
  );
}

export default App;
