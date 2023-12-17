import Image from "next/image";
import bgKuliner from "../../assets/kuliner.png";
import rendang from "../../assets/rendang.jpeg"
import nasiGoreng from "../../assets/nasi-goreng.jpeg"
import sate from "../../assets/sate.jpeg"
import GadoGado from "../../assets/gado-gado.jpeg"

const BlogKuliner = () => {
  return (
    <section className="w-full max-w-[1600px] px-8 pt-[140px] xl:px-32">
      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgKuliner}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">
            Kuliner Tradisional
          </h1>
          <p className="text-slate-600">
          Kuliner tradisional Indonesia sangat kaya dan bervariasi, mencerminkan keanekaragaman budaya, bahan-bahan lokal, serta teknik memasak yang unik. Kuliner tradisional Indonesia merupakan perpaduan unik dari rasa, aroma, dan tekstur yang menggugah selera dengan kekayaan rempah-rempah yang khas. Keberagaman ini mencerminkan warisan budaya Indonesia yang kaya dan menarik.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={rendang}
              alt="Rendang"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Rendang</h1>
            <p className="text-slate-600">
            Masakan asal Minangkabau yang terkenal dari Sumatera Barat. Rendang adalah masakan daging yang dimasak dalam santan dan rempah-rempah seperti serai, daun jeruk, dan ketumbar hingga kering dan berbumbu sangat kaya rasa. Rendang dianggap sebagai salah satu masakan daging terlezat di dunia.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={nasiGoreng}
              alt="Nasi Goreng"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Nasi Goreng</h1>
            <p className="text-slate-600">
            Mungkin masakan Indonesia yang paling dikenal secara internasional. Nasi goreng adalah nasi yang digoreng dengan bumbu-bumbu seperti bawang putih, bawang merah, kecap manis, dan kadang-kadang tambahan daging, seafood, atau sayuran. Disajikan dengan telur mata sapi, irisan mentimun, dan kerupuk.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={sate}
              alt="Sate"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Sate</h1>
            <p className="text-slate-600">
            Potongan daging (ayam, daging sapi, kambing, atau lainnya) yang ditusuk menggunakan tusukan bambu atau sate lidi, kemudian dipanggang di atas bara api dan disajikan dengan bumbu kacang atau kecap. Sate adalah salah satu makanan yang sangat populer di Indonesia dan memiliki berbagai varian di berbagai daerah.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={GadoGado}
              alt="Gado Gado"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Gado-Gado</h1>
            <p className="text-slate-600">
            Salad sayur dengan bumbu kacang khas Indonesia. Terdiri dari campuran sayuran rebus seperti kentang, tauge, kangkung, dan lainnya, disajikan dengan telur rebus, tahu, tempe, dan lontong. Kemudian dilumuri dengan bumbu kacang yang kaya akan rasa manis, pedas, dan gurih.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogKuliner;
