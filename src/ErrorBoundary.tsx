import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

// ErrorBoundary can ONLY be written in class component and not in a functional component
// The methods getDerivedStateFromError and componentDidCatch are class methods

class ErrorBoundary extends Component<{ Children: ReactElement }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Usually gets logged into an error service
    console.error("ErrorBoundary component has caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">Click here to return to the home page.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
