

const FoodCard = ({item}) => {
    const {image ,  price , name , recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 absolute right-0 mr-4 mt-4 p-2 rounded-lg text-white">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mx-auto">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;