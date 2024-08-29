
const Prealoder = () => {
    console.log(new URL('../assets/preloader.svg', import.meta.url).href)
    return (
        <div className="preloader">
            {/* <img src="../assets/preloader.svg" alt="preloader" className="preloader__img" /> */}
            <img src={new URL('../../assets/preloader.svg', import.meta.url).href} alt="preloader" className="preloader__img" />
        </div>
    );
};

export default Prealoder;