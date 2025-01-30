// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { useTimers } from '../context/TimerContext';
// import { ProgressBar } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';
// import CustomTextInput from '../reusableComponents/customTextInput/customTextInput';
// import { theme } from '../utils';
// import CustomButton from '../reusableComponents/button/button';
// import * as Svg from '../asstets/images/svg';

// const HomeScreen = ({ navigation }) => {
//   const { timers, categories, addTimer, startTimer, pauseTimer, resetTimer, deleteTimer, bulkAction } = useTimers();
//   const [name, setName] = useState('');
//   const [duration, setDuration] = useState('');
//   const [category, setCategory] = useState(categories[0]);

//   const handleSave = () => {
//     if (!name || !duration) {
//       Alert.alert('Please fill in all fields');
//       return;
//     }
//     addTimer(name, duration, category);
//     setName('');
//     setDuration('');
//   };

//   // Grouping timers by category
//   const groupedTimers = timers.reduce((acc, timer) => {
//     (acc[timer.category] = acc[timer.category] || []).push(timer);
//     return acc;
//   }, {});

//   const renderItem = ({ item }) => (
//     <View style={styles.timerItem}>
//       <Text style={styles.timerName}>{item.name}</Text>
//       <Text style={styles.timerTime}>Remaining: {item.remainingTime}s</Text>
//       <ProgressBar
//         progress={(item.duration - item.remainingTime) / item.duration}
//         color="#4caf50"
//         style={styles.progressBar}
//       />
//       <Text style={styles.timerStatus}>Status: {item.status}</Text>
      
//       {/* Show buttons for timers based on status */}
//       {item.status === 'Paused' && (
//         <View style={styles.buttonContainer}>
//            <CustomButton  
//               title={'Start'}
//               onPress={() => startTimer(item.id)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.startBtn]}
//               textStyle={styles.btnText}
//                />

//            <CustomButton  
//               title={'Reset'}
//               onPress={() => resetTimer(item.id)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.resetBtn]}
//               textStyle={styles.btnText}
//                />
          
//         </View>
//       )}
//       {item.status === 'Running' && (
//         <View style={styles.buttonContainer}>
//            <CustomButton  
//               title={'Pause'}
//               onPress={() => pauseTimer(item.id)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.pauseBtn]}
//               textStyle={styles.btnText}
//                />

//            <CustomButton  
//               title={'Reset'}
//               onPress={() => resetTimer(item.id)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.resetBtn]}
//               textStyle={styles.btnText}
//                />
         
//         </View>
//       )}
      
//       {/* Delete icon after timer completes */}
//       {item.status === 'Completed' && (
       
//           <TouchableOpacity style={styles.deleteContainer}  onPress={() => deleteTimer(item.id)}>
//             <Svg.DeleteIcon />
//           <Text style={styles.deleteText}>Delete</Text>
//           </TouchableOpacity>
      
//       )}
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
     
//       <CustomTextInput
//       placeholder={"Timer Name"}
//       value={name}
//       onChangeText={setName}
//        />
//       <CustomTextInput
//         placeholder="Duration (in seconds)"
//         value={duration}
//         onChangeText={setDuration}
//         keyboardType="numeric"
       
//       />
//       <View style={styles.picker} >

//       <Picker
//         selectedValue={category}
//         onValueChange={setCategory}
        
//         >
//         {categories.map((cat) => (
//           <Picker.Item key={cat} label={cat} value={cat} />
//         ))}
//       </Picker>
//         </View>
//         <CustomButton  
//               title={'Save Timer'}
//               onPress={handleSave}
//               textColor = '#FFFFFF'
//               style={styles.saveBtn}
//               textStyle={styles.btnText}
//                />
    

//       {/* Bulk Actions */}
//       <View style={styles.bulkActions}>
//         {categories.map((cat) => (
//           <View key={cat} style={styles.bulkActionContainer}>
//             <Text style={styles.bulkActionText}>{cat} Category Actions:</Text>
//             <View style={styles.bulkButtons}>
//               <CustomButton  
//               title={'Start All'}
//               onPress={() => bulkAction('Start', cat)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.startBtn]}
//               textStyle={undefined}
//                />

//               <CustomButton  
//               title={'Start All'}
//               onPress={() => bulkAction('Pause', cat)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.pauseBtn]}
//               textStyle={undefined}
//                />

//               <CustomButton  
//               title={'Start All'}
//               onPress={() => bulkAction('Reset', cat)}
//               textColor = '#FFFFFF'
//               style={[styles.actionBtn, styles.resetBtn]}
//               textStyle={undefined}
//                />
             
//             </View>

//             <FlatList
//               data={groupedTimers[cat]}
//               renderItem={renderItem}
//               keyExtractor={(item) => item.id.toString()}
//             />
//           </View>
//         ))}
//       </View>

      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fafafa',
//     padding: theme.verticalSpacing.space_20,
//   },
//   scrollContent: {
//     paddingBottom: theme.verticalSpacing.space_40,
//   },
//   picker: {
//     // height: 50,
//     marginVertical: theme.verticalSpacing.space_10,
//     backgroundColor: theme.lightColor.lightGrayColor,
//     borderRadius: theme.boderRadius.xlarge_12,
//     color: '#000'
//   },
//   timerItem: {
//     padding: theme.verticalSpacing.space_14,
//     marginVertical: theme.verticalSpacing.space_10,
//     backgroundColor: '#ffffff',
//     borderRadius: theme.boderRadius.large_10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   timerName: {
//     fontSize: theme.fontSizes.size_18,
//     fontWeight: 'bold',
//   },
//   timerTime: {
//     fontSize: theme.fontSizes.size_14,
//     color: theme.lightColor.gray,
//   },
//   progressBar: {
//     marginVertical: theme.verticalSpacing.space_10,
//     height: theme.verticalSpacing.space_6,
//     borderRadius: theme.boderRadius.medium_8,
//   },
//   timerStatus: {
//     fontSize: theme.fontSizes.size_14,
//     color: '#2196f3',
//   },
//   buttonContainer: {
//     flexDirection:'row',
//     marginVertical: theme.verticalSpacing.space_10,
//     gap: theme.horizontalSpacing.space_10
//   },
//   bulkActions: {
//     marginVertical: theme.verticalSpacing.space_20,
//   },
//   bulkActionContainer: {
//     marginBottom: theme.verticalSpacing.space_16,
//   },
//   bulkActionText: {
//     fontWeight: 'bold',
//     marginBottom: theme.verticalSpacing.space_6,
//   },
//   bulkButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: theme.verticalSpacing.space_14,
//   },
//   actionBtn: {
//     paddingVertical: theme.verticalSpacing.space_12,
//     paddingHorizontal: theme.horizontalSpacing.space_20,
//     borderRadius: theme.boderRadius.large_10,
//     width: '30%',
//     alignItems: 'center',
//   },
//   startBtn: {
//     backgroundColor: theme.darkModeColor.successColor,
//   },
//   pauseBtn: {
//     backgroundColor: '#ff9800',
//   },
//   resetBtn: {
//     backgroundColor: '#f44336',
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: theme.fontSizes.size_16,
//     fontWeight: 'bold',
//   },
//   deleteContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: theme.verticalSpacing.space_10,
//   },
//   deleteText: {
//     marginLeft: theme.horizontalSpacing.space_6,
//     color: '#f44336',
//     fontWeight: 'bold',
//   },
//   saveBtn: {
//     backgroundColor: theme.darkModeColor.successColor,
//     paddingVertical: theme.verticalSpacing.space_12,
//     paddingHorizontal: theme.horizontalSpacing.space_20,
//     borderRadius: theme.boderRadius.large_10,
//     marginVertical: theme.verticalSpacing.space_10,
//     alignItems: 'center',
//   },

// });

// export default HomeScreen;



























import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useTimers } from '../context/TimerContext';
import { ProgressBar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import CustomTextInput from '../reusableComponents/customTextInput/customTextInput';
import { theme } from '../utils';
import CustomButton from '../reusableComponents/button/button';
import * as Svg from '../asstets/images/svg';

const HomeScreen = ({ navigation }) => {
  const { timers, categories, addTimer, startTimer, pauseTimer, resetTimer, deleteTimer, bulkAction } = useTimers();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState(categories[0]);

  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [completedTimer, setCompletedTimer] = useState(null);  // Store the completed timer

  const handleSave = () => {
    if (!name || !duration) {
      Alert.alert('Please fill in all fields');
      return;
    }
    addTimer(name, duration, category);
    setName('');
    setDuration('');
  };

  // Grouping timers by category
  const groupedTimers = timers.reduce((acc, timer) => {
    (acc[timer.category] = acc[timer.category] || []).push(timer);
    return acc;
  }, {});

  // Automatically show modal when a timer is completed
  useEffect(() => {
    const completedTimers = timers.filter(timer => timer.status === 'Completed');
    if (completedTimers.length > 0) {
      setCompletedTimer(completedTimers[0]);
      setModalVisible(true); // Show modal for the first completed timer
    }
  }, [timers]); // Runs whenever the timers array changes

  const renderItem = ({ item }) => (
    <View style={styles.timerItem}>
      <Text style={styles.timerName}>{item.name}</Text>
      <Text style={styles.timerTime}>Remaining: {item.remainingTime}s</Text>
      <ProgressBar
        progress={(item.duration - item.remainingTime) / item.duration}
        color="#4caf50"
        style={styles.progressBar}
      />
      <Text style={styles.timerStatus}>Status: {item.status}</Text>
      
      {/* Show buttons for timers based on status */}
      {item.status === 'Paused' && (
        <View style={styles.buttonContainer}>
          <CustomButton  
            title={'Start'}
            onPress={() => startTimer(item.id)}
            textColor = '#FFFFFF'
            style={[styles.actionBtn, styles.startBtn]}
            textStyle={styles.btnText}
          />
          <CustomButton  
            title={'Reset'}
            onPress={() => resetTimer(item.id)}
            textColor = '#FFFFFF'
            style={[styles.actionBtn, styles.resetBtn]}
            textStyle={styles.btnText}
          />
        </View>
      )}
      {item.status === 'Running' && (
        <View style={styles.buttonContainer}>
          <CustomButton  
            title={'Pause'}
            onPress={() => pauseTimer(item.id)}
            textColor = '#FFFFFF'
            style={[styles.actionBtn, styles.pauseBtn]}
            textStyle={styles.btnText}
          />
          <CustomButton  
            title={'Reset'}
            onPress={() => resetTimer(item.id)}
            textColor = '#FFFFFF'
            style={[styles.actionBtn, styles.resetBtn]}
            textStyle={styles.btnText}
          />
        </View>
      )}
      
      {/* Show delete option for completed timers */}
      {item.status === 'Completed' && (
        <TouchableOpacity style={styles.deleteContainer} onPress={() => {
          deleteTimer(item.id);
          setCompletedTimer(item);  // Set the completed timer to show in the modal
        }}>
          <Svg.DeleteIcon />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <CustomTextInput
        placeholder={"Timer Name"}
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        placeholder="Duration (in seconds)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <View style={styles.picker}>
        <Picker
          selectedValue={category}
          onValueChange={setCategory}
        >
          {categories.map((cat) => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>
      <CustomButton  
        title={'Save Timer'}
        onPress={handleSave}
        textColor = '#FFFFFF'
        style={styles.saveBtn}
        textStyle={styles.btnText}
      />
    
      {/* Bulk Actions */}
      <View style={styles.bulkActions}>
        {categories.map((cat) => (
          <View key={cat} style={styles.bulkActionContainer}>
            <Text style={styles.bulkActionText}>{cat} Category Actions:</Text>
            <View style={styles.bulkButtons}>
              <CustomButton  
                title={'Start All'}
                onPress={() => bulkAction('Start', cat)}
                textColor = '#FFFFFF'
                style={[styles.actionBtn, styles.startBtn]}
                textStyle={undefined}
              />
              <CustomButton  
                title={'Pause All'}
                onPress={() => bulkAction('Pause', cat)}
                textColor = '#FFFFFF'
                style={[styles.actionBtn, styles.pauseBtn]}
                textStyle={undefined}
              />
              <CustomButton  
                title={'Reset All'}
                onPress={() => bulkAction('Reset', cat)}
                textColor = '#FFFFFF'
                style={[styles.actionBtn, styles.resetBtn]}
                textStyle={undefined}
              />
            </View>

            <FlatList
              data={groupedTimers[cat]}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        ))}
      </View>

      {/* Modal to show Congratulations message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.congratulationText}>
              Congratulations! Timer Completed: {completedTimer?.name}
            </Text>
            <CustomButton
              title={'Close'}
              onPress={() => setModalVisible(false)} // Close modal
              textColor='#FFFFFF'
              style={styles.closeBtn}
              textStyle={styles.btnText}
            />
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    padding: theme.verticalSpacing.space_20,
  },
  scrollContent: {
    paddingBottom: theme.verticalSpacing.space_40,
  },
  picker: {
    marginVertical: theme.verticalSpacing.space_10,
    backgroundColor: theme.lightColor.lightGrayColor,
    borderRadius: theme.boderRadius.xlarge_12,
    color: '#000'
  },
  timerItem: {
    padding: theme.verticalSpacing.space_14,
    marginVertical: theme.verticalSpacing.space_10,
    backgroundColor: '#ffffff',
    borderRadius: theme.boderRadius.large_10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  timerName: {
    fontSize: theme.fontSizes.size_18,
    fontWeight: 'bold',
  },
  timerTime: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
  },
  progressBar: {
    marginVertical: theme.verticalSpacing.space_10,
    height: theme.verticalSpacing.space_6,
    borderRadius: theme.boderRadius.medium_8,
  },
  timerStatus: {
    fontSize: theme.fontSizes.size_14,
    color: '#2196f3',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: theme.verticalSpacing.space_10,
    gap: theme.horizontalSpacing.space_10
  },
  bulkActions: {
    marginVertical: theme.verticalSpacing.space_20,
  },
  bulkActionContainer: {
    marginBottom: theme.verticalSpacing.space_16,
  },
  bulkActionText: {
    fontWeight: 'bold',
    marginBottom: theme.verticalSpacing.space_6,
  },
  bulkButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.verticalSpacing.space_14,
  },
  actionBtn: {
    paddingVertical: theme.verticalSpacing.space_12,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.large_10,
    width: '30%',
    alignItems: 'center',
  },
  startBtn: {
    backgroundColor: theme.darkModeColor.successColor,
  },
  pauseBtn: {
    backgroundColor: '#ff9800',
  },
  resetBtn: {
    backgroundColor: '#f44336',
  },
  btnText: {
    color: '#fff',
    fontSize: theme.fontSizes.size_16,
    fontWeight: 'bold',
  },
  deleteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.verticalSpacing.space_10,
  },
  deleteText: {
    marginLeft: theme.horizontalSpacing.space_6,
    color: '#f44336',
    fontWeight: 'bold',
  },
  saveBtn: {
    backgroundColor: theme.darkModeColor.successColor,
    paddingVertical: theme.verticalSpacing.space_12,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.large_10,
    marginVertical: theme.verticalSpacing.space_10,
    alignItems: 'center',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  congratulationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  closeBtn: {
    backgroundColor: '#4CAF50',
    width: theme.horizontalSpacing.space_90,
  }
});

export default HomeScreen;
