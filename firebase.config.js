import firebase from '@react-native-firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyCVPZtYFcKRjJ1mmTjW_vusv4LaCTYlv_c',
  authDomain: 'test1-2f353.firebaseapp.com',
  databaseURL: 'https://test1-2f353.firebaseio.com',
  projectId: 'test1-2f353',
  storageBucket: 'test1-2f353.appspot.com',
  messagingSenderId: '673501858058',
  appId: '1:673501858058:web:35ac84d6fd5dbdb28812f3',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
