import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IProps {
  label: string;
  onPress: () => void;
}

export const SubmitButton = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
