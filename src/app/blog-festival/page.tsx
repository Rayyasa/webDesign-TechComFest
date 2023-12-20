import Image from "next/image";
import bgFestival from "../../assets/festival.jpeg";
import baliArt from "../../assets/bali_art.jpg"
import jemberFashion from "../../assets/jember.jpg"
import tobaFest from "../../assets/danau_toba.jpg"
import keraton from "../../assets/keraton.jpg"

const BlogFestival = () => {
  return (
    <section className="w-full max-w-[1600px]">
      <section
        className="relative mt-16  h-72 w-full  "
        style={{
          backgroundImage: `url(${bgFestival.src})`,
          backgroundSize: "cover",
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="w-full h-full absolute inset-0 flex-col items-center justify-center flex  gap-5 px-5">
          <h1 className="font-cardo text-4xl font-medium text-white">
            Festival Budaya
          </h1>
          <p className="text-white text-center">
            {
              '" Festival adalah momen di mana kita dapat merayakan keberagaman budaya, memelihara warisan, dan menghargai keindahan perbedaan di antara kita. "'
            }
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2  px-8 pt-[140px] xl:px-32">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgFestival}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">
            Festival Budaya
          </h1>
          <p className="text-slate-600">
          Di Indonesia, festival budaya menjadi bagian penting dalam merayakan dan memperingati keanekaragaman budaya yang dimiliki oleh berbagai suku dan daerah di seluruh negeri. Setiap festival budaya Indonesia menawarkan pengalaman yang unik dan mempesona bagi para pengunjung, memperlihatkan keindahan serta kekayaan warisan budaya yang dimiliki oleh negara ini. Festival-festival ini juga menjadi wadah penting dalam melestarikan dan mempromosikan keberagaman budaya Indonesia kepada dunia.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={baliArt}
              alt="Bali Arts Festival"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Bali Arts Festival</h1>
            <p className="text-slate-600">
            Festival seni dan budaya yang diadakan setiap tahun di Pulau Bali. Festival ini berlangsung selama sekitar sebulan penuh, dimulai dengan parade pembukaan yang memamerkan seni tari, musik tradisional, pameran kerajinan tangan, serta berbagai pertunjukan seni lainnya. Para seniman dari seluruh Bali berkumpul untuk memperlihatkan kekayaan seni dan budaya Bali kepada pengunjung.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={jemberFashion}
              alt="Jember Fashion Carnival"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Jember Fashion Carnival</h1>
            <p className="text-slate-600">
            Festival ini adalah salah satu acara karnaval mode terbesar di Indonesia yang diadakan di Kota Jember, Jawa Timur. Karnaval ini menampilkan ratusan peserta yang mengenakan kostum-kostum unik dan kreatif yang dipadukan dengan musik dan tari, membentuk parade mode yang spektakuler.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={tobaFest}
              alt="Festival Danau Toba"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Festival Danau Toba</h1>
            <p className="text-slate-600">
            Diadakan di sekitar Danau Toba, Sumatera Utara, festival ini merayakan warisan budaya Batak. Acara ini menampilkan pertunjukan tari, musik tradisional, lomba perahu, serta berbagai kegiatan budaya lainnya. Para pengunjung dapat merasakan keindahan danau vulkanik terbesar di dunia sambil menikmati kebudayaan Batak.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={keraton}
              alt="Festival Keraton Nusantara"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Festival Keraton Nusantara</h1>
            <p className="text-slate-600">
            Sebuah festival yang menampilkan kekayaan budaya keraton dari berbagai daerah di Indonesia. Para kerabat keraton dari seluruh Indonesia berkumpul untuk memperlihatkan tradisi, seni, dan kebudayaan dari masing-masing keraton, termasuk pakaian adat, tarian, musik, dan upacara adat.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogFestival;
