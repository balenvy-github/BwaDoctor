import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  Fire,
} from '../../assets';
import {ILHospitalBG} from '../../assets/illustration';
import {ListHospital} from '../../components/';
import {colors, fonts, showError} from '../../utils';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospital/')
      .once('value')
      .then((res) => {
        console.log('data hospital : ', res.val());
        if (res.val()) {
          setHospital(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.img_background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <ScrollView style={styles.content}>
        {hospital.map((item) => {
          return (
            <ListHospital
              key={item.id}
              type={item.tipe}
              name={item.nama}
              address={item.alamat}
              pic={{uri: item.image}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  img_background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
});
