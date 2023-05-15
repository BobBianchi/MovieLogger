import { Card, CardBody, CardText, CardSubtitle, CardTitle } from "reactstrap";
import { truncateDescription } from "../app/utils/truncateDescription";

const MovieCard = (props) => {
    return (
        <Card
            color="dark"
            inverse
            style={{
                width: "18rem",
            }}
        >
            <img alt={`${props.movie.title} poster`} src={props.movie.image} />
            <CardBody>
                <CardTitle tag="h5">{props.movie.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {props.movie.year}
                </CardSubtitle>
                <CardText>
                    {truncateDescription(props.movie.description)}...
                </CardText>
            </CardBody>
        </Card>
    );
};

export default MovieCard;
