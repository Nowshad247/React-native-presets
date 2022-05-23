import { View } from "react-native";
import { colors } from "./src/theme/color";
import { spacing } from "./src/theme/spacing";
import { useFonts } from 'expo-font';
import Text from "./src/components/text";

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Regular': require('./assets/fonts/Antonio-Regular.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf')
  });

  if (!loaded) {
    return null;
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.warningText
        }}
      >
        <Text preset="h1">Universal React with Expo</Text>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: colors.warningBackground
      }}>
        <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center', padding: spacing[2] }}>Text</Text>
      </View>
    </>
  );
}
