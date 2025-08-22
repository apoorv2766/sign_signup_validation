import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuthForms } from "../store/useAuthForms"; // ✅ use this instead of useAuthStore

const Login: React.FC = () => {
  const { loginUsername, loginPassword, setField, errors, validateLogin } = useAuthForms();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (validateLogin()) {
      console.log("Login with:", { loginUsername, loginPassword });
    } else {
      console.log("Validation failed", errors);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          bgcolor: "#00695c",
          color: "white",
          textAlign: "center",
          py: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Login
        </Typography>
        <Typography variant="subtitle1">Sign in to continue</Typography>
      </Box>

      {/* Form */}
      <Box sx={{ mt: 15, width: "350px" }}>
        <TextField
          label="USERNAME"
          variant="standard"
          fullWidth
          value={loginUsername}
          onChange={(e) => setField("loginUsername", e.target.value)}
          error={!!errors.loginUsername}
          helperText={errors.loginUsername}
          sx={{
            mb: 3,
            "& .MuiInputLabel-root": { color: "#00695c" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#00695c" },
            "& .MuiInput-underline:before": { borderBottomColor: "#00695c" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "#00695c" },
            "& .MuiInput-underline:after": { borderBottomColor: "#00695c" },
          }}
        />

        <TextField
          label="PASSWORD"
          type={showPassword ? "text" : "password"}
          variant="standard"
          fullWidth
          value={loginPassword}
          onChange={(e) => setField("loginPassword", e.target.value)}
          error={!!errors.loginPassword}
          helperText={errors.loginPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            "& .MuiInputLabel-root": { color: "#00695c" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#00695c" },
            "& .MuiInput-underline:before": { borderBottomColor: "#00695c" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "#00695c" },
            "& .MuiInput-underline:after": { borderBottomColor: "#00695c" },
          }}
        />

        {/* Login button */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            width: "40%",
            mx: "auto",
            display: "block",
            bgcolor: "#00695c",
            "&:hover": { bgcolor: "#004d40" },
          }}
          onClick={handleLogin}
        >
          LOGIN
        </Button>

        {/* Sign up link */}
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Don’t have Account?{" "}
          <a href="/signup" style={{   textDecoration: "underline",fontWeight: "bold" }}>
            SignUp
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
