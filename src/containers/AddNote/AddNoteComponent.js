import React, { PureComponent } from 'react';
import { v4 } from 'uuid';
import { Map } from 'immutable';
import { Text, Button, View, CheckBox, TextInput } from 'react-native';

class AddNoteComponent extends PureComponent {
   state = {
    description: '',
    amount: '0',
    isInc: false,
  }

  handleBack = () => this.props.navigation.goBack();

  handleAddNote = () => {
   const { description, amount, isInc } = this.state;

    const note = Map({
      id: v4(),
      category: 'all',
      date: new Date(),
      currency: 'BYN',
      isInc,
      amount,
      description,
    });

    this.props.addNote({ note });
    this.handleBack();
  }

  handleCheckboxChange = (value) => this.setState({ isInc: value });

  render() {
    const { description, amount, isInc } = this.state;

    return (
      <View>
        <Button title="disabled" onPress={this.handleBack} />
        <Text>AddNote</Text>
        <CheckBox
          value={isInc}
          onValueChange={this.handleCheckboxChange}
        />
        <TextInput
          onChangeText={(text) => this.setState({ amount: text })}
          value={amount}
          placeholder="Сумма"
          style={{
            borderColor: 'gray', borderWidth: 1
          }}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ description: text })}
          value={description}
          placeholder="Описание..."
          style={{
            borderColor: 'gray', borderWidth: 1
          }}
        />
        <Button title="Добавить" onPress={this.handleAddNote} />
      </View>
    );
  }
}

export { AddNoteComponent };
