import React from 'react';
import Text from '../Text';
import {Image, StyleSheet, View} from 'react-native';
import theme from '../../theme';

const infoStyle = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  pictureContainer:{
    flexGrow: 0,
    paddingRight: 15,
    margin:10,
  },
  profilePic:{
    width: 50,
    borderRadius: 10,
    height: 50
  },
  infoContainer:{
    flexGrow:1,
    alignSelf:'center',
    flexShrink:1
  },
  language:{
    marginTop:5,
    padding:7,
    backgroundColor: theme.colors.primary,
    maxWidth:100,
    borderRadius:5,
    color:'white'
  },
});

const RepositoryInfo = ({repository}) =>{
  return(
    <View style={infoStyle.container}>
      <View style={infoStyle.pictureContainer}>
        <Image style={infoStyle.profilePic} source={{
          uri: repository.ownerAvatarUrl,
          }}/>
      </View>
      <View style={infoStyle.infoContainer}>
        <Text fontSize='subheading' fontWeight='bold'>{repository.fullName}</Text>
        <Text>{repository.description}</Text>
        <Text style={infoStyle.language}>{repository.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryInfo;