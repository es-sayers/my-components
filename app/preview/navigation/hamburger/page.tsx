import Navigation, { NavigationItem } from "@/app/_components/navigation/hamburger/Navigation";

export default function Hamburger() {
    return (
        <Navigation>
            <NavigationItem href="#" text="Home" />
            <NavigationItem href="#" text="Products" />
            <NavigationItem href="#" text="Sales" />
            <NavigationItem href="#" text="About" />
            <NavigationItem href="#" text="Contact" />
            <NavigationItem href="#" text="Account" />
        </Navigation>
    );
}