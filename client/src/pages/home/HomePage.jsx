import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../redux/slices/productSlice";
import { fetchCart } from "../../redux/slices/newCartSlice";

const HomePage = ({ searchTerm }) => {

  const dispatch = useDispatch()
  const productsData = useSelector((state) => state.products.data)
  const token = useSelector((state) => state.auth.token)

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCart(token))
  }, [])

  const productCategory = [
    "Gaming",
    "Audio",
    "Mobile",
    "TV"
  ]

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden bg-[#f1f7fc] min-h-screen pb-20 py-38">
      {/* Hero Banner */}
      <div className="max-w-7xl  mx-auto  px-4 py-4 grid grid-cols-4 gap-10">
        <div className="col-span-3 bg-white h-86 rounded shadow-sm" >
          <img src="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" h-86 w-7xl"
            alt="" />
        </div>
        <div className="bg-white w-68 h-[400px] invisible lg:visible rounded shadow-sm">
          {
            productsData.slice(0, 3).map((item, i) => (
              <div className="item flex flex-col max-h-35 p-2 justify-center items-center" key={i}>
                <img
                  className="h-20 w-20"
                  src={item.image} alt={item.title} />
                <p className="cat text-sm mt-[-4px]">{item?.title?.slice(0, 15)}...</p>
                <p className="title font-bold mt-[-6px]">
                  <Link to={`/product/${item.id}`}>
                    Shop Now
                  </Link>
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Sections */}
      {
        productsData.length < 1 ? <>
          <Loader />
        </> :
          <div className="max-w-7xl mx-auto px-4 space-y-8">



            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className=" text-2xl font-semibold text-gray-700">Best Deals</h2>
                <Link to="/products">
                  <button className="flex items-center hover:cursor-pointer  space-x-1 text-cyan-700 text-sm">
                    <span>View All</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {
                  filteredProducts.slice(0, 5).map((product, i) => (
                    <ProductCard product={product} key={i} />
                  ))}
              </div>
            </section>


            {
              productCategory.map((category, index) => (
                <SectionBlock key={index} category={category} searchTerm={searchTerm} />
              ))}
          </div>
      }
    </div>
  );
};

const SectionBlock = ({ category, searchTerm }) => {

  const productsData = useSelector((state) => state.products.data)

  const products = productsData.filter((item) => {
    return item.category.toLowerCase().includes(category.toLowerCase())
  })

  const catProduct = [...products]


  const filteredProducts = catProduct.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className=" text-2xl font-semibold text-gray-700">{category}</h2>
        {category && (
          <Link to={`/products/${category.toLowerCase()}`}>
            <button className="flex items-center hover:cursor-pointer  space-x-1 text-cyan-700 text-sm">
              <span>View All</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        )}
      </div>

      {category && (

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {
            filteredProducts.slice(0, 5).map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
        </div>

      )}
    </section>
  );
};

export default HomePage;
