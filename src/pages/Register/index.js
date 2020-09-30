import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Fire} from '../../assets';
import {Button, Gap, Input} from '../../components/atoms';
import {Header, Loading} from '../../components/molecules';
import {getData, useForm, storeData} from '../../utils';
import {colors} from '../../utils/colors';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    //navigation.navigate('UploadPhoto')
    // console.log(fullName, profession, email, password);
    // console.log(form);
    // ==============================================================

    // async storage

    // getData('user').then((res) => {
    //   console.log('data: ', res);
    // });

    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');

        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };

        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto');
        console.log('register success', success);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;

        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('error register', error);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="daftar akun" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
