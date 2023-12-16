"use client";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import useHideNav from "./hook/useHideNav";
import penari from "../assets/penari.png";
import batikLogo from "../assets/1178.jpg";
import boro from "../assets/borobudur.jpg";
import logo from "../assets/indiscoveries-logo.png";
import { Cardo, Gideon_Roman } from "next/font/google";
import Most from "@/components/most";
import { useEffect, useRef, useState } from "react";
import bgWhite5 from "../assets/bgWhite5.png";
import Button from "@/components/button";
import "./globals.css";
import bgPariwista from "../assets/pariwisata.png";
import bgSejarah from "../assets/sejarah.png";
import bgSeni from "../assets/seni.png";
import bgFestival from "../assets/festival.png";
import bgKuliner from "../assets/kuliner.png";
import bgSenjata from "../assets/senjata.jpg";
import { useMousePosition } from "./hook/useMousePosition";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";
import foto6 from "../assets/foto6.png";
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import CardBlog from "@/components/CardBlog";
import jokowi from "../assets/jokowi.jpeg";
import sri from "../assets/sri-mulyani.jpeg";
import anies from "../assets/anies.jpeg";
import megawati from "../assets/megawati.jpeg";
import susi from "../assets/susi.jpeg";
import bj from "../assets/bj.jpeg";
import tito from "../assets/tito.jpeg";
import yenny from "../assets/yenny.jpeg";
import agus from "../assets/agus.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import CardTokoh from "@/components/CardTokoh";
// import SwiperComponent from "@/components/ImageSlider";
export default function Home() {
  const [show5w, setShow5w] = useState(false);
  const { clientX, clientY } = useMousePosition();

  const target5w = useRef<HTMLDivElement>(null);
  const targetHero = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShow5w((prev) => true);
    if (target5w.current) {
      target5w.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    window.screenY = 0;
  };
  const handleBack = async () => {
    setShow5w((prev) => false);
    if (targetHero.current) {
      await targetHero.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    window.screenY = 0;
  };

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      // console.log(e)
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const tokohData = [
    {
      img: jokowi.src,
      text: `"Budaya adalah jati diri sebuah bangsa, Indonesia kaya akan kebudayaan, kita harus melestarikannya untuk generasi mendatang."`,
      nama: `"Joko WiDodo"`,
    },
    {
      img: sri.src,
      text: `"Keanekaragaman budaya Indonesia adalah sumber kekuatan bagi kita. Melalui kesatuan dalam perbedaan, kita membangun identitas yang kokoh."`,
      nama: `"Sri Mulyani Indrawati"`,
    },
    {
      img: anies.src,
      text: `"Budaya adalah cerminan hati nurani suatu bangsa. Keberagaman budaya Indonesia adalah aset yang harus dijaga dengan penuh kebanggaan."`,
      nama: `"Anies Baswedan"`,
    },
    {
      img: megawati.src,
      text: `"Budaya bukanlah batasan, tapi jembatan penghubung untuk memahami satu sama lain. Mari kita jaga kekayaan budaya Indonesia sebagai landasan persatuan."`,
      nama: `"Megawati Soekarnoputri"`,
    },
    {
      img: susi.src,
      text: `"Kita memiliki begitu banyak kekayaan budaya yang beragam. Mari jadikan keberagaman ini sebagai kekuatan dalam membangun Indonesia yang lebih baik."`,
      nama: `"Susi Pudjiastuti"`,
    },
    {
      img: bj.src,
      text: `"Budaya Indonesia adalah permata berharga yang harus dijaga, dipelihara, dan dibanggakan. Inilah yang menjadi ciri khas dan kekuatan bangsa."`,
      nama: `"B.J. Habibie"`,
    },
    {
      img: tito.src,
      text: `"Budaya adalah warisan leluhur yang menjadi penanda jati diri bangsa. Mari lestarikan kearifan lokal sebagai bagian tak terpisahkan dari identitas kita."`,
      nama: `"Tito Karnavian"`,
    },
    {
      img: yenny.src,
      text: `"Dalam keberagaman budaya terdapat kekuatan yang luar biasa. Mari kita jadikan kekayaan ini sebagai landasan untuk bersatu dan maju bersama."`,
      nama: `"Yenny Wahid"`,
    },
    {
      img: agus.src,
      text: `"Budaya adalah cerminan kearifan lokal yang memperkaya identitas bangsa. Mari kita jaga keberagaman ini sebagai kekuatan bersama."`,
      nama: `"Agus Harimurti Yudhoyono"`,
    },
  ];
  return (
    <main className="flex min-h-screen w-full max-w-[1600px] mx-auto  pt-[60px] flex-col">
      <section
        className={`${
          show5w ? "h-[3000px]" : "h-[600px]"
        } w-full bg-pink-600  overflow-hidden ${
          show5w ? "rounded-none" : "rounded-[0%0%50%50%/0%0%10%10%]"
        } transition-all duration-700`}
      >
        <div
          className="h-[600px] group"
          style={{
            backgroundImage: `url(${boro.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          ref={targetHero}
        >
          <div className="w-full h-full bg-gradient-to-r from-black/70 to-transparent flex flex-row justify-between items-center px-4 md:px-32">
            <div className="w-full xl:w-[700px] group-hover:ml-3 transition-all duration-700 flex flex-col items-center xl:items-start">
              <h1 className={"text-white font-cardo font-base text-3xl"}>
                Selamat datang di
              </h1>
              <h1
                className={
                  "font-cardo font-base text-6xl md:text-9xl bg-clip-text stroke-current text-transparent w-fit"
                }
                style={{
                  backgroundImage: `url(${bgWhite5.src})`,
                  backgroundSize: "cover",
                }}
              >
                Indiscoveries
              </h1>
              <h1 className={"text-white font-cardo font-base text-xl"}>
                Jelajahi, Pelajari, Cintai
              </h1>
              <div className="mt-7 group-hover:ml-5 transition-all duration-700">
                <Button title="Apa itu budaya ?" onClick={handleShow} />
              </div>
              {/* <Image src={logo} alt="indiscoveries" className="w-full object-cover drop-shadow-2xl "/> */}
            </div>

            <div className=" hidden h-full w-[270px] group-hover:w-[280px] xl:flex items-end mr-10 group-hover:mr-14 transition-all duration-700">
              <Image alt="penari" src={penari} className="object-cover" />
            </div>
          </div>
        </div>
        <div
          className="w-full md:h-[3000px] bg-green-500 flex flex-col"
          ref={target5w}
        >
          <div
            style={{
              backgroundImage: `url(${foto1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px]"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-r md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center md:items-start items-center pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                What (Apa)
              </h1>
              <p className="text-white text-lg md:text-left text-center">
                Budaya Indonesia adalah warisan nilai-nilai, tradisi, bahasa,
                seni, dan kepercayaan yang dimiliki oleh masyarakat Indonesia.
                Budaya ini mencakup beragam aspek seperti seni tari, musik,
                kuliner, pakaian adat, dan perayaan keagamaan.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${foto2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px] flex flex-row-reverse"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-l md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center md:items-end items-center pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                Who (Siapa)
              </h1>
              <p className="text-white text-lg  md:text-right text-center">
                Budaya Indonesia melibatkan seluruh penduduk Indonesia, yang
                terdiri dari berbagai suku, agama, dan etnis. Masyarakat
                Indonesia terdiri dari lebih dari 300 suku bangsa, yang memiliki
                kebudayaan dan tradisi yang berbeda-beda.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${foto3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px]"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-r md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center md:items-start items-center pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                Where (Di mana)
              </h1>
              <p className="text-white text-lg text-center md:text-left">
                Budaya Indonesia tersebar di seluruh kepulauan Indonesia, yang
                terdiri dari ribuan pulau besar dan kecil. Beberapa kota besar
                seperti Jakarta, Yogyakarta, dan Bali menjadi pusat kegiatan
                seni, budaya, dan pariwisata.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${foto4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px] flex flex-row-reverse"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-l md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center items-center md:items-end pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                When (Kapan)
              </h1>
              <p className="text-white text-lg text-center  md:text-right">
                Budaya Indonesia memiliki sejarah panjang yang dimulai sejak
                zaman prasejarah. Beberapa elemen budaya Indonesia memiliki akar
                sejarah ribuan tahun, sementara yang lain berkembang selama masa
                kolonial dan pascakemerdekaan Indonesia pada tahun 1945.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${foto5.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px]"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-r md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center md:items-start items-center pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                Why (Mengapa)
              </h1>
              <p className="text-white text-lg md:text-left text-center">
                Budaya Indonesia penting karena mencerminkan identitas dan
                keberagaman bangsa Indonesia. Budaya ini juga merupakan sarana
                untuk melestarikan tradisi nenek moyang, mempererat hubungan
                sosial, dan mempromosikan pariwisata. Selain itu, budaya
                Indonesia juga menjadi wadah ekspresi seni dan kreativitas
                masyarakat.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${foto6.src})`,
              backgroundSize: "cover",
              backgroundPosition: "rigth 30%",
            }}
            className="w-full h-[500px] flex flex-row-reverse"
          >
            <div className="md:w-[50%] w-full h-full bg-gradient-to-l md:from-black/60 from-black/60 to-black/60 flex flex-col justify-center items-center md:items-end pl-8 pr-8 xl:pl-32 xl:pr-24 gap-4">
              <h1 className="text-white font-cardo text-5xl font-semibold">
                How (Bagaimana)
              </h1>
              <p className="text-white text-lg text-center  md:text-right">
                Budaya Indonesia berkembang melalui generasi-generasi,
                diwariskan melalui cerita-cerita lisan, praktik-praktik
                sehari-hari, serta melalui seni dan pertunjukan. Pendidikan
                formal dan non-formal juga memainkan peran penting dalam
                melestarikan dan mengembangkan budaya Indonesia. Upaya
                pelestarian dan promosi budaya juga dilakukan melalui festival
                seni, pameran, dan kegiatan-kegiatan budaya lainnya.
              </p>
              <Button title="Lebih sedikit" onClick={handleBack} />
            </div>
          </div>
        </div>
      </section>
      <section className=" px-8 xl:px-32 mt-14 xl:mt-28 flex flex-col justify-between items-start gap-4">
        <h1 className="font-cardo text-3xl xl:text-5xl mb-5 text-center ">
          Jelajahi Kebudayaan indonesia
        </h1>

        <div className="flex flex-col xl:flex-row items-start  w-full justify-between">
          <p className="hidden xl:flex text-gray-700 text-justify pt-5 max-w-lg">
            Selamat datang di koleksi video budaya Indonesia kami! Temukan
            keindahan dan keanekaragaman budaya Indonesia dalam potret singkat
            yang memukau. Setiap video ini adalah jendela ke pesona kebudayaan
            Indonesia. Rasakan kehangatan dan kekayaan warisan budaya dari
            berbagai daerah dengan setiap tarian, ritual, dan kegiatan yang kami
            sajikan. Mari menjelajahi keberagaman budaya yang memikat hati
            melalui video kami. Selamat menikmati keindahan budaya Indonesia!
          </p>
          <div className="aspect-video w-full xl:w-auto xl:h-[320px] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_dlBUHhDOQU?si=YFRlYsB1BD_0fpeX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="xl:hidden text-gray-700 text-justify pt-5 ">
            Selamat datang di koleksi video budaya Indonesia kami! Temukan
            keindahan dan keanekaragaman budaya Indonesia dalam potret singkat
            yang memukau. Setiap video ini adalah jendela ke pesona kebudayaan
            Indonesia. Rasakan kehangatan dan kekayaan warisan budaya dari
            berbagai daerah dengan setiap tarian, ritual, dan kegiatan yang kami
            sajikan. Mari menjelajahi keberagaman budaya yang memikat hati
            melalui video kami. Selamat menikmati keindahan budaya Indonesia!
          </p>
        </div>
      </section>

      <section className="px-8 xl:px-32 mt-14 xl:mt-28">
        <h1 className="font-cardo text-3xl xl:text-5xl">Most Topics</h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 mt-10 gap-4 xl:gap-10">
          <Most
            title="Sejarah Budaya"
            image={bgSejarah.src}
            additional="xl:col-span-2"
          />
          <Most title="Kuliner" image={bgKuliner.src} />
          <Most
            title="Festival Budaya"
            image={bgFestival.src}
            additional="xl:row-span-2 h-auto"
          />
          <Most title="Pariwisata" image={bgPariwista.src} />
          <Most title="Seni Tradisional" image={bgSeni.src} />
          <Most title="Senjata" image={bgSenjata.src} />
        </div>
      </section>

      <section className="px-8 xl:px-32 mt-14 xl:mt-28 w-full">
        <h1 className="font-cardo text-3xl xl:text-5xl">Gallery</h1>
        <section className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-4">
          <div className="rounded-md overflow-hidden shadow-xl  ">
            <Image
              src={g1}
              alt="foto 1"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g2}
              alt="foto 2"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g3}
              alt="foto 3"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g4}
              alt="foto 4"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g5}
              alt="foto 5"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g6}
              alt="foto 6"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g7}
              alt="foto 7"
              className="w-full  object-cover aspect-video"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl ">
            <Image
              src={g8}
              alt="foto 8"
              className="w-full  object-cover aspect-video"
            />
          </div>
        </section>
      </section>

      <section className="px-8 xl:px-32 mt-14 xl:mt-28 w-full">
        <h1 className="font-cardo text-3xl xl:text-5xl">Blog</h1>
        <section className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-4">
          <CardBlog
            img={g1.src}
            tanggal={"6 Des 2023"}
            waktu={"2mins ago"}
            title={"Pesona Indonesia"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend libero lectus, non malesuada quam vestibulum eget. Sed vitae velit ac massa tincidunt suscipit blandit sit amet lectus. Quisque orci nisl, pulvinar pulvinar arcu eu, molestie bibendum leo. Nunc pulvinar tortor eget sapien tristique, a efficitur odio laoreet. Nunc ac lorem porttitor erat hendrerit efficitur. Etiam volutpat tincidunt tellus, vitae maximus justo facilisis sit amet. Vestibulum egestas et ipsum nec congue. Quisque congue mauris ut lacus molestie, a venenatis magna molestie."
            }
          />
          <CardBlog
            img={g1.src}
            tanggal={"6 Des 2023"}
            waktu={"2mins ago"}
            title={"Pesona Indonesia"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend libero lectus, non malesuada quam vestibulum eget. Sed vitae velit ac massa tincidunt suscipit blandit sit amet lectus. Quisque orci nisl, pulvinar pulvinar arcu eu, molestie bibendum leo. Nunc pulvinar tortor eget sapien tristique, a efficitur odio laoreet. Nunc ac lorem porttitor erat hendrerit efficitur. Etiam volutpat tincidunt tellus, vitae maximus justo facilisis sit amet. Vestibulum egestas et ipsum nec congue. Quisque congue mauris ut lacus molestie, a venenatis magna molestie."
            }
          />
          <CardBlog
            img={g1.src}
            tanggal={"6 Des 2023"}
            waktu={"2mins ago"}
            title={"Pesona Indonesia"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend libero lectus, non malesuada quam vestibulum eget. Sed vitae velit ac massa tincidunt suscipit blandit sit amet lectus. Quisque orci nisl, pulvinar pulvinar arcu eu, molestie bibendum leo. Nunc pulvinar tortor eget sapien tristique, a efficitur odio laoreet. Nunc ac lorem porttitor erat hendrerit efficitur. Etiam volutpat tincidunt tellus, vitae maximus justo facilisis sit amet. Vestibulum egestas et ipsum nec congue. Quisque congue mauris ut lacus molestie, a venenatis magna molestie."
            }
          />
          <CardBlog
            img={g1.src}
            tanggal={"6 Des 2023"}
            waktu={"2mins ago"}
            title={"Pesona Indonesia"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend libero lectus, non malesuada quam vestibulum eget. Sed vitae velit ac massa tincidunt suscipit blandit sit amet lectus. Quisque orci nisl, pulvinar pulvinar arcu eu, molestie bibendum leo. Nunc pulvinar tortor eget sapien tristique, a efficitur odio laoreet. Nunc ac lorem porttitor erat hendrerit efficitur. Etiam volutpat tincidunt tellus, vitae maximus justo facilisis sit amet. Vestibulum egestas et ipsum nec congue. Quisque congue mauris ut lacus molestie, a venenatis magna molestie."
            }
          />
        </section>
      </section>

      <section className="px-8 xl:px-32 mt-14 xl:mt-28 w-full">
        <h1 className="font-cardo text-3xl xl:text-5xl">Apa Kata Tokoh</h1>
        <section className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 mt-10 gap-4">
          {tokohData.map((item, index) => (
            <CardTokoh
              img={item.img}
              text={item.text}
              nama={item.nama}
              key={index}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
