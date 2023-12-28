import React, { type ReactElement } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Counter from "../../components/Counter/Counter";
import Product from "../../components/ProductSection/Product";

const Home = (): ReactElement => {
  return (
    <div>
      <Header />
      <Counter />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
