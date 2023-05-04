import { Component, Suspense } from 'solid-js';
import { ErrorBoundary, FileRoutes, Routes } from 'solid-start';
import { CircularProgress } from '@suid/material';

const App: Component = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Routes>
          <FileRoutes />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
