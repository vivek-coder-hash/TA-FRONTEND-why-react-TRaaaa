//Article component

function Articles() {
    return (
      <>
        <section className="news padding">
          <h3 className="heading-secondary">Our latest News</h3>
          <div className="container flex justify-between align-center wrap">
            <Article heading="How to build a great portfolio as beginner developer" />
            <Article heading="How to build a great portfolio as beginner developer" />
            <Article heading="How to build a great portfolio as beginner developer" />
          </div>
        </section>
      </>
    );
  }
  
  function Article(props) {
    return (
      <article class="news-article flex-30">
        <img
          class="width-full"
          src="https://static.coindesk.com/wp-content/uploads/2020/05/btc-chart-may-12-1200x628.png"
          alt="news"
        />
        <h3>{props.heading}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
          ducimus laudantium fugiat facilis? Beatae deleniti quisquam reprehen.
        </p>
        <a href="#">Read More</a>
      </article>
    );
  }
  
  export default Articles;
  