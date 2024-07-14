import {Button} from "../Button/Button.jsx";
import {restaurants} from "../../../materials/mock.js";

export const TabsSection = ({active, onChange}) => {
    return (
        <section>
            <Button isActive={active === 'rest1'}  buttonClick={() => onChange('rest1')}>
                Restaurants1
            </Button>
            <Button isActive={active === 'rest2'}  buttonClick={() => onChange('rest2')}>
                Restaurants2
            </Button>
            <Button isActive={active === 'rest3'}  buttonClick={() => onChange('rest3')}>
                Restaurants3
            </Button>
            <Button isActive={active === 'rest4'}  buttonClick={() => onChange('rest4')}>
                Restaurants4
            </Button>
        </section>
    )
}
