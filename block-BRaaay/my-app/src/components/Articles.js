import data from '../data.json';

function Articles() {
  return (
    <>
      <section className="overview card-container">
        <div className="container">
          <div className="flex wrap">
              {data.map((color)=>(
                  <Article {...color} key={color.} />
              ))}
           
          </div>
        </div>
      </section>
    </>
  );
}


function Article(props) {
    return (
        <div class="card overview-card">
        <header class="card-header flex">
         <h4>Page views</h4>
         <i class="fab fa-facebook-f"></i>
        </header>

        <div class="flex ">
            <h3>87</h3>
            <div>
             <i class="fas fa-chevron-up"></i>
                <span>3%</span>
            </div>
        </div>
   </div>
    )
}

export default Articles
