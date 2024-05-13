import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox
} from '@mui/material';

export const Post = () => {
  return (
    <Card sx={{margin : 5}}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
