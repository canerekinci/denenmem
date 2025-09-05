import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { VideoCategory, Video } from '../../types';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, DEFAULT_CATEGORIES } from '../../constants';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import { MockVideoService } from '../../services/mockData';

/**
 * CategoriesScreen Component - Browse all available categories
 * Colorful grid layout for easy category selection
 */
const CategoriesScreen: React.FC = () => {
  const [categories, setCategories] = useState<VideoCategory[]>(DEFAULT_CATEGORIES);
  const [categoryStats, setCategoryStats] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    loadCategoryStats();
  }, []);

  const loadCategoryStats = async () => {
    try {
      const stats: { [key: string]: number } = {};
      
      for (const category of categories) {
        const videos = await MockVideoService.getVideos(category.id);
        stats[category.id] = videos.length;
      }
      
      setCategoryStats(stats);
    } catch (error) {
      console.error('Error loading category stats:', error);
    }
  };

  const handleCategoryPress = async (category: VideoCategory) => {
    try {
      const videos = await MockVideoService.getVideos(category.id);
      const videoCount = videos.length;
      
      Alert.alert(
        `${getCategoryIcon(category.icon)} ${category.name}`,
        `${category.description}\n\n📊 ${videoCount} amazing videos available!\n\n🎯 Perfect for educational fun and learning!`,
        [
          { text: 'Maybe Later', style: 'cancel' },
          { 
            text: 'Explore Now! 🚀', 
            style: 'default',
            onPress: () => {
              // In a real app, this would navigate to filtered video feed
              Alert.alert(
                '🎬 Category Selected!',
                `Opening ${category.name} videos...\n\nGet ready for some amazing learning content! 🌟`
              );
            }
          },
        ]
      );
    } catch (error) {
      Alert.alert('Oops! 🤖', 'Something went wrong. Please try again!');
    }
  };

  const renderCategoryCard = (category: VideoCategory) => {
    const videoCount = categoryStats[category.id] || 0;
    
    return (
      <TouchableOpacity
        key={category.id}
        style={styles.categoryCard}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[category.color, `${category.color}CC`]}
          style={styles.categoryGradient}
        >
          <View style={styles.categoryContent}>
            <Text style={styles.categoryIcon}>
              {getCategoryIcon(category.icon)}
            </Text>
            
            <Text style={styles.categoryTitle}>
              {category.name}
            </Text>
            
            <Text style={styles.categoryDescription}>
              {category.description}
            </Text>
            
            <View style={styles.categoryStats}>
              <Text style={styles.videoCount}>
                📹 {videoCount} videos
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderFeaturedSection = () => (
    <View style={styles.featuredSection}>
      <Text style={styles.sectionTitle}>🌟 Featured Categories</Text>
      <Text style={styles.sectionSubtitle}>
        Discover amazing educational content designed just for you!
      </Text>
    </View>
  );

  const renderStatsSection = () => {
    const totalVideos = Object.values(categoryStats).reduce((sum, count) => sum + count, 0);
    
    return (
      <View style={styles.statsSection}>
        <LinearGradient
          colors={COLORS.GRADIENT_PRIMARY}
          style={styles.statsGradient}
        >
          <Text style={styles.statsTitle}>🎉 Your Learning Universe</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{categories.length}</Text>
              <Text style={styles.statLabel}>Categories</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{totalVideos}</Text>
              <Text style={styles.statLabel}>Videos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Safe</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {renderFeaturedSection()}
          {renderStatsSection()}
          
          <View style={styles.categoriesGrid}>
            {categories
              .filter((category) => category.isActive)
              .map((category) => renderCategoryCard(category))}
          </View>
          
          {/* Bottom spacing for tab bar */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

// Helper function to get emoji icons for categories
const getCategoryIcon = (iconName: string): string => {
  const iconMap: { [key: string]: string } = {
    rocket: '🚀',
    palette: '🎨',
    book: '📚',
    calculator: '🧮',
    leaf: '🌿',
    people: '👥',
    fitness: '🏃‍♂️',
    globe: '🌍',
  };
  
  return iconMap[iconName] || '📺';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: SPACING.MEDIUM,
  },
  featuredSection: {
    marginBottom: SPACING.XLARGE,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FONTS.SIZE.HEADER,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: SPACING.SMALL,
  },
  sectionSubtitle: {
    fontSize: FONTS.SIZE.LARGE,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 24,
  },
  statsSection: {
    marginBottom: SPACING.XLARGE,
  },
  statsGradient: {
    borderRadius: BORDER_RADIUS.LARGE,
    padding: SPACING.XLARGE,
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    marginBottom: SPACING.LARGE,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: FONTS.SIZE.TITLE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FONTS.SIZE.MEDIUM,
    color: COLORS.SURFACE,
    opacity: 0.9,
  },
  categoriesGrid: {
    gap: SPACING.MEDIUM,
  },
  categoryCard: {
    borderRadius: BORDER_RADIUS.LARGE,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  categoryGradient: {
    padding: SPACING.XLARGE,
  },
  categoryContent: {
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 48,
    marginBottom: SPACING.MEDIUM,
  },
  categoryTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    textAlign: 'center',
    marginBottom: SPACING.SMALL,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  categoryDescription: {
    fontSize: FONTS.SIZE.MEDIUM,
    color: COLORS.SURFACE,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: SPACING.MEDIUM,
    opacity: 0.95,
  },
  categoryStats: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    borderRadius: BORDER_RADIUS.MEDIUM,
  },
  videoCount: {
    fontSize: FONTS.SIZE.MEDIUM,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.SURFACE,
  },
  bottomSpacing: {
    height: SPACING.XLARGE,
  },
});

export default CategoriesScreen;