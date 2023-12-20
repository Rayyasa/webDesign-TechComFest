import Image from "next/image";
import bgPariwisata from "../../assets/pariwisata.png";
import ragamanAlam from "../../assets/ragaman_alam.jpeg"
import kekayaanBudaya from "../../assets/kekayaan_budaya.jpeg"
import kuliner from "../../assets/kuliner_indo.jpeg"
import petualangan from "../../assets/petualangan.jpeg"
import bali from "../../assets/bali_ikonik.jpeg"
import yogyakarta from "../../assets/yogyakarta.jpeg"
import komodo from "../../assets/komodo.jpeg"
import bunaken from "../../assets/bunaken.jpeg"
import rajaAmpat from "../../assets/raja_ampat.jpeg"
import bromo from "../../assets/bromo.jpeg"

const BlogPariwisata = () => {
  return (
    <section className="w-full max-w-[1600px] ">
      <section
        className="relative mt-16  h-72 w-full  "
        style={{
          backgroundImage: `url(${bgPariwisata.src})`,
          backgroundSize: "cover",
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full h-full absolute inset-0 flex-col items-center justify-center flex  gap-5 px-5">
          <h1 className="font-cardo text-4xl font-medium text-white">
            Pariwisata
          </h1>
          <p className="text-white text-center">
            {
              '" Pariwisata bukan hanya tentang destinasi, tetapi juga tentang petualangan, pengalaman baru, dan kenangan yang tak terlupakan. "'
            }
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2 mb-12 px-8 pt-[70px] xl:px-32">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgPariwisata}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">
            Pariwisata
          </h1>
          <p className="text-slate-600">
          Pariwisata di Indonesia menawarkan beragam keindahan alam, kekayaan budaya, dan petualangan yang tak terlupakan. Indonesia menawarkan pengalaman wisata yang beragam, mulai dari petualangan alam hingga warisan budaya yang kaya. Dengan kekayaan alam dan budayanya, Indonesia tetap menjadi salah satu tujuan wisata terpopuler di dunia.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={ragamanAlam}
              alt="Keanekaragaman Alam"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Keanekaragaman Alam</h1>
            <p className="text-slate-600">
            Indonesia memiliki keindahan alam yang luar biasa, mulai dari pantai-pantai tropis yang indah di Bali, Lombok, dan Maluku, hingga gunung-gunung megah seperti Gunung Bromo di Jawa Timur, Gunung Rinjani di Lombok, dan Gunung Kinabalu di Kalimantan. Taman Nasional Komodo juga menawarkan keindahan alam unik dengan keberadaan komodo, reptil raksasa yang hanya ditemukan di Indonesia.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={kekayaanBudaya}
              alt="Kekayaan Budaya"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Kekayaan Budaya</h1>
            <p className="text-slate-600">
            Indonesia kaya akan warisan budaya yang mengagumkan. Destinasi seperti Yogyakarta menawarkan kekayaan sejarah dengan Candi Borobudur dan Candi Prambanan, sementara di Bali, wisatawan dapat menikmati seni tari, musik tradisional, dan upacara keagamaan seperti upacara kecak dan upacara ngaben.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={kuliner}
              alt="Kuliner"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Kuliner</h1>
            <p className="text-slate-600">
            Indonesia terkenal dengan beragam masakan tradisionalnya. Mulai dari rendang Padang, sate, nasi goreng, hingga gado-gado, setiap daerah memiliki kuliner khasnya sendiri. Wisata kuliner di Indonesia memungkinkan pengunjung untuk mencicipi berbagai rasa yang autentik dan beragam.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={petualangan}
              alt="Aktivitas Petualangan"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Aktivitas Petualangan</h1>
            <p className="text-slate-600">
            Indonesia menawarkan berbagai aktivitas petualangan bagi para wisatawan, seperti menyelam di Taman Nasional Bunaken di Sulawesi, trekking di Gunung Semeru di Jawa Timur, berselancar di Pantai Mentawai di Sumatera, atau menjelajahi gua-gua di Kalimantan.
            </p>
          </div>
        </div>
      </section>

      <h1 className="font-cardo text-5xl px-8 pt-[140px xl:px-32">Wisata Ikonik Indonesia</h1>

      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2 mt-12 px-8 pt-[140px xl:px-32">
        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={bali}
              alt="Bali"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Bali</h1>
            <p className="text-slate-600">
            Pulau ini terkenal sebagai salah satu tujuan pariwisata terbesar di Indonesia. Dikenal dengan pantai-pantai spektakuler seperti Kuta, Seminyak, dan Jimbaran, serta kebudayaannya yang kaya, seperti tarian tradisional Bali, upacara keagamaan, dan seni pahat.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={yogyakarta}
              alt="Yogyakarta"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Yogyakarta</h1>
            <p className="text-slate-600">
            Menyimpan sejarah dan budaya yang kaya, Yogyakarta menawarkan destinasi budaya utama di Indonesia. Candi Borobudur, Candi Prambanan, Kraton Yogyakarta, serta kesenian tradisional Jawa seperti wayang kulit dan tari-tarian, menjadikannya tujuan yang sangat diminati.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={komodo}
              alt="Taman Nasional Komodo"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Taman Nasional Komodo</h1>
            <p className="text-slate-600">
            Terletak di Kepulauan Nusa Tenggara, taman nasional ini menjadi rumah bagi Komodo, reptil raksasa yang hanya ditemukan di sini. Wisatawan dapat menikmati trekking, menyelam, dan mengamati kehidupan liar di pulau-pulau yang terpencil.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={bunaken}
              alt="Bunaken"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Bunaken</h1>
            <p className="text-slate-600">
            Terkenal di kalangan penyelam, Taman Nasional Bunaken di Sulawesi Utara menawarkan kekayaan bawah laut yang luar biasa. Terumbu karang yang indah dan keanekaragaman hayati lautnya menjadikannya destinasi utama bagi para penyelam.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={rajaAmpat}
              alt="Pulau Raja Ampat"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Pulau Raja Ampat</h1>
            <p className="text-slate-600">
            Dikenal sebagai surga bagi penyelam, pulau-pulau di Raja Ampat, Papua Barat, menampilkan keindahan alam bawah laut yang tak tertandingi. Keanekaragaman terumbu karang dan biota lautnya membuatnya menjadi salah satu destinasi diving terbaik di dunia.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={bromo}
              alt="Gunung Bromo"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Gunung Bromo</h1>
            <p className="text-slate-600">
            Salah satu gunung berapi yang paling terkenal di Indonesia, Gunung Bromo di Jawa Timur menawarkan pemandangan matahari terbit yang spektakuler dari Bukit Penanjakan, serta padang pasir dan kawahnya yang menakjubkan.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogPariwisata;
