// // import { useState } from "react";
// // import {
// //   ArrowLongLeftIcon,
// //   ArrowLongRightIcon,
// // } from "@heroicons/react/24/outline";
// // interface imgSliderProps {
// //   imageUrl: string[];
// // }

// // export const ImageSlider = ({ imageUrl }: imgSliderProps) => {
// //   const [imgIndex, setImgIndex] = useState(0);

// //   const showNextImage = () => {
// //     setImgIndex((index) => {
// //       if (index === imageUrl.length - 1) return 0;
// //       return index + 1;
// //     });
// //   };

// //   const showPrevImage = () => {
// //     setImgIndex((index) => {
// //       if (index === 0) return imageUrl.length - 1;
// //       return index - 1;
// //     });
// //   };

// //   return (
// //     <div className="w-full relative overflow-hidden h-96">
// //       <div style={{ width: "100%", display: "flex", overflow: 'hidden' }}>
// //         {imageUrl.map((url) => (
// //           <img
// //             key={url}
// //             src={url}
// //             alt=""
// //             className="object-cover w-full block flex-shrink-0 flex-grow-0 transition duration-300 ease-in-out"
// //             style={{ translate: `${-100 * imgIndex}%` }}
// //           />
// //         ))}
// //       </div>
// //       <button
// //         className=" block absolute top-0 bottom-0 p-4 cursor-pointer hover:bg-black hover:bg-opacity-20"
// //         style={{ left: 0 }}
// //         onClick={showPrevImage}
// //       >
// //         <ArrowLongLeftIcon className=" h-8 w-8 stroke-white" />
// //       </button>
// //       <button
// //         className="block absolute top-0 bottom-0 p-4 cursor-pointer hover:bg-black hover:bg-opacity-20"
// //         style={{ right: 0 }}
// //         onClick={showNextImage}
// //       >
// //         <ArrowLongRightIcon className="h-8 w-8 stroke-white" />
// //       </button>
// //       <div>
// //         {imageUrl.map((_,index) => (
// //           <button className="btn"
// //            onClick={() => setImgIndex(index)}>{index}</button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import g1 from "../assets/g1.jpeg";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// export const ImageSlider = () => {
//   return (
//     <div className="container">
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         slidesPerView={1}
//         navigation
//         pagination={{ type: "fraction" }}
//         className="h-96 w-full rounded-lg"
//       >
//         <SwiperSlide>
//           <div className="flex h-full w-full items-center justify-center">
//             <Image
//               src={g1}
//               alt="Blog 1"
//               className=" object-cover block h-full w-full"
//               width={500}
//               height={0}
//               style={{ width: "100%" }}
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };
