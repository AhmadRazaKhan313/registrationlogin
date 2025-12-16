import { Alert, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/atoms/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = ({navigation}) => {

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('user')
      Alert.alert('Success', 'Logged out successfully')
      navigation.navigate('SignIn')
    } catch(error) {
      console.log('Error signing out:', error)
      Alert.alert('Error', 'Failed to log out')
    }
  }

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.HomeText}>Welcome to Home Screen</Text>
      <Button 
        title={"LogOut"}
        onPress={handleSignOut}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  HomeText: {
    fontSize: 20,
    alignSelf: "center", 
    paddingTop: 20,
    fontWeight: "900",
    marginBottom: 20
  }
})