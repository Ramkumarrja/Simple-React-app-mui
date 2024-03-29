import {  CheckBox, Favorite, Margin, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


const Feed = () => {
    return (
        <Box  flex={4} p={2}>
            <Card sx={{margin:5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
                            R
                        </Avatar>
                        }
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
                    height="20%"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                    <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed