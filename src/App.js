import ErrorBoundary from 'Components/ErrorBoundary';
import NotFoundErrorPage from 'Components/NotFoundErrorPage';
import Navigation from 'Components/Navigation';

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <Navigation />
        <div className="content-wrapper">
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
      </div>
    </ErrorBoundary>
  );
}
