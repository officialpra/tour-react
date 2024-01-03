import Card from "./Card";
function Tours({toursPlan,handleRemove}){
    // let ans=tours.tour;
    return(
       <div>
        <h4>Plane with prashant</h4>
        <ul>
        {toursPlan.map((tour) => (
        //   <li key={tour.id}>
        //     <img src={tour.img} alt={`Day ${tour.day}`} />
        //     <h3>{tour.name}</h3>
        //     <p>{tour.info}</p>
        //     <p>Price: ${tour.price}</p>
        //   </li>
          <Card datas={tour} handleRemove={handleRemove}></Card>
        ))}
      </ul>
        
       </div> 
    );

}

export default Tours;

