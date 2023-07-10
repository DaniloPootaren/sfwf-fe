import { Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";



const Profile = () => {
  const _state = useSelector((state: any) => state);
  const { authentication } = _state;
  const data = authentication.data.me;

  return (
    <>
      <h1>Profile Management</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField label="Email" defaultValue={data.emailAddress} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="User Name" defaultValue={data.userName} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Name" defaultValue={data.name} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Surname" defaultValue={data.surname} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Surname at Birth"
            defaultValue={data.surnameAtBirth}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Gender" defaultValue={data.gender} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Date of Birth"
            defaultValue={data.dateOfBirth}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Is Citizen"
            defaultValue={data.isCitizen}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Address"
            defaultValue={data.address}
            fullWidth
          />
        </Grid>
        {/* Repeat the pattern for the remaining fields */}
        {/* Add more Grid items and TextFields as needed */}
      </Grid>
    </>
  );
};

export default Profile;
