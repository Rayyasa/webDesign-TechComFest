"use client";
import Lenis from "@studio-freight/lenis";
import Image, { StaticImageData } from "next/image";
import useHideNav from "./hook/useHideNav";
import penari from "../assets/penari.png";
import batikLogo from "../assets/1178.jpg";
import boro from "../assets/borobudur.webp";
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
import foto1 from "../assets/foto1.webp";
import foto2 from "../assets/foto2.webp";
import foto3 from "../assets/foto3.webp";
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
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
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
import CardTokoh from "@/components/CardTokoh";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Calendar from "@/components/Calendar";

export default function Home() {
  const router = useRouter();

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

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e: any) => {
  //     // console.log(e)
  //   });

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

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

  const kalender = [
    {
      namaBulan: "Jan.",
      peristiwa: [
        "Tahun Baru",
        "Hari Peringatan Penjajahan Belanda",
        "Cap Go Meh",
      ],
    },
    {
      namaBulan: "Feb.",
      peristiwa: ["Hari Kehidupan dan Kematian"],
    },
    {
      namaBulan: "Mar.",
      peristiwa: [
        "Hari Film Nasional",
        "Hari Perempuan Internasional",
        "Hari Kebangkitan Nasional",
      ],
    },
    {
      namaBulan: "Apr.",
      peristiwa: ["Hari Pendidikan Nasional", "Hari Kartini"],
    },
    {
      namaBulan: "Mei",
      peristiwa: [
        "Hari Buruh Internasional",
        "Hari Kebangkitan Nasional",
        "Hari Raya Waisak",
      ],
    },
    {
      namaBulan: "Jun.",
      peristiwa: ["Hari Pancasila", "Hari Lahir Pancasila", "Hari Raya Idul Fitri"],
    },
    {
      namaBulan: "Jul.",
      peristiwa: [
        "Hari Bhayangkara",
        "Hari Kemerdekaan Republik Indonesia",
        "Hari Raya Idul Adha",
      ],
    },
    {
      namaBulan: "Agu.",
      peristiwa: [
        "Hari Kemerdekaan Republik Indonesia",
        "Hari Jadi Kota/Kabupaten",
      ],
    },
    {
      namaBulan: "Sep.",
      peristiwa: ["Hari Pertahanan Indonesia"],
    },
    {
      namaBulan: "Okt.",
      peristiwa: ["Hari Batik Nasional", "Hari Sumpah Pemuda"],
    },
    {
      namaBulan: "Nov.",
      peristiwa: ["Hari Pahlawan", "Hari Guru Nasional", "Hari Ayah Nasional"],
    },
    {
      namaBulan: "Des.",
      peristiwa: [
        "Hari Ibu",
        "Hari Natal",
        "Hari Ulang Tahun Kota/Kabupaten",
      ],
    },
  ];
  

  const imageSources = [g1, g2, g3, g4, g5, g6, g7, g8];

  const [imgSrc, setImgSrc] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && (
        <section className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex items-center justify-center bg-black/60">
          <XMarkIcon
            className="absolute right-5 top-5 h-10 text-white md:right-10 md:top-10"
            onClick={() => setIsOpen((prev) => !prev)}
          />

          <Image
            src={imgSrc}
            alt="foto"
            width={500}
            height={500}
            className="h-[80vh] w-[90%] rounded-xl border border-black/20 object-cover md:w-[50%]"
          />
        </section>
      )}

      <main className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col pt-[60px]">
        <section
        id="home"
          className={`${
            show5w ? "h-[3000px]" : "h-[600px]"
          } w-full overflow-hidden  bg-pink-600 ${
            show5w ? "rounded-none" : "rounded-[0%0%50%50%/0%0%10%10%]"
          } transition-all duration-700`}
        >
          <div
            className="group h-[600px]"
            style={{
              backgroundImage: `url(${boro.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            ref={targetHero}
          >
            <div className="flex h-full w-full flex-row items-center justify-between bg-gradient-to-r from-black/70 to-transparent px-4 md:px-32">
              <div className="flex w-full flex-col items-center transition-all duration-700 group-hover:ml-3 xl:w-[700px] xl:items-start">
                <h1 className={"font-base font-cardo text-3xl text-white"}>
                  Selamat datang di
                </h1>
                <h1
                  className={
                    "font-base w-fit bg-clip-text stroke-current font-cardo text-6xl text-transparent md:text-9xl"
                  }
                  style={{
                    backgroundImage: `url(${bgWhite5.src})`,
                    backgroundSize: "cover",
                  }}
                >
                  Indiscoveries
                </h1>
                <h1 className={"font-base font-cardo text-xl text-white"}>
                  Jelajahi, Pelajari, Cintai
                </h1>
                <div className="mt-7 transition-all duration-700 group-hover:ml-5">
                  <Button title="Apa itu budaya ?" onClick={handleShow} />
                </div>
              </div>

              <div className=" mr-10 hidden h-full w-[270px] items-end transition-all duration-700 group-hover:mr-14 group-hover:w-[280px] xl:flex">
                <Image alt="penari" src={penari} className="object-cover" />
              </div>
            </div>
          </div>
          <div
            className="flex w-full flex-col bg-green-500 md:h-[3000px]"
            ref={target5w}
          >
            <div
              style={{
                backgroundImage: `url(${foto1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "rigth 30%",
              }}
              className="h-[500px] w-full"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-start md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  What (Apa)
                </h1>
                <p className="text-center text-lg text-white md:text-left">
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
              className="flex h-[500px] w-full flex-row-reverse"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-l from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-end md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  Who (Siapa)
                </h1>
                <p className="text-center text-lg  text-white md:text-right">
                  Budaya Indonesia melibatkan seluruh penduduk Indonesia, yang
                  terdiri dari berbagai suku, agama, dan etnis. Masyarakat
                  Indonesia terdiri dari lebih dari 300 suku bangsa, yang
                  memiliki kebudayaan dan tradisi yang berbeda-beda.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${foto3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "rigth 30%",
              }}
              className="h-[500px] w-full"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-start md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  Where (Di mana)
                </h1>
                <p className="text-center text-lg text-white md:text-left">
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
              className="flex h-[500px] w-full flex-row-reverse"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-l from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-end md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  When (Kapan)
                </h1>
                <p className="text-center text-lg text-white  md:text-right">
                  Budaya Indonesia memiliki sejarah panjang yang dimulai sejak
                  zaman prasejarah. Beberapa elemen budaya Indonesia memiliki
                  akar sejarah ribuan tahun, sementara yang lain berkembang
                  selama masa kolonial dan pascakemerdekaan Indonesia pada tahun
                  1945.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${foto5.src})`,
                backgroundSize: "cover",
                backgroundPosition: "rigth 30%",
              }}
              className="h-[500px] w-full"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-start md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  Why (Mengapa)
                </h1>
                <p className="text-center text-lg text-white md:text-left">
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
              className="flex h-[500px] w-full flex-row-reverse"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-l from-black/60 to-black/60 pl-8 pr-8 md:w-[50%] md:items-end md:from-black/60 xl:pl-32 xl:pr-24">
                <h1 className="font-cardo text-5xl font-semibold text-white">
                  How (Bagaimana)
                </h1>
                <p className="text-center text-lg text-white  md:text-right">
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

        <section className=" mt-14 flex flex-col items-start justify-between gap-4 px-8 xl:mt-28 xl:px-32">
          <h1 className="mb-5 text-center font-cardo text-3xl xl:text-5xl ">
            Jelajahi Kebudayaan indonesia
          </h1>

          <div className="flex w-full flex-col items-start  justify-between xl:flex-row">
            <p className="hidden max-w-lg pt-5 text-justify text-gray-700 xl:flex">
              Selamat datang di koleksi video budaya Indonesia kami! Temukan
              keindahan dan keanekaragaman budaya Indonesia dalam potret singkat
              yang memukau. Setiap video ini adalah jendela ke pesona kebudayaan
              Indonesia. Rasakan kehangatan dan kekayaan warisan budaya dari
              berbagai daerah dengan setiap tarian, ritual, dan kegiatan yang
              kami sajikan. Mari menjelajahi keberagaman budaya yang memikat
              hati melalui video kami. Selamat menikmati keindahan budaya
              Indonesia!
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl xl:h-[320px] xl:w-auto">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/_dlBUHhDOQU?si=YFRlYsB1BD_0fpeX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="pt-5 text-justify text-gray-700 xl:hidden ">
              Selamat datang di koleksi video budaya Indonesia kami! Temukan
              keindahan dan keanekaragaman budaya Indonesia dalam potret singkat
              yang memukau. Setiap video ini adalah jendela ke pesona kebudayaan
              Indonesia. Rasakan kehangatan dan kekayaan warisan budaya dari
              berbagai daerah dengan setiap tarian, ritual, dan kegiatan yang
              kami sajikan. Mari menjelajahi keberagaman budaya yang memikat
              hati melalui video kami. Selamat menikmati keindahan budaya
              Indonesia!
            </p>
          </div>
        </section>

        <section className="mt-14 px-8 xl:mt-28 xl:px-32" id="topics">
          <h1 className="font-cardo text-3xl xl:text-5xl">Most Topics</h1>
          <div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-10">
            <Most
              title="Sejarah Budaya"
              image={bgSejarah.src}
              additional="xl:col-span-2"
              onClick={() => router.push("/blog-sejarah")}
            />
            <Most
              title="Kuliner"
              image={bgKuliner.src}
              onClick={() => router.push("/blog-kuliner")}
            />
            <Most
              title="Festival Budaya"
              image={bgFestival.src}
              additional="xl:row-span-2 h-auto"
              onClick={() => router.push("/blog-festival")}
            />
            <Most
              title="Pariwisata"
              image={bgPariwista.src}
              onClick={() => router.push("/blog-pariwisata")}
            />
            <Most
              title="Seni Tradisional"
              image={bgSeni.src}
              onClick={() => router.push("/blog-seni")}
            />
            <Most
              title="Senjata"
              image={bgSenjata.src}
              onClick={() => router.push("/blog-senjata")}
            />
          </div>
        </section>

        <section className="mt-14 w-full px-8 xl:mt-28 xl:px-32" id="gallery">
          <h1 className="font-cardo text-3xl xl:text-5xl">Gallery</h1>

          <section className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {imageSources.map((srcImage, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-md shadow-xl"
                onClick={() => {
                  setImgSrc(srcImage);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={srcImage}
                  alt={`foto ${index + 1}`}
                  className="aspect-video w-full object-cover"
                />
              </div>
            ))}
          </section>
        </section>

        <section className="mt-14 w-full px-8 xl:mt-28 xl:px-32" id="blog">
          <h1 className="font-cardo text-3xl xl:text-5xl">Blog</h1>
          <section className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <CardBlog
              url="https://labirutour.com/blog/mie-semarang"
              img={blog1.src}
              tanggal={"19 Des 2023"}
              waktu={"19mins ago"}
              title={"Eksplorasi Rasa dan Aroma, Berikut 5 Mie yang Wajib Dicoba di Semarang"}
              text={
                "Semarang merupakan kota yang kaya akan sejarah dan keberagaman budaya. Selain menjadi pusat bisnis dan industri, kota ini juga memiliki aneka ragam kuliner. Salah satu kuliner yang tidak terbantahkan adalah kelezatan mie yang ditemukan di beberapa sudut. "
              }
            />
            <CardBlog
              url="https://labirutour.com/blog/nicoles-river-park-bogor"
              img={blog2.src}
              tanggal={"18 Des 2023"}
              waktu={"5mins ago"}
              title={"Istana Panda Taman Safari Cisarua, Surganya Para Pecinta Panda"}
              text={
                "Panda jantan (Cai Tao) dan panda betina (Hu Chun), keduanya tinggal di area yang tidak kurang dari 5000 meter persegi, diperkirakan luas areanya mencapai 3 hektar. Semakin mengagumkan lagi, tempat tinggal mereka juga didesain semirip mungkin dengan tempat asalnya. Keren, bukan?"
              }
            />
            <CardBlog
              url="https://labirutour.com/blog/istana-panda-taman-safari-cisarua"
              img={blog3.src}
              tanggal={"19 Des 2023"}
              waktu={"15mins ago"}
              title={"Keliling Dunia dalam Satu Lokasi di Nicole’s River Park Bogor"}
              text={
                "Bogor bukan hanya dikenal masyarakat dengan berbagai destinasi wisata alam dengan pemandangan yang mempesona, tetapi juga karena berbagai destinasi wisata yang cocok sebagai tempat rekreasi keluarga dan edukasi. Baik berupa destinasi alami ataupun destinasi buatan, semuanya berhasil mencuri perhatian wisatawan."
              }
            />
            <CardBlog
              url="https://labirutour.com/blog/nasi-telur-jogja"
              img={blog4.src}
              tanggal={"16 Des 2023"}
              waktu={"8mins ago"}
              title={"Explore Nasi Telur yang Viral di Jogja, Cocok Untuk Kantong Kering"}
              text={
                "Jogja menjadi salah satu surga bagi pecinta kuliner karena memiliki kuliner yang beragam, dimulai dari makanan tradisional, internasional, hingga modern. Kamu bisa menemukan beragam kuliner yang bisa kamu cicipi di kota ini di tiap-tiap sudut kota."
              }
            />
          </section>
        </section>

        <section className="mt-14 w-full px-8 xl:mt-28 xl:px-32" id="quotes">
          <h1 className="font-cardo text-3xl xl:text-5xl">Apa Kata Tokoh</h1>
          <section className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-3">
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
        <section className="mt-14 w-full px-8 xl:mt-28 xl:px-32" id="event">
          <h1 className="font-cardo text-3xl xl:text-5xl">
            Indonesia Culture Event
          </h1>
          <section className="mt-10 grid w-full grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-3 xl:gap-14">
            {kalender.map((_, i) => {
              return <Calendar key={i} bulan={_.namaBulan} peristiwa={_.peristiwa} />
            })}
          </section>
        </section>
      </main>
    </>
  );
}
