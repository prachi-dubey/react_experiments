import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PostModal from '../PostModal/postModal.jsx';
import postImage from "../../../../assets/Viator_Shutterstock.jpg";
import {Card, Avatar, CardContent, Typography, CardActions, CardHeader, CardMedia, IconButton} 
  from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles1 = makeStyles(theme => ({
  media: { height: 0, paddingTop: '56.25%'},
  avatar: { backgroundColor: red[500] },
}));

export default function Home() {
  const classes = useStyles1();
  console.log(" comming in home ");
  return (   
    <div> 
      <Card >
        <CardHeader
          avatar= { <Avatar aria-label="recipe" className={classes.avatar}> R </Avatar> }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={postImage}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card> 
      <PostModal />
    </div>
  );   
}

 