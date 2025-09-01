import React from 'react'
const product = [
    {
        id:1,
        name:"MacBook Air",
        tagline:"Apple Intelligence∆",
        prices:"From ₹99900.00‡",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko"


    },
    {
        id:2,
        name:"iPad Air",
        tagline:"Apple Intelligence∆",
        prices:"From ₹59900.00‡",
        image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4"
    },
      {
        id: 3,
        name:"Apple Watch Series 10",
        tagline:"Thinstant classic.",
        prices:"From ₹46900.00‡",
        image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbGtrQjBqdmhJbWlLcCtlQTMwc01SdjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVlSek45NHpYUG91NnZ3YmlDQlpUYnArYWpGdS9XeFgvbS9ITnNYOEhYaG4"
    },
      {
        id: 4,
        name:"iPhone 16e",
        tagline:"Apple Intelligence∆",
        prices:"From ₹59900.00‡",
        image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCVVIzWjZtanZvZXBzWDFVU2JjN3Z3cVJSeXJaL3JqNm9jc2psYU5Qelh0TmlzWjh1WkQ4MmluMWQxWnR4Y3hGMlk0L2ZKQkZvUTFDcWhFMmRvYjZnWWI"
    },

];

const ProductCard = ({product})=>{
    return (
          <div className='bg-white rounded-2xl w-full'>
            {/* <h2 className='text-[28px] font-semibold m-3' >{product.name}</h2>
            <p className='text-[20px] '>{product.tagline}</p>
            <p className='text-[15px]'>{product.prices}</p>
            <img src={product.image} alt={product.name} /> */}
     <div
      className="w-full h-130 bg-cover bg-center rounded-lg shadow-lg hover:scale-101"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <h2 className='text-[28px] font-semibold pl-4 pt-5' >{product.name}</h2>
            <p className='text-[20px] font-bold pl-4 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>{product.tagline}</p>
            <p className='text-[15px] pl-4'>{product.prices}</p>
    </div>

            
          </div>
    
    )
}

const ProductCard1 = () => {
  return (
     <div className='h-auto flex flex-col mt-5'>
        <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>The latest.</b> Take a look at what’s new right now.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
            {product.map((item)=>(
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
     </div>
  )
}

export default ProductCard1