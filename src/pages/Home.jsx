import React, { useState } from "react";
import FavCard from "../components/FavCard";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginLeft: 250,
  },
}));

function Home() {
  const classes = useStyles();
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Batman",
      category: "movie",
      detail: "A great movie",
    },
    {
      id: 2,
      title: "Book2",
      category: "book",
      detail: "A great Book",
    },
  ]);
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {notes.map((note) => {
          return (
            <Grid item xs={12} md={6} lg={3}>
              <FavCard card={note} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;
