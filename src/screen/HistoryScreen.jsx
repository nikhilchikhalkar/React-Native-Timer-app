import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTimers } from '../context/TimerContext';
import { theme } from '../utils';

const HistoryScreen = () => {
  const { history } = useTimers();

  const renderHistoryItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.historyItem}>
        <Text style={styles.timerName}>{item.name}</Text>
        <Text style={styles.completionTime}>Completed at: {item.completionTime}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer History</Text>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f7f7f7', // Light background color
    padding: theme.verticalSpacing.space_20,
  },
  title: {
    fontSize: theme.fontSizes.size_32,
    fontWeight: '600',
    color: '#2d3e50', 
    marginBottom: theme.verticalSpacing.space_20,
    textAlign: 'center',
    textTransform: 'uppercase', 
  },
  cardContainer: {
    marginBottom: theme.verticalSpacing.space_20, 
    borderRadius: theme.boderRadius.xxxlarge_16, 
    overflow: 'hidden', 
    backgroundColor: '#fff', 
    shadowColor: theme.lightColor.gray, 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.15, 
    shadowRadius: theme.boderRadius.xxxlarge_16, 
    elevation: 9, 
  },
  historyItem: {
    padding: theme.horizontalSpacing.space_20, 
    borderRadius: theme.boderRadius.xxxlarge_16, 
  },
  timerName: {
    fontSize: theme.fontSizes.size_16,
    fontWeight: '600',
    color: '#2d3e50', 
  },
  completionTime: {
    fontSize: theme.fontSizes.size_14,
    color: theme.darkModeColor.darkVariantColor,
    marginTop: theme.verticalSpacing.space_6, 
  },
});

export default HistoryScreen;
