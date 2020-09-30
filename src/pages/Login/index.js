import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Address" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={30} />
        <Button
          title="Sign In"
          size={16}
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={30} />
        <Link
          title="Create New Account"
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 40,
    maxWidth: 155,
  },
});
