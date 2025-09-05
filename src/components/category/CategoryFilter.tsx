import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { VideoCategory } from '../../types';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../../constants';

interface CategoryFilterProps {
  categories: VideoCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

/**
 * CategoryFilter Component - AI-powered category filtering system
 * Allows children to easily browse content by educational categories
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const handleCategoryPress = (categoryId: string) => {
    // If the same category is pressed, deselect it
    if (selectedCategory === categoryId) {
      onCategorySelect(null);
    } else {
      onCategorySelect(categoryId);
    }
  };

  const handleAllPress = () => {
    onCategorySelect(null);
  };

  const renderCategoryButton = (category: VideoCategory) => {
    const isSelected = selectedCategory === category.id;
    
    return (
      <TouchableOpacity
        key={category.id}
        style={[
          styles.categoryButton,
          isSelected && styles.categoryButtonSelected,
        ]}
        onPress={() => handleCategoryPress(category.id)}
        activeOpacity={0.8}
      >
        {isSelected ? (
          <LinearGradient
            colors={[category.color, `${category.color}CC`]}
            style={styles.categoryGradient}
          >
            <Text style={styles.categoryIcon}>{getCategoryIcon(category.icon)}</Text>
            <Text style={[styles.categoryText, styles.categoryTextSelected]}>
              {category.name}
            </Text>
          </LinearGradient>
        ) : (
          <View style={[styles.categoryContent, { borderColor: category.color }]}>
            <Text style={styles.categoryIcon}>{getCategoryIcon(category.icon)}</Text>
            <Text style={[styles.categoryText, { color: category.color }]}>
              {category.name}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderAllButton = () => {
    const isSelected = selectedCategory === null;
    
    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          styles.allButton,
          isSelected && styles.allButtonSelected,
        ]}
        onPress={handleAllPress}
        activeOpacity={0.8}
      >
        {isSelected ? (
          <LinearGradient
            colors={COLORS.GRADIENT_PRIMARY}
            style={styles.categoryGradient}
          >
            <Text style={styles.categoryIcon}>🌟</Text>
            <Text style={[styles.categoryText, styles.categoryTextSelected]}>
              All Videos
            </Text>
          </LinearGradient>
        ) : (
          <View style={[styles.categoryContent, { borderColor: COLORS.PRIMARY }]}>
            <Text style={styles.categoryIcon}>🌟</Text>
            <Text style={[styles.categoryText, { color: COLORS.PRIMARY }]}>
              All Videos
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {renderAllButton()}
        {categories
          .filter((category) => category.isActive)
          .map((category) => renderCategoryButton(category))}
      </ScrollView>
    </View>
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
    music: '🎵',
    science: '🔬',
    art: '🖌️',
    language: '💬',
    math: '➕',
    nature: '🌳',
    social: '🤝',
    sports: '⚽',
    culture: '🏛️',
  };
  
  return iconMap[iconName] || '📺';
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SURFACE,
    paddingVertical: SPACING.SMALL,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingHorizontal: SPACING.MEDIUM,
    alignItems: 'center',
  },
  categoryButton: {
    marginRight: SPACING.SMALL,
    borderRadius: BORDER_RADIUS.MEDIUM,
    overflow: 'hidden',
  },
  allButton: {
    marginRight: SPACING.MEDIUM,
  },
  categoryButtonSelected: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  allButtonSelected: {
    shadowColor: COLORS.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  categoryGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    minHeight: 44,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    borderWidth: 2,
    borderRadius: BORDER_RADIUS.MEDIUM,
    backgroundColor: COLORS.SURFACE,
    minHeight: 44,
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: SPACING.SMALL,
  },
  categoryText: {
    fontSize: FONTS.SIZE.MEDIUM,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: COLORS.SURFACE,
    fontWeight: FONTS.WEIGHT.BOLD,
  },
});

export default CategoryFilter;