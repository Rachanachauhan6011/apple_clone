import React from 'react'
const show = [
    {
        id:1,
        title:'Fountain of Youth',
        genre:'Action',
        image:'https://is1-ssl.mzstatic.com/image/thumb/4UEcdeb6Xoc40fhFSAr3Og/838x472.jpg'
    },
    {
        id:2,
        title:'Government Cheese',
        genre:'Comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/O4Dn87TcNpQcMjmCqWm1Fw/838x472.jpg'
    },
    {
        id:3,
        title:'Fly Me to Moon',
        genre:'comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/_E3bQBkRfwFDVj2heRfLsA/838x472.jpg'
    },
    {
        id:4,
        title:'Echo Valley',
        genre:'Thriller',
        image:'https://is1-ssl.mzstatic.com/image/thumb/gy_-HeK7Awo48x2fPuAy_w/838x472.jpg'
    },
    {
        id:5,
        title:'Platonic',
        genre:'Comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/rBI93Qq60YpBP60maTBNbg/838x472.jpg'
    },
    {
        id:6,
        title:'Foundation',
        genre:'Sci-Fi',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Xye2zsX5gxLetoLRdTgNLA/838x472.jpg'
    },
    {
        id:7,
        title:'Murderbot',
        genre:'Sci-fi',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Wk5tKXFA4Zr4in8sDkQeYA/838x472.jpg'
    },
     {
        id:8,
        title:'Careme',
        genre:'Drama',
        image:'https://is1-ssl.mzstatic.com/image/thumb/gIyDtYBYBgDR4C0oBozlXQ/838x472.jpg'
    },
     {
        id:9,
        title:'Severance',
        genre:'Thriller',
        image:'https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/838x472.jpg'
    },
     {
        id:10,
        title:'Prime Target',
        genre:'Thriller',
        image:'https://is1-ssl.mzstatic.com/image/thumb/e6_6t4WH4pUTV0plZH7R9w/838x472.jpg'
    },
     {
        id:11,
        title:'Bad Sisters',
        genre:'Drama',
        image:'https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/838x472.jpg'
    },
     {
        id:12,
        title:'Palm Royale',
        genre:'Comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/EubK_TDtQfyCj_ibM2KR3A/838x472.jpg'
    },
    {
        id:13,
        title:'Smoke',
        genre:'Thriller',
        image:'https://is1-ssl.mzstatic.com/image/thumb/99GnD9S-N_8FZ-3UPCiiNQ/838x472.jpg'
    },
    {
        id:14,
        title:'The world Ones',
        genre:'Documentary',
        image:'https://is1-ssl.mzstatic.com/image/thumb/EVPS3kWppIr3afjftSqYBg/838x472.jpg'
    },
     {
        id:15,
        title:'Dope Theif',
        genre:'Crime',
        image:'https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/838x472.jpg'
    },
     {
        id:16,
        title:'Bad Monkey',
        genre:'Comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Ed-B4V6OY0yoxxlksKeulw/838x472.jpg'
    },
     {
        id:17,
        title:'Highest 2 Lowest',
        genre:'Thriller',
        image:'https://is1-ssl.mzstatic.com/image/thumb/2cKEhPWj7Tbm59SoCaCe2w/838x472.jpg'
    },
     {
        id:18,
        title:'Acapulco',
        genre:'Comedy',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Ec4GedDwtKAxOrCp_VOF-g/838x472.jpg'
    },
    {
        id:18,
        title:'Long the way',
        genre:'Documentry',
        image:'https://is1-ssl.mzstatic.com/image/thumb/GqtEVQMUxjX2CgqfrhW9hQ/838x472.jpg'
    }
];

const EntertainmentMarque = () => {
  return (
     
       <div className="h-auto bg-white p-6">
      <marquee behavior="infinite" direction="left" scrollamount="6">
        <div style={{ display: "flex", gap: "20px" }}>
          {show.map((show, index) => (
            <div
              key={index}
              style={{
                minWidth: "300px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={show.image}
                alt={show.title}
                className='h-40 w-200 '
              />
              <div className='p-3'>
                <h2 className='font-bold'>{show.title}</h2>
                <p className='text-gray-500'>{show.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
      
  )
}

export default EntertainmentMarque