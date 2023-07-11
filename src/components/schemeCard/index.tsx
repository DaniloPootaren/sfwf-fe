import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import { ArrowForward, Info } from "@mui/icons-material";
import { Scheme } from "../../models";
import { getImageUrl } from "../../utils";

import { keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Ellipsis = styled("div")`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  height: 80,
  overflow: "hidden",
  animation: `${fade} 1s linear`,
}));

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

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const SchemeCard = (props: { scheme: Scheme }) => {
  const { scheme } = props;
  const imageUrl = getImageUrl(
    scheme?.attributes?.image?.data?.length
      ? scheme?.attributes?.image?.data[0]?.attributes?.url
      : ""
  );
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate(`/home/application/${scheme.id}`);
  };

  return (
    <MyCard>
      <CardMedia component="img" height="140" image={imageUrl} alt="Image" />
      <MyCardContent>
        <Title variant="h5">{scheme.attributes.title}</Title>
        <Description variant="body2" color="textSecondary">
          <Ellipsis>{scheme.attributes.description}</Ellipsis>
        </Description>
        <ButtonContainer>
          <Button startIcon={<Info />} variant="outlined" color="primary">
            Learn More
          </Button>
          <Button
            startIcon={<ArrowForward />}
            variant="contained"
            color="primary"
            onClick={handleApplyNowClick}
          >
            Apply Now
          </Button>
        </ButtonContainer>
      </MyCardContent>
    </MyCard>
  );
};

export default SchemeCard;
