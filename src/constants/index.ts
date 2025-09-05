// KIDFLIX AI - Platform Constants

import { VideoCategory } from '../types';

// Brand Colors - Child-friendly and engaging
export const COLORS = {
  // Primary Brand Colors
  PRIMARY: '#FF6B6B', // Warm Coral Red
  SECONDARY: '#4ECDC4', // Turquoise
  ACCENT: '#45B7D1', // Sky Blue
  
  // Educational Colors
  STEM: '#9B59B6', // Purple for Science/Tech
  ART: '#F39C12', // Orange for Creativity
  LANGUAGE: '#27AE60', // Green for Language Learning
  MATH: '#E74C3C', // Red for Mathematics
  
  // UI Colors
  BACKGROUND: '#F8F9FA',
  SURFACE: '#FFFFFF',
  TEXT_PRIMARY: '#2C3E50',
  TEXT_SECONDARY: '#7F8C8D',
  TEXT_LIGHT: '#BDC3C7',
  
  // Safety Colors
  SAFE: '#2ECC71',
  WARNING: '#F1C40F',
  DANGER: '#E74C3C',
  
  // Age Group Colors
  AGE_3_4: '#FFB6C1', // Light Pink
  AGE_5_7: '#87CEEB', // Sky Blue
  AGE_8_10: '#98FB98', // Pale Green
  AGE_11_12: '#DDA0DD', // Plum
  
  // Gradient Colors
  GRADIENT_PRIMARY: ['#FF6B6B', '#4ECDC4'] as const,
  GRADIENT_SECONDARY: ['#45B7D1', '#96CEB4'] as const,
  GRADIENT_SUCCESS: ['#2ECC71', '#27AE60'] as const,
};

// Typography
export const FONTS = {
  PRIMARY: 'System',
  BOLD: 'System',
  LIGHT: 'System',
  SIZE: {
    TINY: 10,
    SMALL: 12,
    MEDIUM: 14,
    LARGE: 16,
    XLARGE: 18,
    XXLARGE: 24,
    HEADER: 32,
    TITLE: 40,
  },
  WEIGHT: {
    LIGHT: '300' as const,
    REGULAR: '400' as const,
    MEDIUM: '500' as const,
    BOLD: '600' as const,
    EXTRA_BOLD: '700' as const,
  },
};

// Spacing
export const SPACING = {
  TINY: 4,
  SMALL: 8,
  MEDIUM: 16,
  LARGE: 24,
  XLARGE: 32,
  XXLARGE: 48,
};

// Border Radius
export const BORDER_RADIUS = {
  SMALL: 8,
  MEDIUM: 12,
  LARGE: 16,
  EXTRA_LARGE: 24,
  ROUND: 999,
};

// Default Categories
export const DEFAULT_CATEGORIES: VideoCategory[] = [
  {
    id: '1',
    name: 'STEM Explorer',
    icon: 'rocket',
    color: COLORS.STEM,
    description: 'Science, Technology, Engineering & Math adventures',
    isActive: true,
  },
  {
    id: '2',
    name: 'Creative Arts',
    icon: 'palette',
    color: COLORS.ART,
    description: 'Drawing, music, crafts and creative expression',
    isActive: true,
  },
  {
    id: '3',
    name: 'Language Learning',
    icon: 'book',
    color: COLORS.LANGUAGE,
    description: 'Reading, writing, and multilingual content',
    isActive: true,
  },
  {
    id: '4',
    name: 'Math Magic',
    icon: 'calculator',
    color: COLORS.MATH,
    description: 'Numbers, counting, and mathematical thinking',
    isActive: true,
  },
  {
    id: '5',
    name: 'Nature & Animals',
    icon: 'leaf',
    color: '#2ECC71',
    description: 'Wildlife, environment, and nature exploration',
    isActive: true,
  },
  {
    id: '6',
    name: 'Social Skills',
    icon: 'people',
    color: '#E67E22',
    description: 'Friendship, empathy, and social development',
    isActive: true,
  },
  {
    id: '7',
    name: 'Physical Activity',
    icon: 'fitness',
    color: '#8E44AD',
    description: 'Exercise, sports, and motor skills',
    isActive: true,
  },
  {
    id: '8',
    name: 'Cultural Discovery',
    icon: 'globe',
    color: '#3498DB',
    description: 'World cultures, traditions, and diversity',
    isActive: true,
  },
];

// Screen Dimensions
export const SCREEN = {
  HEADER_HEIGHT: 60,
  TAB_BAR_HEIGHT: 80,
  VIDEO_CARD_HEIGHT: 200,
  CATEGORY_BUTTON_HEIGHT: 50,
};

// Animation Durations
export const ANIMATION = {
  FAST: 150,
  MEDIUM: 300,
  SLOW: 500,
  EXTRA_SLOW: 1000,
};

// Platform Configuration
export const CONFIG = {
  // Video Settings
  VIDEO_QUALITY: {
    LOW: '480p',
    MEDIUM: '720p',
    HIGH: '1080p',
  },
  
  // Offline Settings
  MAX_OFFLINE_VIDEOS: 10,
  OFFLINE_STORAGE_LIMIT: 1024, // MB
  
  // Safety Settings
  CONTENT_FILTER_ENABLED: true,
  PARENTAL_CONTROLS_REQUIRED: true,
  
  // Performance Settings
  VIDEO_PRELOAD_COUNT: 3,
  IMAGE_CACHE_SIZE: 50, // MB
  
  // Analytics
  ANALYTICS_ENABLED: true,
  CRASH_REPORTING_ENABLED: true,
  
  // API Configuration
  API_TIMEOUT: 10000, // ms
  RETRY_ATTEMPTS: 3,
  
  // Port Configuration
  DEV_PORT: 8083,
};

// Age Group Configurations
export const AGE_GROUPS = {
  '3-4': {
    label: 'Little Explorers',
    color: COLORS.AGE_3_4,
    maxSessionTime: 20, // minutes
    features: ['simple_controls', 'large_buttons', 'voice_assistance'],
  },
  '5-7': {
    label: 'Young Learners',
    color: COLORS.AGE_5_7,
    maxSessionTime: 30,
    features: ['basic_interaction', 'guided_navigation', 'rewards'],
  },
  '8-10': {
    label: 'Smart Kids',
    color: COLORS.AGE_8_10,
    maxSessionTime: 45,
    features: ['advanced_controls', 'social_features', 'achievements'],
  },
  '11-12': {
    label: 'Tech Natives',
    color: COLORS.AGE_11_12,
    maxSessionTime: 60,
    features: ['full_features', 'creation_tools', 'peer_interaction'],
  },
};

// Safety Messages
export const SAFETY_MESSAGES = {
  VERIFIED_SAFE: '✅ Verified Safe Content',
  PARENT_APPROVED: '👨‍👩‍👧‍👦 Parent Approved',
  PENDING_REVIEW: '⏳ Under Review',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Unable to connect. Please check your internet connection.',
  CONTENT_UNAVAILABLE: 'This content is currently unavailable.',
  AGE_RESTRICTED: 'This content is not suitable for your age group.',
  OFFLINE_REQUIRED: 'This feature requires an internet connection.',
  STORAGE_FULL: 'Device storage is full. Please free up space.',
  PARENT_PERMISSION: 'This action requires parent permission.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  VIDEO_LIKED: 'Great choice! Video added to favorites! ⭐',
  OFFLINE_SAVED: 'Video saved for offline viewing! 📱',
  ACHIEVEMENT_UNLOCKED: 'Amazing! You unlocked a new achievement! 🏆',
  LESSON_COMPLETED: 'Wonderful! Lesson completed! 🎉',
};

// App Metadata
export const APP_INFO = {
  NAME: 'KIDFLIX AI',
  VERSION: '1.0.0',
  DESCRIPTION: 'Safe and Educational Video Platform for Children',
  COMPANY: 'KIDFLIX AI Inc.',
  SUPPORT_EMAIL: 'support@kidflix.ai',
  PRIVACY_URL: 'https://kidflix.ai/privacy',
  TERMS_URL: 'https://kidflix.ai/terms',
};