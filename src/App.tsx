import React from 'react';
import Accueil from './Pages/Accueil';
import { ThemeProvider } from './components/ThemeProvider';

const App: React.FC = () => {

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Accueil/>
      </ThemeProvider>
    </div>
  );
};

export default App;
