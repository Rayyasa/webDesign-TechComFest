import Image from "next/image";
import bgSenjata from "../../assets/senjata.jpg";
import keris from "../../assets/keris.png";
import tombak from "../../assets/tombak.jpg";
import parang from "../../assets/parang.jpg";
import sumpit from "../../assets/sumpit.png";

const BlogSenjata = () => {
  return (
    <section className="w-full max-w-[1600px] px-8 pt-[140px] xl:px-32">
      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgSenjata}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">
            Senjata Tradisional
          </h1>
          <p className="text-slate-600">
            Senjata tradisional Indonesia memiliki keberagaman yang kaya dan
            unik, mencerminkan warisan budaya yang beragam di seluruh kepulauan.
            Setiap senjata tradisional Indonesia memiliki keunikan dalam
            desainnya serta melambangkan kearifan lokal dan keberagaman budaya
            yang dimiliki oleh masyarakat di seluruh Indonesia.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={keris}
              alt="Keris"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Keris</h1>
            <p className="text-slate-600">
              Salah satu simbol kebanggaan budaya Indonesia, keris adalah pisau
              lipat yang memiliki bilah berlekuk dan gagang yang indah. Keris
              tidak hanya digunakan sebagai senjata, tetapi juga memiliki nilai
              simbolis, keagamaan, dan artistik yang tinggi. Dipercayai memiliki
              kekuatan mistis dan dihormati sebagai lambang keberanian dan
              keadilan.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={tombak}
              alt="Tombak"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Tombak</h1>
            <p className="text-slate-600">
              Senjata yang digunakan untuk pertempuran jarak dekat, tombak
              adalah senjata penting dalam sejarah Indonesia. Tombak memiliki
              beragam bentuk kepala dan panjang gagang yang disesuaikan dengan
              kegunaannya dalam berbagai keadaan pertempuran.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={parang}
              alt="Parang"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Parang</h1>
            <p className="text-slate-600">
              Golok atau parang adalah sejenis pedang atau kapak yang biasanya
              digunakan dalam kegiatan sehari-hari seperti pertanian, perburuan,
              atau sebagai senjata pertahanan diri. Parang memiliki berbagai
              macam bentuk, mulai dari yang panjang dan ramping hingga yang
              pendek dan lebih kokoh.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={sumpit}
              alt="Parang"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Sumpit</h1>
            <p className="text-slate-600">
              Meskipun bukan senjata yang dirancang untuk membunuh, sumpit atau
              blowgun digunakan secara tradisional untuk berburu. Terbuat dari
              bambu yang diproses dengan teliti, sumpit digunakan untuk
              menembakkan proyektil kecil seperti anak panah atau peluru kecil
              dengan presisi tinggi.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogSenjata;
