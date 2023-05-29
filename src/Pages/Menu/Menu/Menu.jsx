import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertbg from '../../../assets/menu/dessert-bg.jpeg'
import pizzabg from '../../../assets/menu/pizza-bg.jpg'
import saladbg from '../../../assets/menu/salad-bg.jpg'
import soupbg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item=> item.category === 'dessert');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const soup = menu.filter(item=> item.category === 'soup');
    const offered = menu.filter(item=> item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover title={"our menu"} img={menuImg}></Cover>
            <SectionTitle subHeading={"don't miss"} heading={"todays offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} coverImg={dessertbg} title="Dessert"></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzabg} title="pizza"></MenuCategory>
            <MenuCategory items={salad} coverImg={saladbg} title="salad"></MenuCategory>
            <MenuCategory items={soup} coverImg={soupbg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;