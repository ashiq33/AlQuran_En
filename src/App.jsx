import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faQuran } from '@fortawesome/free-solid-svg-icons'; // Import icons
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/footer';
import './App.css';

function App() {
  const [surahs, setSurahs] = useState([]); // State for surahs
  const [selectedSurah, setSelectedSurah] = useState(null); // State for selected surah
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  // Fetch data from the static JSON file
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('/quran.json'); // Fetch JSON from public folder
        if (!response.ok) throw new Error('Failed to load surahs');
        const data = await response.json();
        setSurahs(data.data.surahs); // Set surahs from JSON file
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  // Handle click on a surah
  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          AL-Quran <FontAwesomeIcon icon={faQuran} />
        </h1>
        <ThemeToggle />
      </header>

      <div className="content">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {/* Surah List */}
        {!selectedSurah ? (
          <div className="surahs-list">
            {surahs.map((surah) => (
              <div
                key={surah.number}
                className="surah"
                onClick={() => handleSurahClick(surah)}
              >
                <h3>
                  {surah.name} ({surah.englishName})
                </h3>
              </div>
            ))}
          </div>
        ) : (
          // Surah Details
          <div className="verses-list">
            <h3>
              {selectedSurah.name} ({selectedSurah.englishName})
            </h3>
            <button
              className="icon-button"
              onClick={() => setSelectedSurah(null)}
            >
              <FontAwesomeIcon icon={faCircleLeft} />
            </button>
            {selectedSurah.ayahs.map((ayah) => (
              <div key={ayah.numberInSurah} className="ayah">
                <p>{ayah.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;

