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
  const [availableTimeSlot, setAvailableTimeSlot] = useState('');

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking details:', { name, email, phone, date, time, service, stylist, availableTimeSlot });
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
        style={styles.picker}
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
        style={styles.picker}
        onValueChange={(itemValue) => setStylist(itemValue)}
      >
        <Picker.Item label="Select Stylist" value="" />
        <Picker.Item label="Stylist A" value="stylist_a" />
        <Picker.Item label="Stylist B" value="stylist_b" />
        <Picker.Item label="Stylist C" value="stylist_c" />
      </Picker>
      <Picker
        selectedValue={availableTimeSlot}
        style={styles.picker}
        onValueChange={(itemValue) => setAvailableTimeSlot(itemValue)}
      >
        <Picker.Item label="Select Time Slot" value="" />
        <Picker.Item label="10:00 AM" value="10:00_am" />
        <Picker.Item label="11:00 AM" value="11:00_am" />
        <Picker.Item label="12:00 PM" value="12:00_pm" />
        <Picker.Item label="01:00 PM" value="01:00_pm" />
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
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default BookingForm;
