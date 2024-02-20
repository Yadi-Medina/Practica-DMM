import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.characterCard}>
      <Image style={styles.image} source={{ uri: character.image }} />
      <Text>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Especie: {character.species}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  characterCard: {
    width: 200,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default CharacterCard;