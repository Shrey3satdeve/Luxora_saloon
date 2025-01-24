import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking details:', { name, email, phone, date, time, service, stylist, timeSlot });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Picker
        selectedValue={service}
        style={styles.input}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Picker.Item label="Select Service" value="" />
        <Picker.Item label="Haircut" value="haircut" />
        <Picker.Item label="Facial" value="facial" />
        <Picker.Item label="Makeup" value="makeup" />
        <Picker.Item label="Fashion Consultation" value="fashion_consultation" />
      </Picker>
      <Picker
        selectedValue={stylist}
        style={styles.input}
        onValueChange={(itemValue) => setStylist(itemValue)}
      >
        <Picker.Item label="Select Stylist" value="" />
        <Picker.Item label="Stylist 1" value="stylist1" />
        <Picker.Item label="Stylist 2" value="stylist2" />
        <Picker.Item label="Stylist 3" value="stylist3" />
      </Picker>
      <Picker
        selectedValue={timeSlot}
        style={styles.input}
        onValueChange={(itemValue) => setTimeSlot(itemValue)}
      >
        <Picker.Item label="Select Time Slot" value="" />
        <Picker.Item label="10:00 AM" value="10am" />
        <Picker.Item label="11:00 AM" value="11am" />
        <Picker.Item label="12:00 PM" value="12pm" />
        <Picker.Item label="01:00 PM" value="1pm" />
      </Picker>
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default BookingForm;
