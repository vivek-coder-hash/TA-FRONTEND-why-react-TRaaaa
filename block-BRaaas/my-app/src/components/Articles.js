//Article component
import names from "./data/names";

function handleClick(value , event) {
    alert(`hello ${value} , How are you!! :)`);
    console.log(event)
}

function Articles() {
    return (
      <>
        <section className="news padding">
          <h3 className="heading-secondary">Our latest News</h3>
          <div className="container flex justify-between align-center wrap">
           

            {names.map((name) => (
            <Article  {...name} key={name.id} />
          ))}
            
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
        <h3>{props.value}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
          ducimus laudantium fugiat facilis? Beatae deleniti quisquam reprehen.
        </p>
        

        <button
          onClick={(event) => handleClick(props.value, event)}
          className="btn"
        >
          click {props.value}
        </button>

      </article>
    );
  }
  
  export default Articles;
  