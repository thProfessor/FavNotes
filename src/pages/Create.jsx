import { useContext } from "react";
import {
  TextField,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FavContext } from "../contexts/FavContext";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.secondary.main,
    padding: 10,
  },
  root: {
    marginTop: 100,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
}));

const Create = () => {
  const { dispatch } = useContext(FavContext);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("book");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    if (!title) {
      setTitleError(true);
    }
    if (!detail) {
      setDetailError(true);
    }

    if (title && detail) {
      dispatch({
        type: "ADD_FAV",
        sfav: {
          title,
          detail,
          category,
        },
      });
    }
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h3">Create a Fav</Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
        className={classes.form}
      >
        <TextField
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          onChange={(e) => setDetail(e.target.value)}
          error={detailError}
        />
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="movie" control={<Radio />} label="Movie" />
          <FormControlLabel value="song" control={<Radio />} label="Song" />
          <FormControlLabel value="book" control={<Radio />} label="Book" />
        </RadioGroup>

        <Button type="submit" className={classes.btn} variant="contained">
          submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
