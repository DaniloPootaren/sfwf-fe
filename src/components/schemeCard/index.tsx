import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  ArrowForward,
  Info,
} from "@mui/icons-material";

const MyCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
  borderRadius: theme.spacing(0),
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
}));

const MyCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const SchemeCard = () => {
  return (
    <MyCard>
      <CardMedia
        component="img"
        height="140"
        image="https://www.eeas.europa.eu/sites/default/files/styles/hero_inside_content2/public/2020/06/23/gcca-mca_rev.jpg?itok=VIT8GgMG"
        alt="Image"
      />
      <MyCardContent>
        <Title variant="h5">Card Title</Title>
        <Description variant="body2" color="textSecondary">
          This is a description of the card. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Description>
        <ButtonContainer>
          <Button startIcon={<Info />} variant="outlined" color="primary">
            Learn More
          </Button>
          <Button
            startIcon={<ArrowForward />}
            variant="contained"
            color="primary"
          >
            Apply Now
          </Button>
        </ButtonContainer>
      </MyCardContent>
    </MyCard>
  );
};

export default SchemeCard;
