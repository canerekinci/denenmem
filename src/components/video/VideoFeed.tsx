import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from '../../types';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../../constants';
import VideoCard from './VideoCard';
import SafetyIndicator from '../safety/SafetyIndicator';

interface VideoFeedProps {
  videos: Video[];
  onVideoPress?: (video: Video) => void;
  onEndReached?: () => void;
  isLoading?: boolean;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const VIDEO_HEIGHT = SCREEN_HEIGHT * 0.85; // Take most of the screen

/**
 * VideoFeed Component - TikTok-style vertical video feed
 * Core component for KIDFLIX AI's engaging video browsing experience
 */
const VideoFeed: React.FC<VideoFeedProps> = ({
  videos,
  onVideoPress,
  onEndReached,
  isLoading = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleViewabilityChange = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      if (newIndex !== null && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  }, [currentIndex]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderVideoItem = ({ item, index }: { item: Video; index: number }) => {
    const isActive = index === currentIndex;
    
    return (
      <View style={styles.videoContainer}>
        <VideoCard
          video={item}
          onPress={onVideoPress}
          isActive={isActive}
          height={VIDEO_HEIGHT}
        />
        
        {/* Video Overlay with Information */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
          style={styles.overlay}
        >
          <View style={styles.videoInfo}>
            <SafetyIndicator rating={item.safetyRating} size="small" />
            
            <Text style={styles.videoTitle} numberOfLines={2}>
              {item.title}
            </Text>
            
            <Text style={styles.videoDescription} numberOfLines={3}>
              {item.description}
            </Text>
            
            <View style={styles.metaInfo}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category.name}</Text>
              </View>
              
              <View style={styles.ageGroupBadge}>
                <Text style={styles.ageGroupText}>Ages {item.ageGroup}</Text>
              </View>
            </View>
          </View>
          
          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>❤️</Text>
              <Text style={styles.actionCount}>{formatCount(item.likes)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>👁️</Text>
              <Text style={styles.actionCount}>{formatCount(item.views)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📥</Text>
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🔗</Text>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          {videos.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.progressDot,
                idx === index && styles.progressDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyEmoji}>🎬</Text>
      <Text style={styles.emptyTitle}>No Videos Yet!</Text>
      <Text style={styles.emptyMessage}>
        Check back soon for amazing new content!
      </Text>
    </View>
  );

  const renderLoadingIndicator = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingEmoji}>🌟</Text>
      <Text style={styles.loadingText}>Loading awesome videos...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={VIDEO_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={handleViewabilityChange}
        viewabilityConfig={viewabilityConfig}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={isLoading ? renderLoadingIndicator : renderEmptyState}
        removeClippedSubviews={false} // Keep for smooth scrolling
        maxToRenderPerBatch={3}
        windowSize={5}
        initialNumToRender={2}
      />
    </View>
  );
};

// Helper function to format large numbers
const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  videoContainer: {
    height: VIDEO_HEIGHT,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    flexDirection: 'row',
    paddingHorizontal: SPACING.MEDIUM,
    paddingBottom: SPACING.XLARGE,
  },
  videoInfo: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: SPACING.MEDIUM,
  },
  videoTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    marginBottom: SPACING.SMALL,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  videoDescription: {
    fontSize: FONTS.SIZE.MEDIUM,
    color: COLORS.SURFACE,
    marginBottom: SPACING.MEDIUM,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  metaInfo: {
    flexDirection: 'row',
    gap: SPACING.SMALL,
  },
  categoryBadge: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.SMALL,
  },
  categoryText: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.SURFACE,
  },
  ageGroupBadge: {
    backgroundColor: COLORS.SECONDARY,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.SMALL,
  },
  ageGroupText: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.SURFACE,
  },
  actionButtons: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING.MEDIUM,
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: SPACING.MEDIUM,
    padding: SPACING.SMALL,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  actionCount: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.SURFACE,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  actionText: {
    fontSize: FONTS.SIZE.TINY,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.SURFACE,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  progressContainer: {
    position: 'absolute',
    top: '50%',
    right: SPACING.SMALL,
    alignItems: 'center',
  },
  progressDot: {
    width: 4,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginVertical: 2,
    borderRadius: 2,
  },
  progressDotActive: {
    backgroundColor: COLORS.SURFACE,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.XLARGE,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: SPACING.MEDIUM,
  },
  emptyTitle: {
    fontSize: FONTS.SIZE.HEADER,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.SMALL,
  },
  emptyMessage: {
    fontSize: FONTS.SIZE.LARGE,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.XLARGE,
  },
  loadingEmoji: {
    fontSize: 64,
    marginBottom: SPACING.MEDIUM,
  },
  loadingText: {
    fontSize: FONTS.SIZE.LARGE,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  },
});

export default VideoFeed;