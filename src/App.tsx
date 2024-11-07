import React, { useState } from 'react';
import { Lock, Unlock, ExternalLink, Github } from 'lucide-react';
import Login from './components/Login';
import Gallery from './components/Gallery';
import { projects } from './data/projects';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {!isAuthenticated ? (
        <Login onAuthenticate={setIsAuthenticated} />
      ) : (
        <Gallery projects={projects} />
      )}
      
      <footer className="fixed bottom-0 w-full bg-slate-900/50 backdrop-blur-sm p-4 text-center text-sm text-slate-400">
        <div className="flex items-center justify-center gap-2">
          {isAuthenticated ? (
            <Unlock className="h-4 w-4" />
          ) : (
            <Lock className="h-4 w-4" />
          )}
          <span>MPA SDP Gallery © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;