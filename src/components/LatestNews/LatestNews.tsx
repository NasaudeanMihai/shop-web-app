import { mockDataLatestNews } from './mockData';
import { useNavigate } from 'react-router-dom';
import './latestNews.css';

const LatestNews = () => {
  const navigate = useNavigate();

  const handleStButton = () =>
    navigate('/search', {
      state: {
        selectedFilter: {
          category: { name: 'blouses', selected: true },
          brand: '',
          price: { name: '', value: null },
        },
      },
    });
  const handleNdButton = () =>
    navigate('/search', {
      state: {
        selectedFilter: {
          category: { name: 'jeans', selected: true },
          brand: 'nike',
          price: { name: '10', value: 10 },
        },
      },
    });
  const handleRdAdidasButton = () =>
    navigate('/search', {
      state: {
        selectedFilter: {
          category: { name: 't-shirt', selected: true },
          brand: 'adidas',
          price: { name: '10', value: 10 },
        },
      },
    });
  const handleRdMustangButton = () =>
    navigate('/search', {
      state: {
        selectedFilter: {
          category: { name: 'pants', selected: true },
          brand: 'mustang',
          price: { name: '10', value: 10 },
        },
      },
    });

  return (
    <div className="row wrapper-container-latest">
      <p className="fs-4 fw-bold">LATEST NEWS</p>
      <div className="col-5 wrapper-st">
        <button className="btn add-btn" onClick={handleStButton}>
          <img src={mockDataLatestNews[0].img} className={`img-fluid-st`} alt="..." />
          <p className="text-st">Click to find more</p>
        </button>
      </div>
      <div className="col-7">
        <div className="row wrapper-nd-img">
          <button className="btn add-btn" onClick={handleNdButton}>
            <img src={mockDataLatestNews[1].img} className={`img-fluid-nd`} alt="..." />
            <p className="text-st">Nike under 10$</p>
          </button>
        </div>
        <div className="row">
          <div className="col-6 wrapper-rd-img">
            <button className="btn add-btn" onClick={handleRdAdidasButton}>
              <img src={mockDataLatestNews[2].img} className={`img-fluid-rd`} alt="..." />
              <p className="text-st">Adidas under 10$</p>
            </button>
          </div>
          <div className="col-6 wrapper-rd-img">
            <button className="btn add-btn" onClick={handleRdMustangButton}>
              <img src={mockDataLatestNews[3].img} className={`img-fluid-rd`} alt="..." />
              <p className="text-st">Mustang under 10$</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
