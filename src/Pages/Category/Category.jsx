import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import moment from 'moment';
import { FaEye, FaRegBookmark, FaShareAlt , FaStar , FaRegStar} from 'react-icons/fa';
import './Category.css'
import Rating from 'react-rating';


const Category = ({ category }) => {
    const { image_url, title, details, total_view, author, rating, _id } = category
    return (
        <Card className='my-5'>
            <Card.Header className='d-flex justify-content-between px-3 align-items-center'>
                <div className='d-flex'>
                    <div>
                        <img className='w-75 rounded-circle author-image' src={author.img} alt="" />
                    </div>
                    <div className=''>
                        <p className='fw-bold'>{author.name}</p>
                        <p>{moment(author?.published_date).format("YYYY-MM-D")}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 fw-bold'>
                    <p> <FaRegBookmark /> </p>
                    <p> <FaShareAlt /> </p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-4' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? details : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-decoration-none text-danger fw-bold'>Read more</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Header className='d-flex justify-content-between px-3 align-items-center'>
                <div className='d-flex gap-3 '>
                    <Rating
                        placeholderRating={rating.number}
                        // readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p>{rating.number}</p>
                </div>
                <div className='d-flex align-items-center gap-2 fw-bold'>
                    <p> <FaEye /> </p>
                    <p>{total_view}</p>
                </div>
            </Card.Header>
        </Card>
    );
};

export default Category;