import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Locations: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Locations</Text>
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
});

export default Locations;
