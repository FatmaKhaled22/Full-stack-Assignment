import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../style.css';


function Category() {

  const categories = useSelector((state) => state.category);
  console.log("Category ---->" , categories);


  return (
    <>

      <section className="container py-2">
        <h1 className="text-center my-4">RoadMap</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
          {categories.map((category)=>{
            return(
              <div className="col" key={category._id}>
                <div className="card card-shadow">
                  <img src={category.img} style={{height:"30vh"}} className="card-img-top" alt="img"/>
                  <div className="card-body text-center">
                    <h4 className="card-title">{category.name}</h4>
                    <p className="card-text desc-cat">{category.description}</p>
                    <button className="btn btn-outline-primary"><Link to={`/task/${category._id}`}>View</Link></button>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <small className="text-body-secondary">Total Points</small>
                    <span>{category.totalPoints}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}

export default Category;
