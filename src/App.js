// import Button from './components/Button';
// import Heart from './components/Heart';
// import Input from './components/Input';
// import { ReactComponent as MenuIcon } from '../src/assets/icons/menu.svg';
// import Toggle from './components/Toggle';
import Category from './components/Category';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import SubHeader from './components/SubHeader';

function App() {
    return (
        <div>
            <Header />
            <SubHeader />
            <ProductCard />
            {/* <div>
                <Button
                    icon={<MenuIcon />}
                    full
                    onClick={() => {}}
                    text="placholder"
                />
            </div>
            <div>
                <Input placeholder="placeholder" onChange={() => {}} />
            </div>
            <div>
                <Heart />
            </div>
            <div>
                <Toggle size="sm" />
            </div> */}
            <Divider />
            <Contact />
            <Divider />
            <Category />
            <Divider />
            <Footer />
        </div>
    );
}

export default App;
