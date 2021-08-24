import PropTypes from 'prop-types';
import data from '../data.json';

//Footers , Footer component
//Data can only be send from parents to child . here Footers is parent and Footer is child.
//switch is statement and in curly brackets we can write only expression.

function Footers() {
  return (
    <>
      <section className="news padding">
        <h3 className="heading-secondary">Our latest News</h3>
        <div className="container flex justify-between align-center wrap">
          {data.map((animal) => (
            <Footer {...animal} />
          ))}
        </div>
      </section>
    </>
  );
}

function Footer(props) {
  return (
    <article class="news-article flex-30">
      <img class="width-full" src={props.urlToImage} alt="news" />
      <h3>{props.title.toUpperCase()}</h3>
      <p>{props.content}</p>

      {props.author === 'Joseph Young' ? (
        <button className="btn">Read More Young</button>
      ) : (
        <button className="btn">Read More Others</button>
      )}
    </article>
  );
}

Footer.PropTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Footers;
