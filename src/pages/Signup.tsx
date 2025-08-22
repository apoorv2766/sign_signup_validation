import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./SignUp.module.css";
import { useAuthForms } from "../store/useAuthForms"; 
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const navigate = useNavigate();

  const {
    name,
    username,
    email,
    phone,
    password,
    confirmPassword,
    errors,
    setField,
    validateSignup,
    resetSignup,
  } = useAuthForms();


  const handleSubmit = () => {
    const valid = validateSignup();
    if (!valid) return;

    console.log("success:", {
      name,
      username,
      email,
      phone,
      password,
      confirmPassword,
    });

    resetSignup();
  };

  return (
    <Box className={styles.container}>
      {/* Header */}
      <Box className={styles.header}>
        <Typography variant="h6">Create new Account</Typography>
      </Box>

      {/* Form */}
      <Box className={styles.formWrapper}>
        <Box className={styles.formBox}>
          {/* Row 1 */}
          <Box className={styles.row}>
            <TextField
              placeholder="NAME"
              variant="standard"
              fullWidth
              value={name}
              onChange={(e) => setField("name", e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
            />
            <TextField
              placeholder="USERNAME"
              variant="standard"
              fullWidth
              value={username}
              onChange={(e) => setField("username", e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
            />
          </Box>

          {/* Row 2 */}
          <Box className={styles.row}>
            <TextField
              placeholder="EMAIL"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => setField("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
            />
            <TextField
              placeholder="PHONE NO."
              variant="standard"
              fullWidth
              value={phone}
              onChange={(e) => setField("phone", e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
            />
          </Box>

          {/* Row 3 */}
          <Box className={styles.row}>
            <TextField
              placeholder="NEW PASSWORD"
              type={showPassword ? "text" : "password"}
              variant="standard"
              fullWidth
              value={password}
              onChange={(e) => setField("password", e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="CONFIRM NEW PASSWORD"
              type={showConfirmPassword ? "text" : "password"}
              variant="standard"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setField("confirmPassword", e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{
                "& .MuiInputBase-root": {
                  px: 1,
                  borderRadius: 1,
                  backgroundColor: "#f5f5f5",
                  height: "60px",
                  width: "90%",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Button */}
          <Box className={styles.buttonRow}>
            <Button
              variant="contained"
              onClick={() => {
                if (validateSignup()) {
                  alert("Account Created Successfully!");
                  resetSignup();
                   navigate("/login");
                }
              }}
              sx={{
                backgroundColor: "#00695c",
                borderRadius: 2,
                px: 10,
                "&:hover": { backgroundColor: "#004d40" },
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
