import colors from '../data';

function Articles() {
  return (
    <>
      <section className="overview card-container">
        <div className="container">
          <div className="flex wrap">
            {Object.keys(colors).map((key) => (
              <Article name={key} allColors={colors[key]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Article(props) {
  return props.allColors.map((color, i) => (
    <div className="card overview-card" style={{ backgroundColor: color }}>
      <header className="card-header flex">
        <h4>{color}</h4>
        <i class="fab fa-facebook-f"></i>
      </header>

      <div className="flex ">
        <h3>{i === 0 ? 50 : i * 100}</h3>
        <div>
          <i className="fas fa-chevron-up"></i>
          <span>3%</span>
        </div>
      </div>
    </div>
  ));
}

export default Articles;
