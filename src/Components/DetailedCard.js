// import { Card, CardBody, CardText, CardSubtitle, CardTitle } from "reactstrap";
import Card from "react-bootstrap/Card";

const DetailedCard = ({ movie }) => {
    const { title, image, year, description, director } = movie;
    //     return (
    //         <Card
    //             color="dark"
    //             inverse
    //             style={{
    //                 width: "18rem",
    //             }}
    //         >
    //             <img alt={`${title} poster`} src={image} />
    //             <CardBody>
    //                 <CardTitle tag="h5">{title}</CardTitle>
    //                 <CardSubtitle className="mb-2 text-muted" tag="h6">
    //                     {year}
    //                 </CardSubtitle>
    //                 <CardText>{truncateDescription(description)}...</CardText>
    //             </CardBody>
    //         </Card>
    //     );
    // };

    return (
        <Card className="bg-dark text-white">
            <Card.Img src={image} alt={title} />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{director}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default DetailedCard;
