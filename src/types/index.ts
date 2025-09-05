// Core Types for KIDFLIX AI Platform

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number; // in seconds
  category: VideoCategory;
  ageGroup: AgeGroup;
  educator?: string;
  views: number;
  likes: number;
  tags: string[];
  isOfflineAvailable: boolean;
  safetyRating: SafetyRating;
  educationalValue: EducationalValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  isActive: boolean;
}

export type AgeGroup = '3-4' | '5-7' | '8-10' | '11-12';

export type SafetyRating = 'VERIFIED_SAFE' | 'PARENT_APPROVED' | 'PENDING_REVIEW';

export interface EducationalValue {
  subjects: string[];
  skills: string[];
  learningOutcomes: string[];
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

export interface User {
  id: string;
  name: string;
  age: number;
  preferredLanguage: string;
  favoriteCategories: string[];
  watchHistory: string[];
  achievements: Achievement[];
  screenTimeLimit: number; // in minutes
  parentalControls: ParentalControls;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: string;
}

export interface ParentalControls {
  isActive: boolean;
  allowedCategories: string[];
  blockedContent: string[];
  dailyTimeLimit: number;
  bedtimeMode: {
    enabled: boolean;
    startTime: string;
    endTime: string;
  };
}

export interface Analytics {
  sessionDuration: number;
  videosWatched: number;
  categoriesExplored: string[];
  learningProgress: LearningProgress;
  engagementScore: number;
}

export interface LearningProgress {
  subject: string;
  skillsLearned: string[];
  progressPercentage: number;
  nextRecommendations: string[];
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  VideoPlayer: { video: Video };
  Profile: undefined;
  Settings: undefined;
  ParentDashboard: undefined;
};

// Component Props Types
export interface VideoCardProps {
  video: Video;
  onPress: (video: Video) => void;
  onLike?: (videoId: string) => void;
  isOfflineMode?: boolean;
}

export interface CategoryFilterProps {
  categories: VideoCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export interface SafetyIndicatorProps {
  rating: SafetyRating;
  size?: 'small' | 'medium' | 'large';
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  type: 'NETWORK' | 'CONTENT' | 'SAFETY' | 'GENERAL';
  timestamp: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: AppError;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  hasNextPage: boolean;
}