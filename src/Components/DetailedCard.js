// import { Card, CardBody, CardText, CardSubtitle, CardTitle } from "reactstrap";
import Card from "react-bootstrap/Card";

const DetailedCard = ({ movie }) => {
    const { title, image, year, description, director } = movie;
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={image} alt={title} />
            <Card.ImgOverlay>
                <Card.Title>
                    {title} ({year})
                </Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{director}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default DetailedCard;
