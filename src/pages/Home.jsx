import React, { useContext } from "react";
import FavCard from "../components/FavCard";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FavContext } from "../contexts/FavContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginLeft: 250,
  },
}));

function Home() {
  const classes = useStyles();
  const { fav } = useContext(FavContext);
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {fav.map((note) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={note.id}>
              <FavCard card={note} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;
