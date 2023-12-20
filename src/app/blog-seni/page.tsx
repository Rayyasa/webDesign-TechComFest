import Image from "next/image";
import bgSeni from "../../assets/seni.png";
import belaDiri from "../../assets/bela_diri.jpeg";
import wayang from "../../assets/wayang_kulit.jpg";
import batik from "../../assets/batik.jpg";
import tari from "../../assets/tari.jpg";

const BlogSeniTradisional = () => {
  return (
    <section className="w-full max-w-[1600px] ">
      <section
        className="relative mt-16  h-72 w-full  "
        style={{
          backgroundImage: `url(${bgSeni.src})`,
          backgroundSize: "cover",
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full h-full absolute inset-0 flex-col items-center justify-center flex  gap-5 px-5">
          <h1 className="font-cardo text-4xl font-medium text-white">
            Seni Tradisional
          </h1>
          <p className="text-white text-center">
            {
              '" Seni tradisional adalah ekspresi dari jiwa sebuah masyarakat. Ia adalah perpaduan antara imajinasi, keahlian, dan kearifan lokal. "'
            }
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2 px-8 pt-[70px] xl:px-32">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgSeni}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">Seni Tradisional</h1>
          <p className="text-slate-600">
            Seni tradisional merujuk pada ekspresi seni yang memiliki akar dalam
            budaya dan tradisi suatu komunitas atau kelompok masyarakat. Seni
            tradisional berkembang seiring waktu dan seringkali diwariskan dari
            generasi ke generasi, mencerminkan nilai-nilai, kepercayaan, dan
            norma-norma budaya yang ada dalam masyarakat tertentu.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={wayang}
              alt="Wayang Kulit"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Wayang Kulit</h1>
            <p className="text-slate-600">
              Seni tradisional ini menggunakan bayangan dari tokoh-tokoh
              pewayangan yang dipahat pada kulit kerbau atau kulit sapi. Wayang
              kulit biasanya dipertunjukkan sebagai cerita epik, seperti
              Ramayana atau Mahabharata.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={batik}
              alt="Batik"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Batik</h1>
            <p className="text-slate-600">
              Batik merupakan seni membuat pola pada kain menggunakan malam
              (lilin) untuk menahan warna. Setiap daerah di Indonesia memiliki
              motif batik khasnya sendiri.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={tari}
              alt="Tari Tradisional"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">
              Tari Tradisional
            </h1>
            <p className="text-slate-600">
              Tari tradisional adalah bentuk seni pertunjukan yang berasal dari
              warisan budaya suatu masyarakat tertentu. Tarian tradisional
              mencerminkan ekspresi budaya dan nilai-nilai yang diwariskan dari
              generasi ke generasi. Berbeda-beda di setiap daerah atau suku
              bangsa, tari tradisional memiliki karakteristik, kostum, dan
              gerakan yang khas. Berikut ad
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={belaDiri}
              alt="Bela Diri"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">
              Seni Bela Diri Tradisional
            </h1>
            <p className="text-slate-600">
              Seni bela diri tradisional merujuk pada sistem bela diri yang
              berasal dari warisan budaya dan tradisi lisan suatu masyarakat
              atau suku bangsa. Seni bela diri tradisional mencakup berbagai
              bentuk teknik bertahan diri dan serangan, serta nilai-nilai
              filosofis dan etika.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogSeniTradisional;
