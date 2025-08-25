import { useState } from 'react';
import Login from './Login';
import QRCamera from './QRCamera';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full py-6 bg-blue-700 shadow">
        <h1 className="text-3xl font-bold text-white text-center tracking-wide">techEEks</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <QRCamera />
      </main>
    </div>
  );
}

export default App;
