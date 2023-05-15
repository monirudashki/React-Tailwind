import React, { useCallback, useState } from 'react'
import Header from '../Header/Header'
import EverythingLocal from '../../Content/EverethingLocalSection/EverythingLocal';
import LatestBenefits from '../../Content/LatestBenefits/LatestBenefits';
import PictureSection from '../../Content/pictureSection/pictureSection';
import NavigationSection from '../../Content/NavigationSection/NavigationSection';
import SubscribeSection from '../../Content/SubscribeSection/SubscribeSection';
import GettingStartedSection from '../../Content/GettingStartedSection/GettingStartedSection';
import UsersSection from '../../Content/UsersSection/UsersSection';
import Footer from '../Footer/FooterDesktop/Footer';
import HamburgerNav from '../HamburgerNav/HamburgerNav';
import ModalSection from '../../Content/ModalSection/ModalSection';

function Home() {

    const [hamburgerNavOn, setHamburgerNavOn] = useState(false);
    const [hamNavIsClicked, setHamNavIsClicked] = useState(false);

    const hamburgerNavToggle = useCallback((boolean) => {
        setHamburgerNavOn(boolean);
    }, []);

    const HamNavIsClickedHandle = useCallback(() => {
        setHamNavIsClicked(true);
    }, []);

    const [modalOn, setModalOn] = useState(false);
    const [modalIsClicked, setModalIsClicked] = useState(false);

    const modalIsClickedHandle = useCallback(() => {
        setModalIsClicked(true);
    }, []);

    const modalToggle = useCallback((boolean) => {
        setModalOn(boolean);
    }, []);

    return (
        <>
            <Header
                HamNavIsClickedHandle={HamNavIsClickedHandle}
                hamburgerNavToggle={hamburgerNavToggle}
            />

            <HamburgerNav
                hamburgerNavToggle={hamburgerNavToggle}
                hamburgerNavOn={hamburgerNavOn}
                hamNavIsClicked={hamNavIsClicked}
            />

            <EverythingLocal />

            <LatestBenefits />

            <PictureSection />

            <NavigationSection />

            <SubscribeSection
                modalToggle={modalToggle}
                modalIsClickedHandle={modalIsClickedHandle}
            />

            <ModalSection
                modalToggle={modalToggle}
                modalOn={modalOn}
                modalIsClicked={modalIsClicked}
            />

            <GettingStartedSection />

            <UsersSection />

            <Footer />
        </>
    )
}

export default Home;
