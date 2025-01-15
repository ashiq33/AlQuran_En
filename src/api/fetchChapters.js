// src/api/fetchQuran.js
export const fetchQuran = async () => {
  try {
    const response = await fetch('/quran.json'); // Fetch from public folder
    if (!response.ok) throw new Error('Failed to fetch Quran data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
