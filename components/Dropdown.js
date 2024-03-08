import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

const Dropdown = ({data, visible, searchQuery, setSearchQuery, onSelect}) => {
  const renderNameItem = ({item}) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text style={styles.dropdownItem}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.dropdownContainer}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search names..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {visible && (
        <ScrollView style={styles.dropdownList}>
          <FlatList
            data={data}
            renderItem={renderNameItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = {
  dropdownContainer: {
    position: 'absolute',
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    maxHeight: 150,
    overflow: 'hidden',
    marginBottom: 30,
  },
  searchBoxContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  dropdownList: {
    maxHeight: 100,
  },
  dropdownItem: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
};

export default Dropdown;
