import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/project1.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem',
        margin: '5rem auto'
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
         <Navbar />   
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="140"
                            image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                As a QA Engineer validated functionality of the web application and created documenttion
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>                  
                </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="140"
                            image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                As a QA Engineer validated functionality of the web application and created documenttion
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="140"
                            image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 3
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                As a QA Engineer validated functionality of the web application and created documenttion
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="140"
                            image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 4
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                As a QA Engineer validated functionality of the web application and created documenttion
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>          
                </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
