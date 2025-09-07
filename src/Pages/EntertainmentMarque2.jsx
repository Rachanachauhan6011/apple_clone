import React from 'react'
const show = [
    {
        id:1,
        title:'Alpha',
        genre:'Apple Music',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/74/c7/96/74c7962d-c34a-a028-94f6-3bbbb9f09be0/2eb823ed-6583-4923-a35a-e96041bab1ac.png/468x468SC.DN01.jpg?l=en-GB'
    },
    {
        id:2,
        title:'Today’s Hits',
        genre:'Apple Music Hits',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/6a/fb/1f/6afb1feb-b861-16b5-2e47-8b6a75aab5ab/c897694c-38c8-4c70-9a29-c1900a8e5a32.png/468x468SC.DN01.jpg?l=en-GB'
    },
    {
        id:3,
        title:'Rap Life',
        genre:'Apple Music Hip-Hop/Rap',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/9a/7a/fd/9a7afd8b-9a79-8d82-ed17-083e3a895b48/435d2af8-2f27-41aa-a374-21269ef05048.png/468x468SC.DN01.jpg?l=en-GB'
    },
    {
        id:4,
        title:'¡Dale Play! ',
        genre:'Apple Music Latin',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/1a/39/13/1a391324-7714-b479-054e-b9ddf2a1859d/fa332c10-932d-4c1a-9ccd-778f704c1c77.png/468x468SC.DN01.jpg?l=en-GB'
    },
    {
        id:5,
        title:'Today’s Country',
        genre:'Apple Music Country',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/b2/0d/37/b20d3763-e8d4-4c46-940b-9e352b05b478/c8caca03-5a18-4373-a7e9-6c470b9ed056.png/468x468SC.DN01.jpg?l=en-GB'
    },
    {
        id:6,
        title:'Sabrina Carpenter: The Zane Lowe Interview',
        genre:'The pop star delves deep into her LP Man’s Best Friend.',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/468x468sr.jpg'
    },
    {
        id:7,
        title:'A-List Pop',
        genre:'Apple Music Pop',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/53/26/97/5326974c-c970-360e-6cd0-1939f50cc68c/2bffd9c9-f03f-4e09-abd5-4a9503fce13e.png/468x468SC.DN01.jpg?l=en-GB'
    },
     {
        id:8,
        title:'New Music Daily',
        genre:' Apple Music',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/c8/75/5e/c8755e93-70fe-d192-7882-babce5653411/6a1839ab-ada2-40cf-a4c4-8a05e3a87f18.png/468x468SC.DN01.jpg?l=en-GB'
    },
];

const EntertainmentMarque2 = () => {
  return (
     
       <div className="h-auto bg-white p-6">
      <marquee behavior="infinite" direction="left" scrollamount="6">
        <div style={{ display: "flex", gap: "20px" }}>
          {show.map((show, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px",
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

export default EntertainmentMarque2