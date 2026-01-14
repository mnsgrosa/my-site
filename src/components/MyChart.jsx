import React, { useState } from 'react';

// In a real app, you'd import a charting library here.
// e.g., import { Bar } from 'react-chartjs-2';

export default function MyChart() {
  // Simple interactive state
  const [count, setCount] = useState(0);

  console.log('MyChart component script is running in the browser!');

  return (
    <div style={{ padding: '2rem', border: '2px dashed #007bff', textAlign: 'center' }}>
      <h2>My Interactive Chart Component</h2>
      <p>This is a React component rendered by Astro.</p>
      <p>The JavaScript for this component was not loaded until you saw it.</p>
      
      <div style={{ marginTop: '1rem' }}>
        <p>Current count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}
