import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { Avatar } from 'react-native-elements';
import MyPicture from '../assets/images/avatar.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const COLORS = {
  light: {
    background: '#f2f2f2',
    header: '#007bff',
    text: '#000',
    button: '#dc3545',
    buttonText: '#fff',
  },
  dark: {
    background: '#121212',
    header: '#1f1f1f',
    text: '#f2f2f2',
    button: '#ff5a5f',
    buttonText: '#fff',
  },
};

const UserProfile = () => {
  const [user] = useState({
    name: 'Rodel Madrid',
    address: 'Lawesbra, Lapasan CDOC',
    email: 'biboymadrid81@gmail.com',
    phonenumber: '09619325548',
    bio: 'Chances are low, but never zero.',
    profilePicture: MyPicture,
    joinedDate: '5 months ago',
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  const showAlert = (message) => Alert.alert(message);

  const renderText = (label, value) => (
    <>
      <Text style={[styles.infoLabel, { color: isDarkMode ? '#bbbbbb' : '#333' }]}>{label}:</Text>
      <Text style={[styles.infoText, { color: isDarkMode ? '#f2f2f2' : '#333' }]}>{value}</Text>
    </>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? COLORS.dark.background : COLORS.light.background }]}>
      <View style={[styles.header, { backgroundColor: isDarkMode ? COLORS.dark.header : COLORS.light.header }]}>
        <Avatar rounded size="xlarge" source={user.profilePicture} containerStyle={styles.avatar} />
        <Text style={[styles.name, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.name}</Text>
        <Text style={[styles.joinedText, { color: isDarkMode ? '#cccccc' : '#fff' }]}>Joined {user.joinedDate}</Text>

        <TouchableOpacity onPress={() => showAlert('Edit Profile Pressed')}>
          <Text style={[styles.editText, isDarkMode ? styles.editTextDark : styles.editTextLight]}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showAlert('Settings Pressed')} style={styles.settingsContainer}>
          <Icon name="settings-outline" size={30} color={isDarkMode ? '#00ffcc' : '#000080'} />
        </TouchableOpacity>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={[styles.infoLabel, { color: isDarkMode ? '#bbbbbb' : '#333' }]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          accessibilityLabel="Toggle Dark Mode"
        />
      </View>

      <View style={[styles.infoSection, { backgroundColor: isDarkMode ? '#333333' : '#fff' }]}>
        {renderText('Email', user.email)}
        {renderText('Phone', user.phonenumber)}
        {renderText('Bio', user.bio)}
        {renderText('Address', user.address)}
      </View>

      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={[styles.signOutButton, { backgroundColor: isDarkMode ? COLORS.dark.button : COLORS.light.button }]} onPress={() => showAlert('Sign Out Pressed')}>
          <Text style={[styles.buttonText, { color: isDarkMode ? COLORS.dark.buttonText : COLORS.light.buttonText }]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  joinedText: {
    fontSize: 16,
    marginTop: 5,
  },
  infoSection: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  signOutButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  editText: {
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  editTextLight: {
    color: '#000080', 
  },
  editTextDark: {
    color: '#00ffcc',
  },
  settingsContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default UserProfile;
