import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faQuran } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { fetchSurahs } from './api/fetchChapters';
import { setSelectedSurah } from './redux/quranSlice';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import Footer from './components/footer';

function App() {
  const dispatch = useDispatch();
  const { surahs, selectedSurah, loading, error } = useSelector((state) => state.quran);

  useEffect(() => {
    dispatch(fetchSurahs());
  }, [dispatch]);

  const handleSurahClick = (surah) => {
    dispatch(setSelectedSurah(surah));
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
          <div className="verses-list">
            <h3>
              {selectedSurah.name} ({selectedSurah.englishName})
            </h3>
            <button className="icon-button" onClick={() => dispatch(setSelectedSurah(null))}>
              <FontAwesomeIcon icon={faCircleLeft} /> 
            </button>
            {selectedSurah.ayahs.map((ayah) => (
              <div key={ayah.numberInSurah} className="ayah">
                <p>{ayah.text}</p>
                
              </div>
            ))}
          </div>
        )}
          <Footer></Footer>
      </div>
    </div>
  
  );
}

export default App;
