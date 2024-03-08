import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const HomeScreen = () => {
  const [selectedName, setSelectedName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const names = ['John', 'Jane', 'Doe', 'Alice', 'Bob', 'groovy'];

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleNameSelection = name => {
    setSelectedName(name);
    setDropdownOpen(false);
  };

  const renderNameItem = ({item}) => (
    <TouchableOpacity onPress={() => handleNameSelection(item)}>
      <Text
        style={[
          styles.dropdownItem,
          selectedName === item && styles.selectedItem,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.dropdownWrapper}>
          <TouchableOpacity onPress={toggleDropdown}>
            <TextInput
              style={styles.textInput}
              placeholder="Select a name..."
              value={selectedName}
              editable={false}
            />
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.dropdownContainer}>
              <View style={styles.searchBoxContainer}>
                <TextInput
                  style={styles.searchBox}
                  placeholder="Search names..."
                  value={searchQuery}
                  onChangeText={text => setSearchQuery(text)}
                />
              </View>
              <ScrollView style={styles.dropdownList}>
                <FlatList
                  data={filteredNames}
                  renderItem={renderNameItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownWrapper: {
    position: 'relative',
    width: '100%',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    width: '100%',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dropdownContainer: {
    position: 'absolute',
    top: -190,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    maxHeight: 200,
    overflow: 'hidden',
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  searchBoxContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'White',
  },
  searchBox: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    width: '100%',
  },
  dropdownList: {
    maxHeight: 100,
  },
  dropdownItem: {
    fontSize: 16,
    marginBottom: 10,
    padding: 12,
    paddingLeft: 16,
    backgroundColor: '#f0f0f0',
    color: 'black',
  },
  selectedItem: {
    backgroundColor: 'blue',
    color: 'white',
  },
};

export default HomeScreen;
