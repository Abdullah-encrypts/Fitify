import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Pedometer } from 'expo-sensors';

const PedometerFile = () => {

  const [stepCount, setStepCount] = useState(0);
  useEffect(() => {
    let subscription;
  
    const startPedometer = async () => {
      try {
        const isAvailable = await Pedometer.isAvailableAsync();
        console.log('Is Pedometer Available:', isAvailable);
  
        subscription = Pedometer.watchStepCount((result) => {
          console.log('Pedometer Update:', result.steps);
          setStepCount(result.steps);
        });
      } catch (error) {
        console.error('Pedometer Error:', error);
      }
    };
  
    startPedometer();
  
    // Cleanup the subscription when component unmounts
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);
  

  return (

    <Text>{stepCount} </Text>
  )
}

export default PedometerFile;