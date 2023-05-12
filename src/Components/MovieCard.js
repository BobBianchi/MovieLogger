import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MovieCard = (props) => {
    return (
        <Card>
            <CardImg
                width="200ems"
                src={props.movie.image}
                alt={props.movie.name}
            />
            <CardImgOverlay>
                <CardTitle>
                    {props.movie.name} ({props.movie.year})
                </CardTitle>
                <CardBody>{props.movie.director}</CardBody>
            </CardImgOverlay>
        </Card>
    );
};

export default MovieCard;
