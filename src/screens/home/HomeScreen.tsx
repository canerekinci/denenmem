import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, VideoCategory } from '../../types';
import { COLORS, DEFAULT_CATEGORIES } from '../../constants';
import VideoFeed from '../../components/video/VideoFeed';
import CategoryFilter from '../../components/category/CategoryFilter';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import { MockVideoService } from '../../services/mockData';

/**
 * HomeScreen Component - Main video feed interface
 * TikTok-style video browsing with category filtering
 */
const HomeScreen: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [categories, setCategories] = useState<VideoCategory[]>(DEFAULT_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial videos
  useEffect(() => {
    loadVideos();
  }, []);

  // Load videos when category changes
  useEffect(() => {
    loadVideos(selectedCategory);
  }, [selectedCategory]);

  const loadVideos = async (categoryId?: string | null) => {
    try {
      setIsLoading(true);
      const fetchedVideos = await MockVideoService.getVideos(categoryId);
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error loading videos:', error);
      Alert.alert(
        'Oops! 🤖',
        'We had trouble loading videos. Please try again!',
        [{ text: 'OK', style: 'default' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoPress = (video: Video) => {
    // For now, just show an alert. In a real app, this would navigate to video player
    Alert.alert(
      `🎬 ${video.title}`,
      `Ready to watch "${video.title}"?\n\n📚 Category: ${video.category.name}\n👶 Age Group: ${video.ageGroup}\n⏱️ Duration: ${Math.floor(video.duration / 60)}:${(video.duration % 60).toString().padStart(2, '0')}\n\n✅ ${video.safetyRating === 'VERIFIED_SAFE' ? 'Verified Safe Content' : 'Parent Approved'}`,
      [
        { text: 'Maybe Later', style: 'cancel' },
        { 
          text: 'Watch Now! 🎉', 
          style: 'default',
          onPress: () => {
            // Simulate video play
            Alert.alert('🎬 Playing Video!', `Now playing: ${video.title}\n\nEnjoy learning! 🌟`);
          }
        },
      ]
    );
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const handleEndReached = () => {
    // In a real app, this would load more videos
    console.log('End of feed reached - would load more videos');
  };

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.SURFACE}
        />
        
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />

        {/* Video Feed */}
        <VideoFeed
          videos={videos}
          onVideoPress={handleVideoPress}
          onEndReached={handleEndReached}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default HomeScreen;