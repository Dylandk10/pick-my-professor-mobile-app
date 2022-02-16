import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
const SignUp = () => {

    const [name, changeName] = useState("");

  return (
     <View>
         <Text>Name</Text>
         <TextInput
         onChangeText={changeName}
         value={name} 
         />
     </View> 
  );
};

export default SignUp;