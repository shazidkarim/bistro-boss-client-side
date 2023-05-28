import SectionTitle from "../../../Components/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading={"check it out"} heading={"FEATURED ITEM"}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-700 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20 , 2029</p>
                    <h5 className="uppercase">WHERE CAN I GET SOME?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;