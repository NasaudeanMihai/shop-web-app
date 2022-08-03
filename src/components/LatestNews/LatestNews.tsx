import { mockDataLatestNews } from './mockData';
import { useNavigate } from 'react-router-dom';
import LatestNewsImg from './LatestNewsImg';
import './latestNews.css';

const LatestNews = () => {
  const navigate = useNavigate();

  const handleStButton = () =>
    navigate({
      pathname: '/search/blouses',
    });
  const handleNdButton = () =>
    navigate({
      pathname: '/search/jeans/adidas/100',
    });
  const handleRdAdidasButton = () =>
    navigate({
      pathname: '/search/t-shirt/adidas/10',
    });
  const handleRdMustangButton = () =>
    navigate({
      pathname: '/search/pants/mustang/10',
    });

  return (
    <div className="row wrapper-container-latest">
      <p className="fs-4 fw-bold">LATEST NEWS</p>

      <div className="row wrapper-container-img">
        <LatestNewsImg
          textClassName={'text-st'}
          title="Click to find more"
          imgClassName={'img-fluid-st img-fluid'}
          image={mockDataLatestNews[0].img}
          handleImageButton={handleStButton}
          wrapperButtonImage={'col-5 wrapper-st'}
        />
        <div className="col-7 wrapper-container-nd">
          <LatestNewsImg
            textClassName={'text-st'}
            title="Nike under 10$"
            imgClassName={'img-fluid-nd img-fluid'}
            image={mockDataLatestNews[1].img}
            handleImageButton={handleNdButton}
            wrapperButtonImage={'row wrapper-nd-img'}
          />

          <div className="row wrapper-bottom-lates-img">
            <LatestNewsImg
              textClassName={'text-rd'}
              title="Adidas under 10$"
              imgClassName={'img-fluid-rd img-fluid'}
              image={mockDataLatestNews[2].img}
              handleImageButton={handleRdAdidasButton}
              wrapperButtonImage={'col-6 wrapper-rd-img'}
            />

            <LatestNewsImg
              textClassName={'text-rd'}
              title="Mustang under 10$"
              imgClassName={'img-fluid-rd img-fluid'}
              image={mockDataLatestNews[3].img}
              handleImageButton={handleRdMustangButton}
              wrapperButtonImage={'col-6 wrapper-rd-img'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
