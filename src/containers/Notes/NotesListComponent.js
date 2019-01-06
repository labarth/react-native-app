import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { NotesListItem } from './NotesListItem';

class NotesListComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { notes } = this.props;

    return (
      <ScrollView>
        {notes.map((item) => (
          <NotesListItem item={item} key={item.get('id')} />
        ))}
      </ScrollView>
    );
  }
}



export { NotesListComponent };
