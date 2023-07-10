import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMatched, setIsMatched] = useState(true); // Added state to track if the strings match

  const handleLogin = () => {
    // Perform the string matching
    const correctUsername = 'abdullah';
    const correctPassword = 'pakistan123';

    if (username === correctUsername && password === correctPassword) {
      setIsMatched(true);
      navigation.navigate('MyActivities');
    } else {
      setIsMatched(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Fitness{"\n"}You Wanna {"\n"}Have</Text>
        <Image source={require('./assets/images/yoga_lady.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.loginTitle}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <View style={styles.inputSeparator} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <View style={styles.inputSeparator} />
          {!isMatched && <Text style={styles.errorText}>Invalid username or password</Text>}
          <View style={styles.row}>
            <Text style={styles.forgotLink}>Forgot Details?</Text>
            <Text style={styles.createAccountLink}>Create Account</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.loginButton, !isMatched && styles.disabledLoginButton]} // Added style for disabled login button
          onPress={handleLogin}
          disabled={!isMatched} // Disable the login button if strings don't match
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    paddingTop: 70,
    width: '100%',
    height: '75%',
    backgroundColor: '#909FFF',
  },
  title: {
    marginLeft: 35,
    marginTop: 30,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    position: 'absolute',
    top: 200,
    left: 80,
    right: 0,
    width: '60%',
    height: '60%',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
  },
  form: {
    minHeight: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 2,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginTop:10,
    marginBottom: 5,
  },
  inputSeparator: {
    borderBottomColor: 'rgba(158, 158, 158, 0.5)',
    borderBottomWidth: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  forgotLink: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
  },
  createAccountLink: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2963F6',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#2963F6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default LoginScreen;
