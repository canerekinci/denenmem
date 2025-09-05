import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { RootStackParamList } from '../types';

// Import screens (we'll create these)
import HomeScreen from '../screens/home/HomeScreen';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

/**
 * Navigation Component - Main app navigation structure
 * Child-friendly tab navigation with colorful icons
 */
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = focused ? '🏠' : '🏡';
                break;
              case 'Categories':
                iconName = focused ? '📚' : '📖';
                break;
              case 'Profile':
                iconName = focused ? '👤' : '👥';
                break;
              default:
                iconName = '📱';
            }

            return (
              <View style={styles.tabIconContainer}>
                <Text style={[styles.tabIcon, { fontSize: size }]}>
                  {iconName}
                </Text>
                {focused && <View style={styles.tabIndicator} />}
              </View>
            );
          },
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.TEXT_SECONDARY,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: COLORS.TEXT_PRIMARY,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'KIDFLIX AI',
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerLogo}>🌟 KIDFLIX AI</Text>
                <Text style={styles.headerSubtitle}>Safe & Fun Learning</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Categories',
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerLogo}>📚 Categories</Text>
                <Text style={styles.headerSubtitle}>Explore Learning Topics</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'My Profile',
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerLogo}>👤 My Profile</Text>
                <Text style={styles.headerSubtitle}>Your Learning Journey</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.SURFACE,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    height: 80,
    paddingBottom: SPACING.SMALL,
    paddingTop: SPACING.SMALL,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    marginBottom: 2,
  },
  tabIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.PRIMARY,
    marginTop: 2,
  },
  tabLabel: {
    fontSize: FONTS.SIZE.SMALL,
    fontWeight: FONTS.WEIGHT.MEDIUM,
    marginTop: 2,
  },
  header: {
    backgroundColor: COLORS.SURFACE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerLogo: {
    fontSize: FONTS.SIZE.XLARGE,
    fontWeight: FONTS.WEIGHT.BOLD,
    color: COLORS.PRIMARY,
  },
  headerSubtitle: {
    fontSize: FONTS.SIZE.SMALL,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 2,
  },
});

export default AppNavigation;