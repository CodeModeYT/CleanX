// import { navigateToHome } from '../KeyboardBlock';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';

// // Assuming this is part of a React component
// const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'KeyboardBlock'>>();

// export let timeLeft = 30;

// export function stopTimer() {
//     clearTimeout(timerId);
//     timeLeft = 0;
// }

// export function countdown() {
//     if (timeLeft === -1) {
//         stopTimer();
//         navigateToHome(navigation, stopTimer); // Pass the required arguments
//     } else {
//         timeLeft--;
//     }
// }

// export const timerId = setInterval(countdown, 1000);
