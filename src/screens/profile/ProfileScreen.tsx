import React, { useState } from 'react';
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
import { COLORS, FONTS, SPACING, BORDER_RADIUS, AGE_GROUPS } from '../../constants';
import ErrorBoundary from '../../components/common/ErrorBoundary';

/**
 * ProfileScreen Component - User profile and learning progress
 * Shows achievements, preferences, and learning statistics
 */
const ProfileScreen: React.FC = () => {
  const [userProfile] = useState({
    name: 'Alex',
    age: 7,
    ageGroup: '5-7' as const,
    favoriteCategory: 'STEM Explorer',
    videosWatched: 42,
    hoursLearned: 18.5,
    achievements: 7,
    streak: 5,
  });

  const handleFeaturePress = (feature: string) => {
    Alert.alert(
      `🌟 ${feature}`,
      `This feature is coming soon in KIDFLIX AI!\n\nWe're working hard to make learning even more fun and personalized for you! 🚀`,
      [{ text: 'Awesome! 🎉', style: 'default' }]
    );
  };

  const renderProfileHeader = () => (
    <LinearGradient
      colors={COLORS.GRADIENT_PRIMARY}
      style={styles.profileHeader}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>👦</Text>
      </View>
      <Text style={styles.userName}>Hi, {userProfile.name}! 👋</Text>
      <Text style={styles.userAge}>
        {AGE_GROUPS[userProfile.ageGroup].label} • Age {userProfile.age}
      </Text>
      <View style={styles.streakBadge}>
        <Text style={styles.streakText}>🔥 {userProfile.streak} Day Streak!</Text>
      </View>
    </LinearGradient>
  );

  const renderStatsSection = () => (
    <View style={styles.statsSection}>
      <Text style={styles.sectionTitle}>📊 Your Learning Journey</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{userProfile.videosWatched}</Text>
          <Text style={styles.statLabel}>Videos Watched</Text>
          <Text style={styles.statIcon}>🎬</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{userProfile.hoursLearned}h</Text>
          <Text style={styles.statLabel}>Learning Time</Text>
          <Text style={styles.statIcon}>⏰</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{userProfile.achievements}</Text>
          <Text style={styles.statLabel}>Achievements</Text>
          <Text style={styles.statIcon}>🏆</Text>
        </View>
      </View>
    </View>
  );

  const renderAchievementsSection = () => (
    <View style={styles.achievementsSection}>
      <Text style={styles.sectionTitle}>🏆 Recent Achievements</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.achievementsScroll}
      >
        {achievements.map((achievement, index) => (
          <TouchableOpacity
            key={index}
            style={styles.achievementCard}
            onPress={() => handleFeaturePress('Achievement Details')}
          >
            <Text style={styles.achievementIcon}>{achievement.icon}</Text>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDate}>{achievement.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderSettingsSection = () => (
    <View style={styles.settingsSection}>
      <Text style={styles.sectionTitle}>⚙️ Settings & Controls</Text>
      <View style={styles.settingsGrid}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingCard}
            onPress={() => handleFeaturePress(option.title)}
          >
            <Text style={styles.settingIcon}>{option.icon}</Text>
            <Text style={styles.settingTitle}>{option.title}</Text>
            <Text style={styles.settingSubtitle}>{option.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderSafetySection = () => (
    <View style={styles.safetySection}>
      <LinearGradient
        colors={['#2ECC71', '#27AE60']}
        style={styles.safetyGradient}
      >
        <Text style={styles.safetyIcon}>🛡️</Text>
        <Text style={styles.safetyTitle}>100% Safe & Secure</Text>
        <Text style={styles.safetyText}>
          All content is verified safe for children. 
          Parents have full control over what you watch!
        </Text>
      </LinearGradient>
    </View>
  );

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {renderProfileHeader()}
          {renderStatsSection()}
          {renderAchievementsSection()}
          {renderSettingsSection()}
          {renderSafetySection()}
          
          {/* Bottom spacing for tab bar */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

// Mock achievements data
const achievements = [
  { icon: '🌟', title: 'First Video!', date: '2 days ago' },
  { icon: '🧮', title: 'Math Wizard', date: '3 days ago' },
  { icon: '🎨', title: 'Creative Artist', date: '1 week ago' },
  { icon: '🚀', title: 'Space Explorer', date: '1 week ago' },
  { icon: '📚', title: 'Bookworm', date: '2 weeks ago' },
];

// Mock settings options
const settingsOptions = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Parent Dashboard',
    subtitle: 'View progress & controls'
  },
  {
    icon: '📱',
    title: 'Offline Videos',
    subtitle: 'Download for later'
  },
  {
    icon: '🔊',
    title: 'Audio Settings',
    subtitle: 'Volume & subtitles'
  },
  {
    icon: '🌙',
    title: 'Bedtime Mode',
    subtitle: 'Sleep-friendly viewing'
  },
  {
    icon: '🏆',
    title: 'Achievements',
    subtitle: 'View all badges'
  },
  {
    icon: '❓',
    title: 'Help & Support',
    subtitle: 'Get help when needed'
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: SPACING.XLARGE,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SPACING.XXLARGE,
    paddingHorizontal: SPACING.MEDIUM,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.MEDIUM,
  },
  avatar: {
    fontSize: 40,
  },
  userName: {
    fontSize: FONTS.SIZE.HEADER,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    marginBottom: SPACING.SMALL,
    textAlign: 'center',
  },
  userAge: {
    fontSize: FONTS.SIZE.LARGE,
    color: COLORS.SURFACE,
    opacity: 0.9,
    marginBottom: SPACING.MEDIUM,
  },
  streakBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    borderRadius: BORDER_RADIUS.MEDIUM,
  },
  streakText: {
    fontSize: FONTS.SIZE.MEDIUM,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
  },
  statsSection: {
    padding: SPACING.MEDIUM,
  },
  sectionTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.LARGE,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.SMALL,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.SURFACE,
    borderRadius: BORDER_RADIUS.MEDIUM,
    padding: SPACING.MEDIUM,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: FONTS.SIZE.XXLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.PRIMARY,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FONTS.SIZE.SMALL,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    marginBottom: SPACING.SMALL,
  },
  statIcon: {
    fontSize: 20,
  },
  achievementsSection: {
    padding: SPACING.MEDIUM,
  },
  achievementsScroll: {
    paddingHorizontal: SPACING.SMALL,
  },
  achievementCard: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: BORDER_RADIUS.MEDIUM,
    padding: SPACING.MEDIUM,
    marginRight: SPACING.MEDIUM,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementIcon: {
    fontSize: 32,
    marginBottom: SPACING.SMALL,
  },
  achievementTitle: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: FONTS.SIZE.TINY,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
  settingsSection: {
    padding: SPACING.MEDIUM,
  },
  settingsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING.MEDIUM,
  },
  settingCard: {
    width: '47%',
    backgroundColor: COLORS.SURFACE,
    borderRadius: BORDER_RADIUS.MEDIUM,
    padding: SPACING.MEDIUM,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingIcon: {
    fontSize: 32,
    marginBottom: SPACING.SMALL,
  },
  settingTitle: {
    fontSize: FONTS.SIZE.MEDIUM,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: FONTS.SIZE.SMALL,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
  safetySection: {
    margin: SPACING.MEDIUM,
  },
  safetyGradient: {
    borderRadius: BORDER_RADIUS.LARGE,
    padding: SPACING.XLARGE,
    alignItems: 'center',
  },
  safetyIcon: {
    fontSize: 48,
    marginBottom: SPACING.MEDIUM,
  },
  safetyTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.SURFACE,
    textAlign: 'center',
    marginBottom: SPACING.SMALL,
  },
  safetyText: {
    fontSize: FONTS.SIZE.MEDIUM,
    color: COLORS.SURFACE,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.95,
  },
  bottomSpacing: {
    height: SPACING.XLARGE,
  },
});

export default ProfileScreen;