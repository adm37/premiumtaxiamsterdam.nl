// Gemini service for taxi assistant
export const getTaxiAssistantResponse = async (prompt: string, history: any[]) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        history
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error getting taxi assistant response:", error);
    return "Sorry, ik heb momenteel een technische storing. Je kunt ons altijd bereiken op +31 6 38 35 65 69 voor direct contact!";
  }
};
