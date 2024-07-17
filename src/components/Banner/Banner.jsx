import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <video autoPlay loop muted className="banner-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <img src='/logo.png' alt='logo' />
      </div>
    </div>
  );
}

export default Banner;
