import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ErrorBoundary from './src/components/common/ErrorBoundary';
import AppNavigation from './src/navigation/AppNavigation';

/**
 * KIDFLIX AI - Main App Component
 * Safe and Educational Video Platform for Children
 * 
 * Features:
 * - TikTok-style vertical video feed
 * - AI-powered category filtering
 * - Child-friendly UI/UX design
 * - Offline-first architecture
 * - Comprehensive safety systems
 * - Cross-platform compatibility
 */
export default function App() {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigation />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
