import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { List, Map } from 'immutable';
import { Text, Button, View, CheckBox, TextInput } from 'react-native';
import { database } from '../../../configFirebase';

const mapStateToProps = (state) => ({
  user: state.auth.userInfo.user,
})

@connect(mapStateToProps)
class AddNoteComponent extends PureComponent {
   state = {
    description: '',
    amount: '0',
    isInc: false,
  }

  handleBack = () => this.props.navigation.goBack();

  handleAddNote = () => {
   const { description, amount, isInc } = this.state;
   const { user } = this.props;

    const note = Map({
      id: v4(),
      category: 'all',
      date: new Date().getTime(),
      currency: 'BYN',
      isInc,
      amount,
      description,
    });

    //database.ref('notes').set(note.toJS());
    database.ref(`notes/${user.id}`).push(note.toJS());
    this.props.addNote({ note });
    this.handleBack();
  }

  handleCheckboxChange = (value) => this.setState({ isInc: value });

  getNotes = () => {
    const { user } = this.props;

    const starCountRef = database.ref(`notes/${user.id}`);
    starCountRef.on('value', function(snapshot) {
      const notes = Object.values(snapshot.val()).map((item) => {
        return Map(item);
      });
      console.log(notes);
      return List(notes);
    });
  }

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
        <Button title="getNotes" onPress={this.getNotes} />
      </View>
    );
  }
}

export { AddNoteComponent };
