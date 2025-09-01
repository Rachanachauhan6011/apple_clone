import React from 'react'
import ProductCard1 from './ProductCard1'
import { MoveUpRight } from 'lucide-react'
import ProductCard2 from './ProductCard2'
import ProductCard3 from './ProductCard3'
import ProductCard4 from './ProductCard4'
import ProductCard5 from './ProductCard5'
import ProductCard6 from './ProductCard6'


const Store = () => {
    return (
        <div className='h-auto w-full items-center justify-center'>
            <p className='text-center pt-4 text-gray-800'>Get up to 6 months of No Cost EMI§ plus up to ₹10000.00 instant cashback§§ on selected products with eligible cards. <a href="#" className='text-blue-600 hover:underline'>See offers</a></p>
            <h2 className='text-center font-serif font-semibold'>Create by Rachana</h2>
            <div className='h-auto w-full mt-4 bg-gray-100'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-gray-400 text-6xl max-w-2/3 pt-20 pl-10 font-semibold '> <b className='text-black'>Store.</b> The best way to buy the products you love.</h1>
                    <div>
                        <span className='flex px-6 items-center justify-center p-2 gap-4'>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-specialist-icon-202506?wid=70&hei=70&fmt=jpeg&qlt=90&.v=VXRDQVlxMTJJMXBPUzZKYmlVSjB4Q2o1cW5aOTRSYzl1SGhPbEp1WkI0K2drRW5PL3BOUXM5bHUxdmx3VytMWDE1UUxLT2t0cW42N3FvQzVqaGhrVVhOWk5UYkpsTWtxTGJjQnB1bzExYngrYWpGdS9XeFgvbS9ITnNYOEhYaG4" alt="" className='rounded-full flex' />
                            <div>
                                <h1>Need Shopping help?</h1>
                                <h1 className='text-blue-600 flex'>Ask a Specialitist <MoveUpRight /> </h1>
                            </div>
                        </span>
                        <span className='flex px-6 items-center justify-center p-2 gap-4'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className='h-10 w-10' />
                            <div>
                                <h1>Visit an Apple Store</h1>
                                <h1 className='text-blue-600 flex'>Find one near you <MoveUpRight /></h1>
                            </div>
                        </span>

                    </div>
                </div>
                <div className='pl-30 h-auto p-4 items-center justify-center'>

                    <ul className='flex p-2 pt-20 text-xs font-semibold items-center text-center gap-10'>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8" alt="" />Mac</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXOG9vbGw5MnhRZ3BpYVMwQTIvb2xsaDVoZlhhY1p4QWdsTjFNaGRHM3FYWW15d1FhSDJ0bkR0ZGZtUjZJNmFveFVockp1czQ4Q0pvWUU1bC9ERnl2dFE" alt="" />iPhone</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" alt="" />iPad</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkNDJNVmlnVytwalkvOTJ2M1BKWUREdkh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2oxdUo4aWtyK05IRkZuWjBWbW5HM00" alt="" />Apple Watch</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yNlJ5eGFhR1FVd2NNNDB0VWRUSzVCUFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFI0R1M4eFpKRTFIclV0ZHRqakVRd1k" alt="" />AirPods</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" alt="" />Apple TV 4K</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" alt="" />HomePod</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUJGVHdnWkxMaklDeW9JYU5tT3FWeVBrcjVFNVdueFRVbVY3TGtiL2RjUVhQYS92MS9scmN4eTZLbFFkMHVzTVhuL2FLN3hwSUJhbzdFUHltVU1ldnQ" alt="" />Accessories</li>
                        <li className='cursor-pointer'><img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFltc1ByWXViNGVYdEdGdkhJbjJoMGs" alt="" />AirTag</li>
                    </ul>

                </div>

                <div>
                    <ProductCard1 />
                    <ProductCard2 />
                    <ProductCard3 />
                    <ProductCard4 />
                    <ProductCard5 />
                    <ProductCard6 />
                </div>
               
            </div>
        </div>
    )
}

export default Store