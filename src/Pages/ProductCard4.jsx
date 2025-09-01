import React from 'react'
const product1 = [
 {
        id: 1,
        title: "Get 3 months of Apple Music free.",
        about: "Included with the purchase of selected Apple devices.Footnote⁺",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-music-202412?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDc21KWElzeGUrOVROazhWUi9vMy9xUnFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbkVOdXo5Z2c3b1kwaDdELytwanYzTEc2S2VFaVNLbFRwRnRocGdXWjBnQ0Y"


    },
]
const product = [
   
    {
        id: 2,
        info:"Free Engraving",
        name: "AirPods 4 with Active Noise Cancellation",
        prices: "MRP ₹17900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0aEQ4eDQxcUNOL3l1WDd2VTYzMXJYbkJkRlpCNVhYU3AwTldRQldlSnpRa01rSksyTE9QS1lFVXpHNmJsRVlaOWM"
    },
    {
        id: 3,
        info:"New",
        name: "Powerbeats Pro 2 – High-Performance Earbuds – Electric",
        prices: "MRP ₹29900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d1RLSDZzQTRtK1UxZmVlUFRKNGgvZllvYS9naDJJdU9KTWdGWjhKWFRmSjNqeEcvVzZaaVU2a3ptRnN4aU8wUGovUE9KcXhKNTlHR1RBR2lHbUtXcWc"
    },
    {
        id: 4,
        info:"New colours",
        name: "AirPods Max - Midnight",
        prices: "MMRP ₹59900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpydzZxenl2STByZjdmUGYvR3dmM2RON01LWlMyVmEreEd6UVBWaXRHdkpLMWppQWdEZjVIVUoweGVCQnUrWEowU1ZhN1ZHY2VKVGQ4Nmx6UkdSNXd0OGI"
    },

];
const ProductCard1 = ({product1})=>{
    return (
        // <div className='bg-white rounded-2xl w-full pt-4 p-2'>
        //     <h2 className='text-[28px] font-semibold pl-4' >{product1.title}</h2>
        //     <p className='text-[15px] pl-4'>{product1.about}</p>
        //       <img src={product1.image} alt={product1.title} />

        // </div>
           <div
      className="w-full h-130 bg-cover bg-center rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${product1.image})` }}
    >
            <h2 className='text-[30px] font-semibold pl-5 pt-18' >{product1.title}</h2>
            <p className='text-[18px] pl-5'>{product1.about}</p>
    </div>  
    )
}

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white rounded-2xl w-full pt-4 p-2 hover:scale-101'>
            <img src={product.image} alt={product.name} />
            <h2 className='text-[20px] font-semibold pl-4' >{product.name}</h2>
            <p className='text-[15px] pl-4'>{product.prices}</p>

        </div>
    

    )
}

const ProductCard4 = () => {
    return (
        <div className='h-auto flex flex-col'>
            <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>Loud and clear.</b>Unparalleled choices for rich, high-quality sound.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
                   {product1.map((item1)=>(
                    <ProductCard1 key={item1.id} product1={item1} />
                ))}
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCard4