import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Abilities: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Abilities</Text>
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

export default Abilities;
