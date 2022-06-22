import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import {
  Card,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";

const FavCard = ({ card }) => {
  return (
    <Card>
      <CardHeader
        title={card.title}
        subheader={card.category}
        action={
          <IconButton>
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
