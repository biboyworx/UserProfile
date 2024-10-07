import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const avatar = require('../assets/images/avatar.jpg');
const HeaderBackground = require('../assets/images/neewheadeer.jpg');

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
    username: '@biboyworx',
    address: 'Lawesbra, Lapasan CDOC, Misamis Oriental, Philippines',
    email: 'biboymadrid81@gmail.com',
    phonenumber: '09619325548',
    bio: 'Chances are low, but never zero.',
    profilePicture: avatar,
    joinedDate: '5 months ago',
    posts: 20,
    followers: 127,
    following: 80,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  const showAlert = (message) => Alert.alert(message);

  const renderText = (label, value, icon) => (
    <View style={styles.infoRow}>
      <Icon name={icon} size={24} color={isDarkMode ? '#bbbbbb' : '#333'} />
      <View style={styles.infoTextContainer}>
        <Text style={[styles.infoLabel, { color: isDarkMode ? '#bbbbbb' : '#333' }]}>{label}:</Text>
        <Text style={[styles.infoText, { color: isDarkMode ? '#f2f2f2' : '#333' }]}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? COLORS.dark.background : COLORS.light.background }]}>
      <ImageBackground source={HeaderBackground} style={styles.headerBackground}>
        <View style={[styles.header, { backgroundColor: isDarkMode ? 'rgba(31, 31, 31, 0.5)' : 'transparent' }]}>
          <Avatar rounded size={95} source={user.profilePicture} containerStyle={styles.avatar} />
          <Text style={[styles.name, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.name}</Text>
          <Text style={[styles.username, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.username}</Text>
          <Text style={[styles.joinedText, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>Joined {user.joinedDate}</Text>

          <TouchableOpacity onPress={() => showAlert('Edit Profile Pressed')}>
            <Text style={[
              styles.editText,
              isDarkMode ? styles.editTextDarkMode : styles.editTextLightMode,
            ]}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => showAlert('Settings Pressed')} style={styles.settingsContainer}>
            <Icon name="settings-outline" size={30} color={isDarkMode ? '#007bff' : '#000080'} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.posts}</Text>
          <Text style={[styles.statLabel, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.followers}</Text>
          <Text style={[styles.statLabel, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>{user.following}</Text>
          <Text style={[styles.statLabel, { color: isDarkMode ? COLORS.dark.text : COLORS.light.text }]}>Following</Text>
        </View>
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
        {renderText('Email', user.email, 'mail-outline')}
        {renderText('Phone', user.phonenumber, 'call-outline')}
        {renderText('Bio', user.bio, 'person-outline')}
        {renderText('Address', user.address, 'home-outline')}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.signOutButton, { backgroundColor: isDarkMode ? COLORS.dark.button : COLORS.light.button }]}
          onPress={() => showAlert('Sign Out Pressed')}
        >
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
  headerBackground: {
    width: '100%',
    height: 250,
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
  username: {
    fontSize: 16,
    color: '#666',
  },
  joinedText: {
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#888',
  },
  infoSection: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoTextContainer: {
    marginLeft: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '600',
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
  editTextLightMode: {
    color: '#000080',
    fontWeight: 'normal', 
  },
  editTextDarkMode: {
    color: '#007bff', 
    fontWeight: 'bold', 
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
