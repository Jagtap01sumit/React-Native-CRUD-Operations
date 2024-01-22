import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelUser, setModelUser] = useState(false);

  const [image, setImage] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [user_Id, setuser_Id] = useState(null);

  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    fetch(`http://192.168.0.103:8000/users`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setList(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
        alert(`${item.id} Deleted successfully `);
        console.log('User deleted successfully');
        getListUser();
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
  // const handleSave = () => {
  //   if (id === null) {
  //     fetch(`http://192.168.0.103:8000/users`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         username: username,
  //         firstName: firstName,
  //         lastName: lastName,
  //         gender: gender,
  //         phone: phone,
  //         image: image,
  //         email: email, // Include this line if email is required
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(res => {
  //         if (!res.ok) {
  //           throw new Error('Failed to create user');
  //         }
  //         return res.json();
  //       })
  //       .then(() => {
  //         console.log('User created successfully');
  //         resetDate();
  //         getListUser();
  //         setModelUser(false);
  //       })
  //       .catch(err => {
  //         console.log('Error create user:', err.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     fetch(`http://192.168.0.103:8000/users/`, {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         id: id,
  //         username: username,
  //         firstName: firstName,
  //         lastName: lastName,
  //         gender: gender,
  //         phone: phone,
  //         image: image,
  //         email: email,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(res => {
  //         if (!res.ok) {
  //           throw new Error('Failed to edit user');
  //         }
  //         return res.json();
  //       })
  //       .then(() => {
  //         console.log('User edit successfully');
  //         resetDate();
  //         getListUser();
  //         setModelUser(false);
  //       })
  //       .catch(err => {
  //         console.log('Error edit user:', err.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // };
  const handleSave = () => {
    fetch(`http://192.168.0.103:8000/users`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        phone: phone,
        image: image,
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to create user');
        }
        return res.json();
      })
      .then(() => {
        console.log('User created successfully');
        resetDate();
        getListUser();
        setModelUser(false);
      })
      .catch(err => {
        console.log('Error create user:', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const resetDate = () => {
    setEmail(''),
      setGender(''),
      setImage(''),
      setfirstName(''),
      setlastName(''),
      setPhone(''),
      setUsername('');
    setuser_Id(null);
  };
  const handleEdit = item => {
    setuser_Id(item.user_Id);
    console.log(item.user_Id);
    setEmail(item.email),
      setGender(item.gender),
      setImage(item.image),
      setfirstName(item.firstName),
      setlastName(item.lastName),
      setPhone(item.phone),
      setUsername(item.username);
    setModelUser(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modelUser}>
        <SafeAreaView>
          <View style={styles.head}>
            {user_Id === null ? (
              <Text style={styles.txtMain}>Add New Userr</Text>
            ) : (
              <Text style={styles.txtMain}>Update Userr</Text>
            )}
            <TouchableOpacity style={{padding: 10}} onPress={handleCloseModal}>
              <Text style={{fontWeight: 'bold'}}>Close</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: '#21788D',
            }}>
            <Text style={styles.inputTitle}>Profile Picture Link</Text>
            <TextInput
              style={styles.textInput}
              placeholder="https://...."
              value={image}
              onChangeText={text => setImage(text)}
            />
            <Text style={styles.inputTitle}>First Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Ex. sumit"
              value={firstName}
              onChangeText={text => setfirstName(text)}
            />
            <Text style={styles.inputTitle}>Last Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="lastName"
              value={lastName}
              onChangeText={text => setlastName(text)}
            />
            <Text style={styles.inputTitle}>Gender</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Male or Female"
              value={gender}
              onChangeText={text => setGender(text)}
            />
            <Text style={styles.inputTitle}>Phone</Text>
            <TextInput
              style={styles.textInput}
              placeholder="phone number"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={handleSave}>
            <Text
              style={{fontWeight: 'bold', margin: 10, paddingHorizontal: 10}}>
              Save
            </Text>
          </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => handleEdit(item)}
                  disabled={loading}>
                  <Text>Edit</Text>
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
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    backgroundColor: '#21788D',
    borderRadius: 14,
  },
  textClose: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#888',

    marginHorizontal: 10,
    marginBottom: 10,
    color: '#000000',
    backgroundColor: '#c8dadb',
    fontSize: 24,
  },
  inputTitle: {
    marginLeft: 10,
  },
  btnContainer: {
    borderWidth: 1,

    borderColor: 'green',
    backgroundColor: 'green',
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
