import {useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar, AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import './reviewPage.css';
import CustomModal from '../components/ui/CustomModal';

function ReviewPage() {
  const [showReviewInputs, setShowReviewInputs] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0); 
  const [hoveredStar, setHoveredStar] = useState(0); 
  const [reviewCount, setReviewCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);
  const [error, setError] = useState('');
  const [expandedReviews, setExpandedReviews] = useState([]);
  const topContainer = useRef();
  const reviewRef = useRef(null);
  const formRef = useRef(null)


  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);
  const [formData, setFormData] = useState({
    title: '',
    review: '',
    name: '',
    email: '',
    verified: '',
  });
  const [reviews, setReviews] = useState([]);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(null);

  const handleWriteReview = () => {
    setShowReviewInputs(!showReviewInputs);
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStarClick = (index) => {
    setSelectedStars(index);
  };

  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleConfirmation = (message, callback) => {
    setShowConfirmation(true);
    setConfirmMessage(message);
    setConfirmCallback(() => callback);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  if (selectedStars === 0) {
    const alertDiv = document.querySelector('.alert');
    if (alertDiv) {
      alertDiv.classList.add('show');
    }
    return;
  }
  handleConfirmation('Are you sure you want to post this review?', async () => {
      try {
        const response = await fetch('https://ethiohikingcommunity.com/api/review/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, stars: selectedStars }),
        });
        if (response.ok) {
          const data = await response.json();
          setReviews([data, ...reviews]);
          setShowReviewInputs(false);
          setFormData({
            title: '',
            review: '',
            name: '',
            email: '',
            verified: '',
          });
          setSelectedStars(0);
        } else {
          console.error('Failed to add review');
        }
      } catch (error) {
        setError('There was an error posting your review. Please try again later.');
        console.error('Error:', error);
      }
    });
  };

  const handleNextPage = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(currentPage + 1);
    };
    const handlePrevPage = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(currentPage - 1);
    };
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://ethiohikingcommunity.com/api/review/api/reviews');
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchReviews();
  }, []);
  useEffect(() => {
        const fetchReviewCount = async () => {
            try {
                const response = await fetch('https://ethiohikingcommunity.com/api/review/api/reviews/count');
                if (response.ok) {
                    const data = await response.json();
                    setReviewCount(data.count);
                } else {
                    console.error('Failed to fetch review count');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchReviewCount();
    }, []);

    useEffect(() => {
    const fetchAverageRating = async () => {
        try {
            const response = await fetch('https://ethiohikingcommunity.com/api/review/api/reviews/average-rating');
            if (response.ok) {
                const data = await response.json();
                setAverageRating(data.averageRating);
            } else {
                console.error('Failed to fetch average rating');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchAverageRating();
}, []);

  const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
    };

  return (
    <div className="review-container" ref={topContainer}>
      <div>
        <h1 className="main-heading">Traveler Reviews</h1>
      </div>
      <div className='google-reviews'>
      <p className='section-content'>We're proud to have been rated 5 stars by all travelers on <NavLink to={'https://www.google.com/search?hl=en-ET&gl=et&q=Ethio+Hiking+community,+S+Africa+St,+Addis+Ababa+1165&ludocid=877864100642163029&lsig=AB86z5X8V9xflQlw1LbtWn8tNKrj#ip=1'}>
    Google<FaStar className="star-btn"/> 
  </NavLink>, a testament to our dedication to providing exceptional service and unforgettable experiences. </p> 
  
      </div>
      <div className="line" ref={formRef}></div>
      <p className="section-content desc">
        Read reviews from our amazing travelers. We’re sure you’ll be inspired
        to travel with us!
      </p>
      <div className="star-rev">
        <div className="stats section-content">
    <p>Total Reviews: {reviewCount}</p>
    <p>Rating: {averageRating.toFixed(1)} out of 5</p>
</div>
        <button className="write-review submit-btn" onClick={handleWriteReview}>
          Write A Review
        </button>
      </div>
      <div className="line"></div>
      <div className="line"></div>

      {showReviewInputs && (
        <div className="review-inputs">
          <div >
            <div >
              <div className='spans'>
                <span className='red'>*</span> <span >Indicates a required field</span>
              </div>
              <div>
                <div className='span-stur'>
                  <div className="spans">
                  <span className='red'>*</span> <span className='score'>Score:</span>
                </div>
                <div className="stur">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <div
                        className="star"
                        key={index}
                        onClick={() => handleStarClick(ratingValue)}
                        onMouseEnter={() => handleStarHover(ratingValue)}
                        onMouseLeave={() => setHoveredStar(selectedStars)}
                      >
                        {index < selectedStars || index < hoveredStar ? (
                          <FaStar color="goldenrod" />
                        ) : (
                          <AiOutlineStar />
                        )}
                      </div>
                    );
                  })}
                  <p className="alert">
                ! Please give at least one star 
                  </p>
                </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="review-form">
              <div>
                <div className="spans">
                <span>Title:</span>
                </div>
                <div className='form-group'>
                  <input
                    className="review-title rev-input"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="spans">
                  <span className='red'>*</span> <span>Review:</span>
                </div>
                <div className='form-group'>
                  <textarea
                  required
                    className='rev-input'
                    type="text"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="inputs">
                <div>
                  <div className="spans">
                    <span className='red'>*</span> <span>Name:</span>
                  </div>
                  <div className='form-group'>
                    <input
                    required
                      className='rev-input'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className='spans'>
                    <span className='red'>*</span> <span>Email:</span>
                  </div>
                  <div className='form-group'>
                    <input
                    required
                    className='rev-input'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              {error && <p className="error-text">{error}</p>}
              <div className="post">
                <button type="submit">POST</button>
              </div>
            </form>
            {showConfirmation && (
        <CustomModal
          message={confirmMessage}
          onConfirm={() => {
            confirmCallback();
            handleConfirmationClose();
          }}
          onCancel={handleConfirmationClose}
        />
      )}
          </div>
        </div>
      )}
      <div className="reviews" ref={reviewRef} >
        {currentReviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="name-date">
              <div className='name-avatar'>
              <div className="user-avatar">{getInitials(review.name)}</div>
            <div className='render-review'>
              <strong>{review.name}</strong> 
            </div>
            <div className='render-review'>
              <p>{review.verified}</p> 
            </div>
            </div>
            <div className='render-review date'>
                <span>{formatDate(review.date)}</span> 
                </div>                  
            </div>
            <div className='render-review'>
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < review.stars ? (
                            <FaStar color="goldenrod" />
                        ) : (
                            <AiOutlineStar />
                        )}
                    </span>
                ))}
            </div>
            <div className='render-review'>
              <strong>{review.title}</strong> 
            </div>
            <div className='render-review main-review'>
                            <span>
                                {expandedReviews.includes(index) || review.review.length <= 400
                                    ? review.review
                                    : review.review.substring(0, 400) + '...'}
                            </span>
                            {review.review.length > 400 && (
                                <span className='more-review' onClick={() => setExpandedReviews(prevState => {
                                    if (prevState.includes(index)) {
                                        return prevState.filter(item => item !== index);
                                    } else {
                                        return [...prevState, index];
                                    }
                                })}>
                                    {expandedReviews.includes(index) ? 'READ LESS' : 'READ MORE'}
                                </span>
                            )}
                        </div>
          </div>
        ))}
        {reviews.length > reviewsPerPage && (
                <div className="pagination">
                    {currentPage > 1 && (
            <button className='arrow-left' onClick={handlePrevPage}>
              <AiOutlineArrowLeft />  Prev
            </button>
        )}
        {indexOfLastReview < reviews.length && (
            <button className='arrow-right' onClick={handleNextPage}>
              Next  <AiOutlineArrowRight />
            </button>
        )}
            </div>
            )}
      </div>
    </div>
  );
}

export default ReviewPage;
