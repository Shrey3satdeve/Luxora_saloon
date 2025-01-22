import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Beauty and Fashion App!</Text>
      <Button
        title="View Services"
        onPress={() => navigation.navigate('Services')}
      />
      <Button
        title="Book an Appointment"
        onPress={() => navigation.navigate('Booking')}
      />
      <Button
        title="View Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
