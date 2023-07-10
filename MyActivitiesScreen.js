import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import PedometerFile from './PedometerFile';

const MyActivitiesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/icons/menu.png')} />
        <Image source={require('./assets/icons/avatar.png')} />
      </View>
      <Text style={styles.title}>My Activities</Text>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/icons/search.png')} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
          secureTextEntry
        />
      </View>
      <View style={styles.daysContainer}>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>Yearly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.activityContainer}>
        <View style={styles.activityCard}>
          <View style={styles.activityCardHeader}>
            <Text style={styles.activityCardTitle}>Steps</Text>
            <Image source={require('./assets/icons/Sneakers.png')} backgroundColor='purple'/>
          </View>
          <View style={styles.stepsContainer}>
            <Text style={styles.stepsText}><PedometerFile></PedometerFile></Text>
            <Text>steps</Text>
          </View>
        </View>
        <View style={styles.activityCard}>
          <View style={styles.activityCardHeader}>
            <Text style={styles.activityCardTitle}>Sleep</Text>
            <Image source={require('./assets/icons/doNotDisturb.png')} backgroundColor='white'/>
          </View>
          <Text style={styles.sleepText}>8:00h</Text>
        </View>
      </View>
      <View style={styles.activityContainer}>
      <View style={styles.activityCard}>
          <View style={styles.activityCardHeader}>
            <Text style={styles.activityCardTitle}>Heart</Text>
            <Image source={require('./assets/icons/Favorite.png')} backgroundColor='red'/>
          </View>
          <Image source={require('./assets/icons/heart_waves.png')} />
        </View>
        
        <View style={styles.activityCard}>
          <View style={styles.activityCardHeader}>
            <Text style={styles.activityCardTitle}>Kcal</Text>
            <Image source={require('./assets/icons/Calories.png')} backgroundColor='purple'/>
          </View>
          <View style={styles.kcalContainer}>
            <Text style={styles.kcalText}>375</Text>
            <Text style={styles.kcalUnit}>Kcal</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.mealsCard}>
        <Text style={styles.mealsCardTitle}>Daily Meals</Text>
        <Image source={require('./assets/icons/Salad.png')} backgroundColor='purple'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mealsCard}>
        <Text style={styles.mealsCardTitle}>Weekly Meals</Text>
        <Image source={require('./assets/icons/Info.png')} backgroundColor='purple'/>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#90C3FF',
    padding: 20,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dayButton: {
    backgroundColor: '#4179E1',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dayText: {
    fontWeight: 'bold',
    color: '#000',
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activityCard: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
  },
  activityCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepsContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  stepsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sleepText: {
    fontSize: 20,
  },
  kcalContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  kcalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  kcalUnit: {
    marginLeft: 5,
    fontSize: 14,
  },
  mealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealsCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  mealsCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default MyActivitiesScreen;
