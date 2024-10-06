import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://www.iconfinder.com/icons/1218733/account_avatar_profile_user_icon.jpg' }} 
        style={styles.avatar} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center align the avatar
    marginBottom: 20, // Space below the avatar
  },
  avatar: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 50, // Makes the image circular
  },
});

export default Avatar;
