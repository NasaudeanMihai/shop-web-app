import { mockDataImage } from '../../mockData/image';

import './latestNews.css';
const img =
  'https://images.unsplash.com/photo-1576469196962-433b47333f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60';

const LatestNews = () => {
  return (
    <div className="row wrapper-container-latest">
      <p className="fs-4 fw-bold">LATEST NEWS</p>
      <div className="col-5">
        <img src={img} className={`img-fluid-st`} alt="..." />
      </div>
      <div className="col-7">
        <div className="row wrapper-nd-img">
          <img src={mockDataImage[0].img} className={`img-fluid-nd`} alt="..." />
        </div>
        <div className="row">
          <div className="col-6">
            <img src={mockDataImage[0].img} className={`img-fluid-rd`} alt="..." />
          </div>
          <div className="col-6">
            <img src={mockDataImage[0].img} className={`img-fluid-rd`} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
