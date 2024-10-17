import React, { useState, useEffect } from 'react';

interface Joke {
  id: string;
  value: string;
}

const ChuckNorrisJokes: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const fetchJokes = (category: string) => {
    setLoading(true);
    fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.result); // Assuming API returns jokes in 'result' array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
        setLoading(false);
      });
  };

  return (
    <div className="jokes-container">
      <h1>Chuck Norris Jokes</h1>
      <label htmlFor="category-select">Select a category:</label>
      <select
        id="category-select"
        className="category-select"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          fetchJokes(e.target.value);
        }}
      >
        <option value="">--Choose a category--</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {loading ? (
        <p className="loading-message">Loading jokes...</p>
      ) : (
        <ul className="jokes-list">
          {jokes.map((joke) => (
            <li key={joke.id} className="joke-item">{joke.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChuckNorrisJokes;
