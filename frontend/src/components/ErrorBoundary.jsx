import React from 'react';
import { Button } from './ui/button';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Plastocore render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-[60vh] flex items-center justify-center bg-white px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-brand-blue mb-3">Something went wrong</h1>
            <p className="text-brand-grey mb-6">Please refresh the page to continue browsing Plastocore.</p>
            <Button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 font-semibold"
            >
              Refresh Page
            </Button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
