# RAG Chatbot Frontend

This directory contains the React frontend for the RAG Chatbot, integrated into the Docusaurus website.

## Setup

1.  **Dependencies**: Install Node.js dependencies:
    ```bash
    npm install
    ```

2.  **Run the application**:
    ```bash
    npm run dev
    ```

## Integration with Docusaurus

The chatbot widget (`Chatbot.jsx`) is integrated into `frontend/src/App.tsx`.
To embed the chatbot into your Docusaurus site, you would typically integrate this React application or the `Chatbot` component directly into a Docusaurus page or layout.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
```