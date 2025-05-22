// src/api/geminiApi.ts
export const generateGeminiContent = async (text: string) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text }],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    console.log(apiKey);

    throw new Error(error.error.message);
    
  }

  const result = await response.json();
  return result;
};
