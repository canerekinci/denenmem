import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafetyRating } from '../../types';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SAFETY_MESSAGES } from '../../constants';

interface SafetyIndicatorProps {
  rating: SafetyRating;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

/**
 * SafetyIndicator Component - Displays content safety rating
 * Core safety feature for KIDFLIX AI platform
 */
const SafetyIndicator: React.FC<SafetyIndicatorProps> = ({
  rating,
  size = 'medium',
  showText = true,
}) => {
  const getSafetyConfig = (rating: SafetyRating) => {
    switch (rating) {
      case 'VERIFIED_SAFE':
        return {
          color: COLORS.SAFE,
          icon: '✅',
          text: SAFETY_MESSAGES.VERIFIED_SAFE,
          backgroundColor: `${COLORS.SAFE}15`,
        };
      case 'PARENT_APPROVED':
        return {
          color: COLORS.ACCENT,
          icon: '👨‍👩‍👧‍👦',
          text: SAFETY_MESSAGES.PARENT_APPROVED,
          backgroundColor: `${COLORS.ACCENT}15`,
        };
      case 'PENDING_REVIEW':
        return {
          color: COLORS.WARNING,
          icon: '⏳',
          text: SAFETY_MESSAGES.PENDING_REVIEW,
          backgroundColor: `${COLORS.WARNING}15`,
        };
      default:
        return {
          color: COLORS.TEXT_SECONDARY,
          icon: '❓',
          text: 'Unknown Status',
          backgroundColor: `${COLORS.TEXT_SECONDARY}15`,
        };
    }
  };

  const getSizeConfig = (size: string) => {
    switch (size) {
      case 'small':
        return {
          iconSize: 12,
          fontSize: FONTS.SIZE.TINY,
          padding: 4,
          borderRadius: BORDER_RADIUS.SMALL,
        };
      case 'large':
        return {
          iconSize: 20,
          fontSize: FONTS.SIZE.MEDIUM,
          padding: SPACING.SMALL,
          borderRadius: BORDER_RADIUS.MEDIUM,
        };
      default: // medium
        return {
          iconSize: 16,
          fontSize: FONTS.SIZE.SMALL,
          padding: 6,
          borderRadius: BORDER_RADIUS.SMALL,
        };
    }
  };

  const safetyConfig = getSafetyConfig(rating);
  const sizeConfig = getSizeConfig(size);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: safetyConfig.backgroundColor,
          borderColor: safetyConfig.color,
          paddingHorizontal: sizeConfig.padding,
          paddingVertical: sizeConfig.padding / 2,
          borderRadius: sizeConfig.borderRadius,
        },
      ]}
    >
      <Text
        style={[
          styles.icon,
          {
            fontSize: sizeConfig.iconSize,
          },
        ]}
      >
        {safetyConfig.icon}
      </Text>
      
      {showText && (
        <Text
          style={[
            styles.text,
            {
              color: safetyConfig.color,
              fontSize: sizeConfig.fontSize,
            },
          ]}
        >
          {safetyConfig.text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: 4,
  },
  text: {
    fontWeight: FONTS.WEIGHT.MEDIUM,
  },
});

export default SafetyIndicator;