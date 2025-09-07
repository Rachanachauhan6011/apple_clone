import React from 'react'
const show = [
    {
        id:1,
        title:'Disney Dreamlight Valley',
        genre:'Apple Music',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/77/0d/eb/770deb5f-9efa-6ea6-2f01-7ac71fdde1d5/78e58141-cc49-452c-82dd-0869280d8737.png/838x472.jpg'
    },
    {
        id:2,
        title:'Solitaire by MobilityWare+ ',
        genre:'Cards',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f6/ea/56/f6ea5619-16b1-7ccc-6764-8f4fd81f3dc3/VFMtQVAtV1ctU29saXRhaXJlKy5wbmc.png/838x472.jpg'
    },
    {
        id:3,
        title:'Boggle: Arcade Edition',
        genre:'Word',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5a/5f/dc/5a5fdcab-8db6-90bb-0bd7-0f3a2b47dbf4/835e45b0-c3a0-4110-8f83-8cc7ea1f1312.png/838x472.jpg'
    },
    {
        id:4,
        title:'Skate City: New York',
        genre:'Action',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8f/43/cb/8f43cbba-18e0-f9a1-cbfa-a40ac8d49c04/e2c8889c-37f0-4ed7-a28d-ba7977a5b180.png/838x472.jpg'
    },
    {
        id:5,
        title:'Cooking Mama: Cuisine! ',
        genre:'Family',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/5a/7a/4a/5a7a4ab6-157c-b72a-3448-9774cab459a2/01294ab9-8d43-4a95-9583-cd09c6220c53.png/838x472.jpg'
    },
    {
        id:6,
        title:'Taiko no Tatsujin Pop Tap Beat ',
        genre:'Music',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/49/73/77/4973774b-a169-f53d-af34-5594e49e8957/VFMtQVAtV1ctVGFpa29fcG9wdGFwLnBuZw.png/838x472.jpg'
    },
    {
        id:7,
        title:'Sonic Dream Team ',
        genre:'Action',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/07/b3/16/07b31666-3485-d82c-e3fe-7268e49229b7/87214e06-e719-4ff2-a546-88b92a007bf3.png/838x472.jpg'
    },
     {
        id:8,
        title:'SpongeBob: Patty Pursuit ',
        genre:'Adventure',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/7e/c0/ac/7ec0acf8-fdff-8c68-44e2-8c795511bfbf/VFMtQVAtV1ctU3Bvbmdib2JfcGF0dHlwZXJzdWl0LTIucG5n.png/838x472.jpg'
    },
    {
        id:9,
        title:'Snake.io+ ',
        genre:'Action',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/82/a9/8d/82a98d2d-8396-19c1-a330-805e608668b2/4cbfe669-59d7-4361-bdb2-144d16b82db0.png/838x472.jpg'
    },
    {
        id:10,
        title:'Crayola Create and Play+ ',
        genre:'Family',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/7e/c0/ac/7ec0acf8-fdff-8c68-44e2-8c795511bfbf/VFMtQVAtV1ctU3Bvbmdib2JfcGF0dHlwZXJzdWl0LTIucG5n.png/838x472.jpg'
    },
    {
        id:11,
        title:'Slay the Spire+',
        genre:'Role-Playing',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/4c/b0/2c/4cb02c67-f64b-a9f0-e294-bc3244db9543/b6dceef0-ac3b-47eb-bc9f-86e48497d03b.png/838x472.jpg'
    },
    {
        id:12,
        title:'Sudoku by MobilityWare+',
        genre:'Pazzel',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/16/a2/80/16a280c2-35de-973b-a9fd-95af91547529/VFMtQVAtV1ctU3Vkb2t1IFNpbXBsZSArLnBuZw.png/838x472.jpg'
    },
];

const EntertainmentMarque3 = () => {
  return (
     
       <div className="h-auto bg-white p-6">
      <marquee behavior="infinite" direction="left" scrollamount="6">
        <div style={{ display: "flex", gap: "20px" }}>
          {show.map((show, index) => (
            <div
              key={index}
              style={{
                minWidth: "400px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={show.image}
                alt={show.title}
                className='h-50 w-200 '
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

export default EntertainmentMarque3