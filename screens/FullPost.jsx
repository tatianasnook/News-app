import React from 'react';
import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route }) => {
  const {id, title, image, content} = route.params;


  return (
    <ScrollView style={{padding: 20}}>
      <PostTitle>{title}</PostTitle>
      <PostImage source={{uri: image}}/>
      <PostText>{content}</PostText>
    </ScrollView>
  )
}