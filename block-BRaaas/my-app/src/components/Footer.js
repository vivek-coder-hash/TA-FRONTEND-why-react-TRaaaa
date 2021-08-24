
import fruits from './data/fruits';

//Footers , Footer component
//Data can only be send from parents to child . here Footers is parent and Footer is child.
//switch is statement and in curly brackets we can write only expression.

function handleClick(value, event) {
  alert(`hello ${value} , Can I eat you!! :)`);
  console.log({ event }); // synteticBaseEvent is similar to event object
}

function Footers() {
  return (
    <>
      <section className="news padding">
        <h3 className="heading-secondary">Our latest News</h3>
        <div className="container flex justify-between align-center wrap">
          {fruits.map((fruit) => (
            <Footer {...fruit} key={fruit.id} />
          ))}
        </div>
      </section>
    </>
  );
}

function Footer(props) {
  return (
    <article class="news-article flex-30">
      
      <h3>{props.value}</h3>
      <p>{props.id}</p>

      <button
          onClick={(event) => handleClick(props.value, event)}
          className="btn"
        >
          click me
        </button>

      
      
    </article>
  );
}



export default Footers;
