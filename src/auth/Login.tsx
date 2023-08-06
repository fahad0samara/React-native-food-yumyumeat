
import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { login } from '../Redux/Auth/authThunks';


interface data {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [formData, setFormData] = useState<data>({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate(); // You can use navigation logic here if needed
  const {isAuthenticated, error, loading, isAdmin} = useSelector(
    (state: any) => state.auth
  );

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      console.log("Please fill in all fields");
      return;
    }

    try {
      await dispatch(login(formData));
      console.log("Logging in with:", formData.email, formData.password);
      
    } catch (error) {
      console.error("Login error:", error);
    }

    // Clear the form data after submission
    setFormData({email: "", password: ""});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={formData.email}
        onChangeText={text => handleChange("email", text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={text => handleChange("password", text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginScreen;
