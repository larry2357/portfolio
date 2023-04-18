import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/11tenths.jpg";
import project2 from "../images/billingserv.jpg";
import project3 from "../images/dscvr.jpg";
import project4 from "../images/learnt.jpg";
import project5 from "../images/privatemaklaren.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "11tenths.ca",
    description: `React, Next.js, Material UI`,
    image: project1,
    link: "https://11tenths.ca"
  },
  {
    name: "billingserv.com",
    description: `Vue.js, Bootstrap`,
    image: project2,
    link: "https://billingserv.com"
  },
  {
    name: "dscvr.one",
    description: `Vue.js, Rust`,
    image: project3,
    link: "https://dscvr.one"
  },
  {
    name: "learnt.io",
    description: `Angular`,
    image: project4,
    link: "https://learnt.io"
  },
  {
    name: "privatmaklaren.se",
    description: `React, Next.js, Material UI`,
    image: project5,
    link: "https://privatmaklaren.se"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="250"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
