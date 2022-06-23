import { useContext } from "react";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import {
  Card,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FavContext } from "../contexts/FavContext";

const useStyles = makeStyles((theme) => ({
  root: {
    border: (card) => {
      if (card.category === "movie") {
        return "2px solid yellow";
      }
      if (card.category === "book") {
        return "2px solid red";
      }

      return "2px solid green";
    },
  },
}));

const FavCard = ({ card }) => {
  const { dispatch } = useContext(FavContext);
  const classes = useStyles(card);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={card.title}
        subheader={card.category}
        action={
          <IconButton
            onClick={() =>
              dispatch({
                type: "REMOVE_FAV",
                id: card.id,
              })
            }
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body">{card.detail}</Typography>
      </CardContent>
    </Card>
  );
};

export default FavCard;
