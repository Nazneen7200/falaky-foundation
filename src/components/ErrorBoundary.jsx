import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Falaky Foundation ErrorBoundary caught an exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'var(--color-ivory)'
          }}
        >
          <div
            className="editorial-card-gold"
            style={{
              maxWidth: '620px',
              width: '100%',
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: '#FFFFFF'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#FAF3E3',
                border: '1.5px solid #C6A45B',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <AlertCircle size={28} color="#8F7234" />
            </div>

            <h2 style={{ fontSize: '1.65rem', color: '#103C32', marginBottom: '0.75rem' }}>
              Notice: Page Rendering Interrupted
            </h2>

            <p style={{ color: 'var(--color-charcoal-light)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We encountered a temporary issue while displaying this section. The navigation header and site links remain active. You can retry rendering or return to the Home page.
            </p>

            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <details
                style={{
                  textAlign: 'left',
                  backgroundColor: '#FAF8F3',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginBottom: '1.5rem',
                  fontSize: '0.82rem',
                  color: '#8F3434',
                  overflowX: 'auto',
                  border: '1px solid #EADBBE'
                }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Diagnostic Details</summary>
                <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReset}
                className="btn btn-outline-dark"
                style={{ fontSize: '0.86rem' }}
              >
                <RefreshCw size={15} /> Try Again
              </button>
              <Link
                to="/"
                onClick={this.handleReset}
                className="btn btn-primary"
                style={{ fontSize: '0.86rem' }}
              >
                <Home size={15} /> Return to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
