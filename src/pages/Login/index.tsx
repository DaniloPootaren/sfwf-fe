import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MaupassLogo from "../../assets/images/maupass-logo.svg";
import { authenticationAction } from "../../redux/actions";
import { useAppDispatch } from "../../redux";
import { useForm, SubmitHandler } from "react-hook-form";
import Spinner from "../../components/Loader";
import { useSelector } from "react-redux";

const { loginThunk } = authenticationAction;

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();
  const _state = useSelector((state: any) => state);
  const { authentication } = _state;
  const { loading } = authentication;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      dispatch(loginThunk(data));
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://sfwf.govmu.org/sfwf/wp-content/uploads/2022/11/home-page-background.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              padding: "25px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <img
              src={MaupassLogo}
              alt="maupass logo"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px", // Adjust this value as needed
              }}
            />
          </div>
          <Typography component="h1" variant="h6" mb={5}>
            Login With Maupass
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              {...register("email", { required: true })}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              {...register("password", { required: true })}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={Object.keys(errors).length > 0}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      {loading && <Spinner />}
    </Grid>
  );
}
