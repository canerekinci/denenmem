import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../../constants';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary Component - Prevents app crashes and provides user-friendly error handling
 * Core safety feature for KIDFLIX AI platform stability
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for analytics and debugging
    console.error('KIDFLIX AI Error Boundary caught an error:', error, errorInfo);
    
    // In production, send error to analytics service
    if (__DEV__) {
      console.warn('Error details:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default kid-friendly error UI
      return (
        <View style={styles.container}>
          <View style={styles.errorCard}>
            <Text style={styles.emoji}>🤖</Text>
            <Text style={styles.title}>Oops! Something went wrong</Text>
            <Text style={styles.message}>
              Don't worry! Our friendly robots are fixing this. 
              Let's try again!
            </Text>
            
            <TouchableOpacity
              style={styles.retryButton}
              onPress={this.handleRetry}
              activeOpacity={0.8}
            >
              <Text style={styles.retryText}>Try Again 🔄</Text>
            </TouchableOpacity>
            
            {__DEV__ && this.state.error && (
              <View style={styles.debugInfo}>
                <Text style={styles.debugTitle}>Debug Info:</Text>
                <Text style={styles.debugText}>
                  {this.state.error.message}
                </Text>
              </View>
            )}
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.LARGE,
  },
  errorCard: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: BORDER_RADIUS.LARGE,
    padding: SPACING.XLARGE,
    alignItems: 'center',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  emoji: {
    fontSize: 64,
    marginBottom: SPACING.MEDIUM,
  },
  title: {
    fontSize: FONTS.SIZE.HEADER,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: SPACING.MEDIUM,
  },
  message: {
    fontSize: FONTS.SIZE.LARGE,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.XLARGE,
  },
  retryButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: SPACING.XLARGE,
    paddingVertical: SPACING.MEDIUM,
    borderRadius: BORDER_RADIUS.MEDIUM,
    shadowColor: COLORS.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  retryText: {
    color: COLORS.SURFACE,
    fontSize: FONTS.SIZE.LARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    textAlign: 'center',
  },
  debugInfo: {
    marginTop: SPACING.XLARGE,
    padding: SPACING.MEDIUM,
    backgroundColor: '#f8f8f8',
    borderRadius: BORDER_RADIUS.SMALL,
    maxWidth: 280,
  },
  debugTitle: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: SPACING.SMALL,
  },
  debugText: {
    fontSize: FONTS.SIZE.TINY,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'monospace',
  },
});

export default ErrorBoundary;