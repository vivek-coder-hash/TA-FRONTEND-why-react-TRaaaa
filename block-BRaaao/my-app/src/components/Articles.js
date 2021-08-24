//import data from '../data.json';
import allArticles from './data/articles';

//Articless , Article component
//Data can only be send from parents to child . here Footers is parent and Footer is child.
//switch is statement and in curly brackets we can write only expression.

function Articles() {
  return (
    <>
      <section className="news padding">
        <h3 className="heading-secondary">Our latest News</h3>
        <div className="container flex justify-between align-center wrap">
          {allArticles.map((animal) => (
            <Article key={animal.publishedAt} {...animal} />
          ))}
        </div>
      </section>
    </>
  );
}

function Article(props) {
  return (
    <article className="news-article flex-30">
      <img className="width-full" src={props.urlToImage} alt="news" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>

      {props.author === 'Joseph Young' ? (
        <button className="btn">Read More Young</button>
      ) : (
        <button className="btn">Read More Others</button>
      )}
    </article>
  );
}

export default Articles;
