import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelUser, setModelUser] = useState(false);

  useEffect(() => {
    getListTeacher();
  }, []);
  const getListTeacher = () => {
    fetch('http://192.168.0.103:8000/users', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setList(res);
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // 192.168.0.103
  const handleRemove = item => {
    setLoading(true);
    fetch(`http://192.168.0.103:8000/users/${item.id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to delete user');
        }
        return res.json();
      })
      .then(() => {
        console.log('User deleted successfully');
        getListTeacher();
      })
      .catch(err => {
        console.log('Error deleting user:', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleCreate = () => {
    setModelUser(true);
  };
  const handleCloseModal = () => {
    setModelUser(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modelUser}>
        <SafeAreaView>
          <View style={styles.head}>
            <Text>Add New User</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <Text>TestModel</Text>
          <Text>TestModel</Text>
          <Text>TestModel</Text>
        </SafeAreaView>
      </Modal>

      <View style={styles.head}>
        <Text style={styles.txtMain}>User List {list.length}</Text>
        <TouchableOpacity style={{padding: 10}} onPress={handleCreate}>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>NEW</Text>
        </TouchableOpacity>
      </View>
      {
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}>
          {list.map((item, index) => (
            <View style={styles.rowBetween} key={index}>
              <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.userImage} />
                <View style={styles.itemContent}>
                  <Text style={styles.textName}>{item.firstName}</Text>
                  <Text style={styles.text}>{item.lastName}</Text>
                  <Text style={styles.text}>{item.gender}</Text>
                  <Text style={styles.text}>{item.phone}</Text>
                  <Text style={styles.text}>{item.email}</Text>
                  <Text style={styles.text}>{item.username}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => handleRemove(item)}
                  disabled={loading}>
                  <Text style={styles.txtDelete}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    backgroundColor: '#21788D',
    marginTop: 6,
    marginHorizontal: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  container: {backgroundColor: '#FFFFFF'},
  txtMain: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 10,
    borderWidth: 0.3,
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 14,
    alignItems: 'center',

    // borderWidth: 1,

    padding: 9,
  },
  itemContent: {
    justifyContent: 'center',
    fontSize: 12,
  },
  textName: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 13,
  },
  txtDelete: {
    color: '#FF0000',
  },
  Btn: {
    margin: 10,
    // padding: 3,
    // paddingHorizontal: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    backgroundColor: '#21788D',
    borderRadius: 14,
  },
});
