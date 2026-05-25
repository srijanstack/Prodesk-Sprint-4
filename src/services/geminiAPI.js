const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function generateCoverLetterForm(formData) {

    const prompt = `You are an expert career coach and professional writer.

Generate a **professional, concise, and compelling cover letter** in clean markdown format for the following candidate:

- **Candidate Name**: ${formData.candidateName}
- **Job Role**: ${formData.jobRole || "Not provided"}
- **Target Company**: ${formData.tgtComp || "Not provided"}
- **Key Skills/Experience**: ${formData.skills }

Requirements:
- Use proper paragraph structure
- Maximum 350-400 words (keep it concise and impactful)
- Professional yet enthusiastic tone
- Use markdown formatting (bold for emphasis where appropriate)
- Include a strong opening and closing
- Do NOT use code blocks or backticks
- Do NOT add any extra commentary outside the cover letter

Focus on how the candidate's skills align with the role and company.`;

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
        const data = await response.json();

        return data.candidates[0].content.parts[0].text;
    } catch (err) {
        console.error(err)
    }

}

export async function generateCoverLetterPdf(pdfData) {
    console.log("reached here api")
    const prompt = `You are an expert career coach and professional writer.

Generate a **professional, concise, and compelling cover letter** in clean markdown format for the following resume text:

- **Resume**: ${pdfData}

Requirements:
- Use proper paragraph structure
- Maximum 350-400 words (keep it concise and impactful)
- Professional yet enthusiastic tone
- Use markdown formatting (bold for emphasis where appropriate)
- Include a strong opening and closing
- Do NOT use code blocks or backticks
- Do NOT add any extra commentary outside the cover letter

Focus on how the candidate's skills align with the role and company.`;
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
        const data = await response.json();
        console.log("api data", data)
        return data.candidates[0].content.parts[0].text;
    } catch (err) {
        console.error(err)
    }

}