import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import firestore from '@react-native-firebase/firestore';

const image = {
  uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg',
};

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [pickedImage, setPickedImage] = useState();

  const saveData=()=>{
    firestore()
      .collection('Users')
      .add({
        email: email,
        password: password,
        userName:userName,
        type:type
      })
      .then(() => {
        console.log('User added!');
      });
  }

  // const Sign = async config => {
  //   return await axios
  //     .request(config)
  //     .then(response => {
  //       return response.data;
  //     })
  //     .catch(error => {
  //       Toast.show({
  //         type: 'error',
  //         text1: error.message,
  //       });
  //       console.log(error);
  //     });
  // };
  // const cropImage = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     setPickedImage(image);
  //   });
  // };
  // const HandleSignUp = async () => {
  //   console.log('name:', userName);
  //   console.log('email:', email);
  //   console.log('password:', password);
  //   console.log('usertype:', type);
  //   console.log('image:', pickedImage.mime);
  //   console.log('image:', pickedImage.path);

  //   let data = new FormData();
  //   data.append('name', userName);
  //   data.append('email', email);
  //   data.append('password', password);
  //   data.append('user_type', type);
  //   data.append('profileImage', {
  //     name: 'image',
  //     type: pickedImage.mime,
  //     uri: pickedImage.path,
  //   });

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'http://54.172.115.72:3000/user/register',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     data: data,
  //   };
  //   const response = await Sign(config);
  //   console.log('response=>>>>>>>>>>', response);
  //   response.success == true
  //     ? navigation.navigate('Login')
  //     : Toast.show({
  //         type: 'error',
  //         text1: error.message,
  //       });
  // };

  return (
    <ImageBackground
      source={image}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Fontisto name="person" size={100} />
      <View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            marginTop: 100,
            alignItems: 'center',
            width: '90%',
          }}>
          <Fontisto name="person" size={20} />
          <TextInput
            placeholder="username"
            onChangeText={setUserName}
            value={userName}
            style={{textAlign: 'center', width: '90%', fontSize: 25}}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
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
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            width: '90%',
          }}>
          <MaterialCommunityIcons name="email" size={20} />
          <TextInput
            placeholder="Email"
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
            marginTop: 10,
            alignItems: 'center',
            width: '90%',
          }}>
          <EvilIcons name="calendar" size={20} />
          <TextInput
            placeholder="User Type"
            onChangeText={setType}
            value={type}
            style={{textAlign: 'center', width: '90%', fontSize: 25}}
          />
        </View>
        {/* <TouchableOpacity
          onPress={cropImage}
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            width: '90%',
          }}>
          <AntDesign name="upload" size={20} />
          <Text style={{fontSize: 20, marginLeft: 25}}>Upload Image</Text>
        </TouchableOpacity> */}
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
          <Entypo name="add-user" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row',justifyContent:"center",alignItems:"center",marginTop:30}}>
          <Text style={{fontSize:20,textAlign:"center"}}>Don't have an account?</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={{
              borderRadius: 10,
              paddingHorizontal: 5,
            }}><Text style={{fontSize:20,}}>Login</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
