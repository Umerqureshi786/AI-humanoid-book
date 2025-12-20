import React, { useState } from 'react';
import Chatbot from '@site/src/components/Chatbot';

// Swizzled Root component to add a global chatbot widget
export default function Root({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
        {isOpen && (
          <div style={{
            marginBottom: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '8px',
            maxHeight: '80vh',
            overflowY: 'auto',
            width: '400px',
            maxWidth: '90vw',
            border: '1px solid #ddd'
          }}>
            {/* 
              The Chatbot component has its own styling (maxWidth: 600px), 
              but constrained by this parent div. 
            */}
            <Chatbot />
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          {isOpen ? '✕ Close' : '💬 Chat with Book'}
        </button>
      </div>
    </>
  );
}
