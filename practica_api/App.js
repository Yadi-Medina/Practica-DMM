import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import CharacterCard from './components/CharacterCard';
import { getCharacters } from './components/api';
import { Picker } from '@react-native-picker/picker';
import styles from './styles/styles';

const App = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    displayCharacters();
  }, [nameFilter, statusFilter]);

  const displayCharacters = async () => {
    const charactersData = await getCharacters(nameFilter, statusFilter);
    setCharacters(charactersData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Rick y Morty</Text>
      <View style={styles.filters}>
        <TextInput
          style={styles.input}
          placeholder="Filtrado por nombre"
          value={nameFilter}
          onChangeText={setNameFilter}
        />
        <Picker
          style={styles.input}
          selectedValue={statusFilter}
          onValueChange={(itemValue) => setStatusFilter(itemValue)}
        >
          <Picker.Item label="Filtrar por estado" value="" />
          <Picker.Item label="Vivo" value="alive" />
          <Picker.Item label="Muerto" value="dead" />
          <Picker.Item label="Desconocido" value="unknown" />
        </Picker>
      </View>
      <ScrollView contentContainerStyle={styles.charactersContainer}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;