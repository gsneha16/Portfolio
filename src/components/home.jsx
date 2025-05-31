import "./main.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-content">
      <div className="text-area">
        <h1 className="title gradient-text-lg">Full Stack Developer</h1>
        <p className="description">
          I am Sneha, a web developer with a passion for creating beautiful and
          responsive websites.
        </p>
        <button className="cta-button gradient-text-sm">View my work</button>
      </div>
      <div className="image-area">
        <img
          src="/coder.jpg"
          alt="Developer at work"
          className="developer-image"
        />
      </div>
    </div>
  );
};

export default Home;
