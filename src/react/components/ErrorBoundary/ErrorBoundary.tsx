import { Component, ErrorInfo, ReactNode } from "react";

interface IErrorBoundaryState {
    hasError: boolean;
}

interface IErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
      console.error(error, info.componentStack);
    }
  
    render() {
        if (this.state.hasError) {
            console.log('ErrorBoundary: hasError');
        return this.props.fallback;
      }
  
      return this.props.children;
    }
}

export default ErrorBoundary;
