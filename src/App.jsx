import { useState } from 'react';
import { ResumeProvider } from './contexts/ResumeContext';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import ExportModal from './components/ExportModal';
import './App.css';

function App() {
  const [showExport, setShowExport] = useState(false);

  return (
    <ResumeProvider>
      <div className="app-container">
        <Sidebar onExport={() => setShowExport(true)} />
        <main className="main-content">
          <Preview />
        </main>
        {showExport && <ExportModal onClose={() => setShowExport(false)} />}
      </div>
    </ResumeProvider>
  );
}

export default App;
