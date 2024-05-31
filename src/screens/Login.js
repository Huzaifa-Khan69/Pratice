import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {login} from '../redux/AuthSlice';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const image = {
  uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg',
};
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          if (
            querySnapshot.docs[0]._data.email === email &&
            querySnapshot.docs[0]._data.password === password
          ){
            Alert.alert("Successfully Login")
          }else{
            Alert.alert("email or password is wrong")
          }
            
        } else {
          console.log('account not found');
        }
      })
      .catch(error => {
        console.log(error);
      });
    /* ... */
  };
  const createuser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const loginuser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('user data===>', res);
        Alert.alert('Logged In');
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const dispatch = useDispatch();
  // const handleinput = async () => {
  //   const data = {
  //     email: email,
  //     password: password,
  //   };
  //   console.log('data: ', data);
  //   let inputdata = JSON.stringify({
  //     email: data.email,
  //     password: data.password,
  //     expiresInMins: 30,
  //   });

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'http://54.172.115.72:3000/user/login',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: inputdata,
  //   };
  //   dispatch(await login(config));
  // };
  return (
    <ImageBackground
      source={image}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 50, textAlign: 'centre'}}>Huzaifa</Text>
      <View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            marginTop: 150,
            alignItems: 'center',
            width: '90%',
          }}>
          <Fontisto name="person" size={20} />
          <TextInput
            placeholder="username"
            onChangeText={setEmail}
            value={email}
            style={{textAlign: 'center', width: '90%', fontSize: 25}}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            width: '90%',
          }}>
          <MaterialIcons name="password" size={20} />
          <TextInput
            placeholder="password"
            onChangeText={setPassword}
            value={password}
            style={{textAlign: 'center', width: '90%', fontSize: 25}}
          />
        </View>
      </View>
      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          onPress={saveData}
          style={{
            elevation: 8,
            backgroundColor: '#009688',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 70,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{
            borderRadius: 10,
            paddingHorizontal: 5,
          }}>
          <Text style={{fontSize: 20}}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({});
