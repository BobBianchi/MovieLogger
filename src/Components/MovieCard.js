import { Card, CardBody, CardText, CardSubtitle, CardTitle } from "reactstrap";
import { truncateDescription } from "../app/utils/truncateDescription";

const MovieCard = ({ movie }) => {
    const {title, image, year, description, director} = movie
    return (
        <Card
            color="dark"
            inverse
            style={{
                width: "18rem",
            }}
        >
            <img alt={`${title} poster`} src={image} />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {year}
                </CardSubtitle>
                <CardText>{truncateDescription(description)}...</CardText>
            </CardBody>
        </Card>
    );
};

export default MovieCard;
