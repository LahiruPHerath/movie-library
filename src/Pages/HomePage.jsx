import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieListing from "../components/MovieListing";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MovieListing isHome={true} />
      <Footer />
    </>
  );
};

export default HomePage;
