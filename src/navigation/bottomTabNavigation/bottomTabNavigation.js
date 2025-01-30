import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Svg from '../../asstets/images/svg'; // Import SVG icons
import { theme } from '../../utils';
import HomeScreen from '../../screen/HomeScreen';
import HistoryScreen from '../../screen/HistoryScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconColor = isFocused ? theme.lightColor.brownColor : 'gray';
        const textColor = isFocused ? theme.lightColor.brownColor : 'gray';
        const borderColor = isFocused ? theme.lightColor.brownColor : 'transparent';

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabBarItem, { borderTopColor: borderColor }]}>
            {options.tabBarIcon && options.tabBarIcon({ color: iconColor, size: 24 })}
            <Text style={{ color: textColor, fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Ensure this is placed here
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        tabBarIcon: ({ color, size }) => <Svg.HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Svg.ComplianceIcon color={color} size={size} />,
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: theme.lightColor.whiteColor,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
    borderTopColor: '#F2F3F5',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    backgroundColor:'#fff',
  },
  tabBarItem: {
    width: theme.horizontalSpacing.space_64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderTopWidth: 3,
  },
});
