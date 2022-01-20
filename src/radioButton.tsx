import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RadioButtonProps} from './types';

export default function RadiotButton({disabled, onClick, id}: RadioButtonProps) {


  function onPress() {
    return !disabled ? onClick(id) : null
    //get button id and func from parents
  }

  return (
  <Pressable
    onPress={onPress}
  >
    <View>

    </View>
  </Pressable>);

}
