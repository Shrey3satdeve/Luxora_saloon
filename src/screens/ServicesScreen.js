import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const services = [
  { id: '1', name: 'Haircut', description: 'Professional haircut service', price: 30 },
  { id: '2', name: 'Facial', description: 'Relaxing facial treatment', price: 50 },
  { id: '3', name: 'Makeup', description: 'Makeup for special occasions', price: 70 },
  { id: '4', name: 'Fashion Consultation', description: 'Personal fashion advice', price: 100 },
];

const categorizeServices = (services) => {
  const categories = {
    'Budget-Friendly Finds': [],
    'Mid-Range Classics': [],
    'Luxury Picks': [],
  };

  services.forEach(service => {
    if (service.price <= 50) {
      categories['Budget-Friendly Finds'].push(service);
    } else if (service.price <= 100) {
      categories['Mid-Range Classics'].push(service);
    } else {
      categories['Luxury Picks'].push(service);
    }
  });

  return categories;
};

const ServicesScreen = () => {
  const categorizedServices = categorizeServices(services);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Services</Text>
      {Object.keys(categorizedServices).map(category => (
        <View key={category}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <FlatList
            data={categorizedServices[category]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.serviceItem}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.serviceDescription}>{item.description}</Text>
                <Text style={styles.servicePrice}>${item.price}</Text>
              </View>
            )}
          />
        </View>
      ))}
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
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  serviceItem: {
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#666',
  },
  servicePrice: {
    fontSize: 16,
    color: '#000',
  },
});

export default ServicesScreen;
