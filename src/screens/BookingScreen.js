import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookingForm from '../components/BookingForm';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <BookingForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default BookingScreen;
