import { Video } from '../types';
import { DEFAULT_CATEGORIES } from '../constants';

/**
 * Mock Video Data for KIDFLIX AI Platform
 * Represents diverse educational content for children
 */
export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Fun with Numbers: Counting to 20',
    description: 'Join our friendly robot as we learn to count from 1 to 20 with colorful animations and catchy songs!',
    thumbnailUrl: 'https://picsum.photos/400/600?random=1',
    videoUrl: 'https://example.com/video1.mp4',
    duration: 180, // 3 minutes
    category: DEFAULT_CATEGORIES[3], // Math Magic
    ageGroup: '3-4',
    educator: 'Ms. Sarah',
    views: 15420,
    likes: 1205,
    tags: ['counting', 'numbers', 'math', 'preschool'],
    isOfflineAvailable: true,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Mathematics', 'Numeracy'],
      skills: ['Counting', 'Number Recognition', 'Pattern Recognition'],
      learningOutcomes: ['Count from 1-20', 'Recognize number symbols', 'Understand quantity'],
      difficulty: 'BEGINNER',
    },
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-01'),
  },
  {
    id: '2',
    title: 'Rainbow Art Adventure',
    description: 'Discover amazing colors and create beautiful rainbow art with simple techniques kids can do at home!',
    thumbnailUrl: 'https://picsum.photos/400/600?random=2',
    videoUrl: 'https://example.com/video2.mp4',
    duration: 240, // 4 minutes
    category: DEFAULT_CATEGORIES[1], // Creative Arts
    ageGroup: '5-7',
    educator: 'Mr. Pablo',
    views: 22350,
    likes: 1890,
    tags: ['art', 'colors', 'creativity', 'drawing'],
    isOfflineAvailable: true,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Art', 'Color Theory'],
      skills: ['Fine Motor Skills', 'Creativity', 'Color Recognition'],
      learningOutcomes: ['Understand primary colors', 'Create rainbow patterns', 'Express creativity'],
      difficulty: 'BEGINNER',
    },
    createdAt: new Date('2024-08-28'),
    updatedAt: new Date('2024-08-28'),
  },
  {
    id: '3',
    title: 'Amazing Animal Kingdom',
    description: 'Explore the wonderful world of animals! Learn about lions, elephants, penguins and more fascinating creatures.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=3',
    videoUrl: 'https://example.com/video3.mp4',
    duration: 320, // 5 minutes 20 seconds
    category: DEFAULT_CATEGORIES[4], // Nature & Animals
    ageGroup: '5-7',
    educator: 'Dr. Emma Wildlife',
    views: 45670,
    likes: 3240,
    tags: ['animals', 'nature', 'wildlife', 'education'],
    isOfflineAvailable: false,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Science', 'Biology', 'Nature'],
      skills: ['Observation', 'Classification', 'Memory'],
      learningOutcomes: ['Identify different animals', 'Understand habitats', 'Learn animal sounds'],
      difficulty: 'BEGINNER',
    },
    createdAt: new Date('2024-09-02'),
    updatedAt: new Date('2024-09-02'),
  },
  {
    id: '4',
    title: 'Space Rocket Adventure',
    description: 'Blast off to space! Learn about planets, stars, and rockets in this exciting cosmic journey.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=4',
    videoUrl: 'https://example.com/video4.mp4',
    duration: 280, // 4 minutes 40 seconds
    category: DEFAULT_CATEGORIES[0], // STEM Explorer
    ageGroup: '8-10',
    educator: 'Captain Alex',
    views: 38920,
    likes: 2750,
    tags: ['space', 'science', 'astronomy', 'rockets'],
    isOfflineAvailable: true,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Science', 'Astronomy', 'Physics'],
      skills: ['Scientific Thinking', 'Curiosity', 'Problem Solving'],
      learningOutcomes: ['Learn about solar system', 'Understand gravity', 'Explore space technology'],
      difficulty: 'INTERMEDIATE',
    },
    createdAt: new Date('2024-09-03'),
    updatedAt: new Date('2024-09-03'),
  },
  {
    id: '5',
    title: 'ABC Song Adventure',
    description: 'Sing along with the alphabet! A fun and engaging way to learn letters with music and animation.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=5',
    videoUrl: 'https://example.com/video5.mp4',
    duration: 150, // 2 minutes 30 seconds
    category: DEFAULT_CATEGORIES[2], // Language Learning
    ageGroup: '3-4',
    educator: 'Miss Lily',
    views: 67890,
    likes: 5430,
    tags: ['alphabet', 'singing', 'letters', 'language'],
    isOfflineAvailable: true,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Language', 'Literacy', 'Music'],
      skills: ['Letter Recognition', 'Phonics', 'Memory'],
      learningOutcomes: ['Know all 26 letters', 'Understand letter sounds', 'Sing alphabet song'],
      difficulty: 'BEGINNER',
    },
    createdAt: new Date('2024-08-30'),
    updatedAt: new Date('2024-08-30'),
  },
  {
    id: '6',
    title: 'Making Friends at School',
    description: 'Learn how to make new friends, share toys, and be kind to others in this social skills adventure.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=6',
    videoUrl: 'https://example.com/video6.mp4',
    duration: 200, // 3 minutes 20 seconds
    category: DEFAULT_CATEGORIES[5], // Social Skills
    ageGroup: '5-7',
    educator: 'Mrs. Harmony',
    views: 28450,
    likes: 2180,
    tags: ['friendship', 'social skills', 'kindness', 'school'],
    isOfflineAvailable: false,
    safetyRating: 'PARENT_APPROVED',
    educationalValue: {
      subjects: ['Social Studies', 'Emotional Intelligence'],
      skills: ['Empathy', 'Communication', 'Cooperation'],
      learningOutcomes: ['Make friends', 'Share with others', 'Resolve conflicts'],
      difficulty: 'BEGINNER',
    },
    createdAt: new Date('2024-09-04'),
    updatedAt: new Date('2024-09-04'),
  },
  {
    id: '7',
    title: 'Kitchen Science Experiments',
    description: 'Amazing science experiments you can do in the kitchen! Safe, fun, and educational activities.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=7',
    videoUrl: 'https://example.com/video7.mp4',
    duration: 360, // 6 minutes
    category: DEFAULT_CATEGORIES[0], // STEM Explorer
    ageGroup: '8-10',
    educator: 'Professor Cook',
    views: 19280,
    likes: 1560,
    tags: ['science', 'experiments', 'kitchen', 'chemistry'],
    isOfflineAvailable: true,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Science', 'Chemistry', 'Physics'],
      skills: ['Observation', 'Hypothesis', 'Critical Thinking'],
      learningOutcomes: ['Understand chemical reactions', 'Practice scientific method', 'Safety awareness'],
      difficulty: 'INTERMEDIATE',
    },
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date('2024-09-05'),
  },
  {
    id: '8',
    title: 'World Cultures Festival',
    description: 'Join us on a journey around the world! Discover different cultures, traditions, and celebrations.',
    thumbnailUrl: 'https://picsum.photos/400/600?random=8',
    videoUrl: 'https://example.com/video8.mp4',
    duration: 420, // 7 minutes
    category: DEFAULT_CATEGORIES[7], // Cultural Discovery
    ageGroup: '11-12',
    educator: 'Ms. Global',
    views: 33560,
    likes: 2890,
    tags: ['culture', 'diversity', 'traditions', 'world'],
    isOfflineAvailable: false,
    safetyRating: 'VERIFIED_SAFE',
    educationalValue: {
      subjects: ['Social Studies', 'Geography', 'Cultural Studies'],
      skills: ['Cultural Awareness', 'Tolerance', 'Global Thinking'],
      learningOutcomes: ['Appreciate diversity', 'Learn about traditions', 'Develop global mindset'],
      difficulty: 'ADVANCED',
    },
    createdAt: new Date('2024-09-06'),
    updatedAt: new Date('2024-09-06'),
  },
];

/**
 * Simulate API calls with mock data
 */
export class MockVideoService {
  /**
   * Get videos with optional category filtering
   */
  static async getVideos(categoryId?: string | null): Promise<Video[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (!categoryId) {
      return MOCK_VIDEOS;
    }
    
    return MOCK_VIDEOS.filter(video => video.category.id === categoryId);
  }

  /**
   * Get video by ID
   */
  static async getVideoById(id: string): Promise<Video | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return MOCK_VIDEOS.find(video => video.id === id) || null;
  }

  /**
   * Get recommended videos based on age group
   */
  static async getRecommendedVideos(ageGroup: string): Promise<Video[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return MOCK_VIDEOS.filter(video => video.ageGroup === ageGroup);
  }

  /**
   * Search videos by query
   */
  static async searchVideos(query: string): Promise<Video[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const lowercaseQuery = query.toLowerCase();
    return MOCK_VIDEOS.filter(video =>
      video.title.toLowerCase().includes(lowercaseQuery) ||
      video.description.toLowerCase().includes(lowercaseQuery) ||
      video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  /**
   * Like a video (update likes count)
   */
  static async likeVideo(videoId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const video = MOCK_VIDEOS.find(v => v.id === videoId);
    if (video) {
      video.likes += 1;
      return true;
    }
    return false;
  }

  /**
   * Get trending videos
   */
  static async getTrendingVideos(): Promise<Video[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Sort by views and likes combination
    return [...MOCK_VIDEOS]
      .sort((a, b) => (b.views + b.likes * 10) - (a.views + a.likes * 10))
      .slice(0, 5);
  }
}