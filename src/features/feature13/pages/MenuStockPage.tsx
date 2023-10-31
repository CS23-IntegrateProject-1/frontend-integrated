const MenuStockPage = () => {
    const isMoblie = window.innerWidth < 768;
    const renderMoblie = () => {
        return <></>;
    };
    const renderDesktop = () => {
        return <>this is desktop</>;
    };
    return isMoblie ? renderMoblie() : renderDesktop();
};

export default MenuStockPage;
