function Card({datas,handleRemove}){
    return(
        <div>
           <div className="Img">
            <img src={datas.img}></img>


           </div>
           <div>
             <h2>{datas.name}</h2>
             <h2>{datas.price}</h2>
               <h3>{datas.info}</h3>

           </div>
           <div> <button onClick={()=> handleRemove(datas.id)}>remove</button></div>

        </div>
    )
}
export default Card;
