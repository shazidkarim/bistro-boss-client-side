
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');

    return (
     <section className="mb-12">
        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular.map(item=> <MenuItem item={item} key={item._id}></MenuItem>)
            }
        </div>
     </section>
    );
};

export default PopularMenu;