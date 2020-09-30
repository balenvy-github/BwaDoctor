import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <ProfileItem label="No. STR" value="00001162081996" />
        <View style={styles.action}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
    paddingBottom: 40,
  },
});
