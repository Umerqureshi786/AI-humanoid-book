import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('full-book'); // 'full-book' or 'selected-text'
  const [selectedText, setSelectedText] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleTextSelection = () => {
      const selection = window.getSelection().toString().trim();
      if (selection && mode === 'selected-text') {
        setSelectedText(selection);
      }
    };

    document.addEventListener('mouseup', handleTextSelection);
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, [mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const response = await fetch('http://localhost:8000/query', { // Assuming backend runs on 8000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query_text: query, mode, selected_text: selectedText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>RAG Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="query" style={{ display: 'block', marginBottom: '5px' }}>Your Question:</label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            disabled={loading}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Query Mode:</label>
          <label style={{ marginRight: '15px' }}>
            <input
              type="radio"
              value="full-book"
              checked={mode === 'full-book'}
              onChange={() => setMode('full-book')}
              disabled={loading}
            /> Full Book
          </label>
          <label>
            <input
              type="radio"
              value="selected-text"
              checked={mode === 'selected-text'}
              onChange={() => setMode('selected-text')}
              disabled={loading}
            /> Selected Text
          </label>
        </div>

        {mode === 'selected-text' && (
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="selectedText" style={{ display: 'block', marginBottom: '5px' }}>Selected Text:</label>
            <textarea
              id="selectedText"
              value={selectedText}
              onChange={(e) => setSelectedText(e.target.value)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '80px' }}
              disabled={loading}
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Ask Chatbot'}
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '15px' }}>Error: {error}</p>}

      {answer && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <h3>Answer:</h3>
          <p>{answer.answer_text}</p>
          {answer.citations && answer.citations.length > 0 && (
            <div>
              <h4>Citations:</h4>
              <ul>
                {answer.citations.map((citation, index) => (
                  <li key={index}>{citation}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
