import ErrorBoundary from 'Components/ErrorBoundary';
import NotFoundErrorPage from 'Components/NotFoundErrorPage';

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
      </div>
    </ErrorBoundary>
  );
}
