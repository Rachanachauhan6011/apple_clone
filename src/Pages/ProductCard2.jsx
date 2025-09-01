import React from 'react'
const product = [
        {
        id: 1,
        info:"APPLE SPECIALIST",
        heading:"Shop one on one with a Specialist online.",
        paragraph:"",
        image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202506?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrUkxnN3NTOHN5WTV1c3NEYkc1TXhDMWorUGRVSzBNTnk4aWVXZTBsSnJkbEhjUnA4dFc4UjhxaGJyeTZ4TGxiTlExd2w0cFRwTkFXcVMrRy8xS0hPK0wvSlYzalNtQnlZRDd0YzdTaUlhTlo"
    },
    {
        id:2,
        info:"TODAY AT APPLE",
        heading:"Explore Apple Intelligence- (opens in new window)",
        paragraph:"Come and try it for yourself in a free session at the Apple Store.",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202505?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNY0RvMUw4Rm9vb3JCaDFWOTNnU01UOVNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaG9GTzZCL2trL3hMU1d2K2ZPcTVKWXM"


    },
  
      {
        id: 3,
        info:"PERSONAL SETUP",
        heading:"Set up your new device with help from a Specialist.",
        paragraph:"Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
        image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbmJpYlE0VldEazFQNXh6WFBPRkF3SmNva0xZQWFEV2ljOWRGNWZJRk4vWGpyanhrWU1SUk1JdlhicWJrdXd2djlzeDRiY2xGcWt2YVRkSWVZeUhQK1U"
    },
    //   {
    //     id:4,
    //     info:"TODAY AT APPLE",
    //     heading:"Join free sessions at your Apple Store.",
    //     paragraph:"Learn about the latest features and how to go further with your Apple devices.",
    //     image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPM1ZnVFR5VGxOMG5WYlh6ZVpnWVpmOVNTeEZoVVBncVRqTkNMNS9uNklFcGdNL0tvRHFBWjFabEJvUTIxa3lDRWI2aER5OTZhZjhhVzlPaThxMkc0QVE"
    // },
  

];

const ProductCard = ({product})=>{
    return (
          <div className='bg-white rounded-2xl w-full'>
     <div
      className="w-full h-130 bg-cover bg-center rounded-lg shadow-lg hover:scale-101"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <h2 className='text-[10px] pl-4 pt-5 font-semibold' >{product.info}</h2>
            <p className='text-[25px] font-bold text-black pl-4'>{product.heading}</p>
            <p className='text-[15px] pl-4'>{product?.paragraph}</p>
    </div>

            
          </div>
    
    )
}

const ProductCard2 = () => {
  return (
     <div className='h-auto flex flex-col mt-5'>
        <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>Help is here.</b>  Whenever and however you need it.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4'>
            {product.map((item)=>(
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
     </div>
  )
}

export default ProductCard2