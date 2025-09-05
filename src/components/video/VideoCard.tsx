import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from '../../types';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../../constants';

interface VideoCardProps {
  video: Video;
  onPress?: (video: Video) => void;
  isActive?: boolean;
  height?: number;
  style?: any;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * VideoCard Component - Individual video display card
 * Displays video thumbnail, title, and interactive elements
 */
const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onPress,
  isActive = false,
  height = 200,
  style,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress(video);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderPlaceholder = () => (
    <View style={[styles.placeholder, { height }]}>
      <Text style={styles.placeholderEmoji}>🎬</Text>
      <Text style={styles.placeholderText}>Video Thumbnail</Text>
    </View>
  );

  const renderThumbnail = () => {
    if (imageError || !video.thumbnailUrl) {
      return renderPlaceholder();
    }

    return (
      <ImageBackground
        source={{ uri: video.thumbnailUrl }}
        style={[styles.thumbnail, { height }]}
        onLoad={handleImageLoad}
        onError={handleImageError}
        resizeMode="cover"
      >
        {!imageLoaded && (
          <View style={styles.loadingOverlay}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
        
        {/* Play Button Overlay */}
        <View style={styles.playButtonContainer}>
          <TouchableOpacity
            style={[
              styles.playButton,
              isActive && styles.playButtonActive,
            ]}
            onPress={handlePress}
            activeOpacity={0.8}
          >
            <Text style={styles.playIcon}>▶️</Text>
          </TouchableOpacity>
        </View>

        {/* Duration Badge */}
        <View style={styles.durationContainer}>
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>
              {formatDuration(video.duration)}
            </Text>
          </View>
        </View>

        {/* Bottom Gradient Overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.5)']}
          style={styles.bottomGradient}
        >
          <View style={styles.videoMeta}>
            <Text style={styles.videoTitle} numberOfLines={2}>
              {video.title}
            </Text>
            
            {video.educator && (
              <Text style={styles.educatorName}>
                by {video.educator}
              </Text>
            )}
          </View>
        </LinearGradient>

        {/* Offline Indicator */}
        {video.isOfflineAvailable && (
          <View style={styles.offlineIndicator}>
            <Text style={styles.offlineIcon}>📱</Text>
          </View>
        )}
      </ImageBackground>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.95}
    >
      {renderThumbnail()}
      
      {/* Active Video Border */}
      {isActive && <View style={styles.activeBorder} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.BACKGROUND,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.TEXT_LIGHT,
  },
  placeholder: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderEmoji: {
    fontSize: 48,
    marginBottom: SPACING.SMALL,
  },
  placeholderText: {
    fontSize: FONTS.SIZE.MEDIUM,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHT.MEDIUM,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: COLORS.SURFACE,
    fontSize: FONTS.SIZE.MEDIUM,
    fontWeight: FONTS.WEIGHT.MEDIUM,
  },
  playButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playButtonActive: {
    backgroundColor: COLORS.PRIMARY,
    transform: [{ scale: 1.1 }],
  },
  playIcon: {
    fontSize: 24,
    marginLeft: 3, // Adjust for visual centering
  },
  durationContainer: {
    position: 'absolute',
    top: SPACING.SMALL,
    right: SPACING.SMALL,
  },
  durationBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.SMALL,
  },
  durationText: {
    color: COLORS.SURFACE,
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.MEDIUM,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    justifyContent: 'flex-end',
    paddingHorizontal: SPACING.MEDIUM,
    paddingBottom: SPACING.MEDIUM,
  },
  videoMeta: {
    maxWidth: '80%',
  },
  videoTitle: {
    fontSize: FONTS.SIZE.LARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  educatorName: {
    fontSize: FONTS.SIZE.SMALL,
    color: COLORS.SURFACE,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    opacity: 0.9,
  },
  offlineIndicator: {
    position: 'absolute',
    top: SPACING.SMALL,
    left: SPACING.SMALL,
    backgroundColor: COLORS.SAFE,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offlineIcon: {
    fontSize: 16,
  },
  activeBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 3,
    borderColor: COLORS.PRIMARY,
    borderRadius: BORDER_RADIUS.SMALL,
  },
});

export default VideoCard;