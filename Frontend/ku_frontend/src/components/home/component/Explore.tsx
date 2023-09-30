// // Explore.tsx
// import React from 'react';



// const Explore = () => {
//     return (
//         <div className='text-center'>
//             <h1>Welcome to the Explore page!</h1>
//             <p>This is some content you can explore.</p>
//             <div className='mt-12'>
//                 <h2 className='text-center font-semibold'>Pashupatinath/Kathmandu</h2>

//                 <iframe
//                     className='text-center'
//                     key="video1"
//                     width="560"
//                     height="315"
//                     src="https://www.youtube.com/embed/-h9dh8BzUqM?si=f1UiuYPI6Q_ePzPI"
//                     title="YouTube video player 1"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                 ></iframe>
//                 <br />
//                 <br />
//                 <div>
//                     <h2>Pokhara</h2>
//                     <iframe
//                         key="video2"
//                         width="560"
//                         height="315"
//                         src="https://www.youtube.com/embed/rpCjeuDBD4M?si=zJAbzavHq_eVC6b4"
//                         title="YouTube video player 2"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Explore;


import React from 'react';

const Explore = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mt-8">Welcome to the Explore page!</h1>
            <p className="text-gray-600 text-lg my-4">This is some content you can explore.</p>

            <div className="max-w-screen-lg w-full mx-auto my-8 ">
                <div className="flex  flex-col items-center   justify-center w-full gap-6">
                    <div className='w-full  px-3'>
                        <h2 className="text-2xl text-neutral-700 text-start  w-full font-semibold">Kathmandu</h2>
                    </div>

                    <iframe
                        key="video1"
                        width="1000"
                        height="450"
                        src="https://www.youtube.com/embed/-h9dh8BzUqM?si=f1UiuYPI6Q_ePzPI"
                        title="YouTube video player 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="flex  flex-col items-center  mt-36 justify-center w-full gap-6">
                    <div className='w-full  px-3'>
                        <h2 className="text-2xl text-neutral-700 text-start  w-full font-semibold">Pokhara</h2>
                    </div>

                    <iframe
                        key="video2"
                        width="1000"
                        height="450"
                        src="https://www.youtube.com/embed/rpCjeuDBD4M?si=zJAbzavHq_eVC6b4"
                        title="YouTube video player 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


        </div>
    );
};

export default Explore;
