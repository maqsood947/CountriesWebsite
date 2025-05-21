// src/api/geminiApi.ts
export const generateGeminiContent = async (text: string) => {
  const apiKey = "AIzaSyCiAMwiL6U6BprgTZkSXVFsfwUCcD5yylM";

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
    throw new Error(error.error.message);
  }

  const result = await response.json();
  return result;
};
