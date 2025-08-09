import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../redux/slices/productSlice";


const ProductsPage = ({ searchTerm }) => {

  const productsData = useSelector((state) => state.products.data)
  const dispatch = useDispatch()
  const { cat } = useParams()


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; 


  // console.log(productsData)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const products = productsData.filter((item) => {
    if (cat) {
      return item.category.toLowerCase().includes(cat)
    } else {
      return item
    }
  })

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const filteredProducts = currentProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm?.toLowerCase())
  }
  );

  return (
    <div className="min-h-screen bg-[#f0f8fb] p-7 pt-45">
      {
        products.length > 0 ?
          <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

              <main className="md:col-span-5">

                <p className="text-sm text-gray-500 mb-4">{filteredProducts.length} Products Found</p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {
                  filteredProducts.length < 0 ? <Loader/> : filteredProducts.map((product) => (
                    <ProductCard product={product}/>
                  ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 my-10">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded hover:cursor-pointer  border-gray-300 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1 border hover:cursor-pointer rounded border-gray-300 ${currentPage === i + 1 ? 'bg-cyan-600 text-white' : ''
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 hover:cursor-pointer rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </main>


            </div>
          </>
          :
          <>
            <NotFound text={'No products found'}/>
          </>
      }
    </div>
  );
};

export default ProductsPage;
