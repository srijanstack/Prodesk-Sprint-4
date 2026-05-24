export async function generateCoverLetter(formData) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const prompt = `Generate a professional cover letter in clean markdown format.
                    Requirements:
                    - Use proper paragraphs
                    - Use markdown headings if needed
                    - Keep tone professional
                    - Do NOT use code blocks.
                Candidate Name: ${formData.candidateName}
                Job Role: ${formData.jobRole}
                Target Company: ${formData.targetCompany}
                Skills: ${formData.skills}
                Keep it professional and concise.`;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,
                                },
                            ],
                        },
                    ],
                }),
            }
        );
        console.log("api data")
        const data = await response.json();

        return data.candidates[0].content.parts[0].text;
    } catch (err) {
        console.error(err)
    }

}