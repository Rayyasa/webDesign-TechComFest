import Image from "next/image";
import bgSejarah from "../../assets/sejarah.png";
import praSejarah from "../../assets/pra-sejarah.png"
import hinduBudha from "../../assets/hindu-budha.jpeg"
import zamanKolonial from "../../assets/kolonial.jpg"
import zamanKemerdakaan from "../../assets/kemerdakaan.jpg"
import kontemporer from "../../assets/kontemporer.jpg"

const BlogSejarah = () => {
  return (
    <section className="w-full max-w-[1600px] px-8 xl:px-32">

      <section className="grid grid-cols-1 gap-x-10  pt-[140px] gap-y-11 md:grid-cols-2">
        <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
          <Image
            src={bgSejarah}
            alt="Senjata"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="font-cardo text-4xl font-medium">
            Sejarah Budaya
          </h1>
          <p className="text-slate-600">
          Sejarah budaya Indonesia sangatlah kaya dan berasal dari berbagai periode zaman prasejarah hingga masa kini. Keanekaragaman budaya Indonesia tercermin dalam keberagaman bahasa, adat istiadat, seni, dan tradisi-tradisi yang masih dilestarikan hingga hari ini. Identitas budaya Indonesia terus berkembang seiring dengan perubahan zaman, namun tetap menjaga akar yang kuat dari sejarah dan kearifan lokal
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={praSejarah}
              alt="Zaman Pra-sejarah"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Zaman Pra-sejarah</h1>
            <p className="text-slate-600">
            Sebelum catatan tertulis ada, Indonesia telah dihuni oleh beragam suku bangsa. Bukti-bukti arkeologis menunjukkan keberadaan manusia purba di Indonesia, seperti fosil manusia dari zaman Pleistosen dan artefak-artefak prasejarah dari berbagai pulau.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={hinduBudha}
              alt="Zaman Hindu-budha"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Zaman Hindu-budha</h1>
            <p className="text-slate-600">
            Periode ini dimulai sekitar abad ke-1 Masehi dengan masuknya agama Hindu dan Buddha dari India. Pengaruh kuat dari kedua agama ini tercermin dalam seni, arsitektur, dan kebudayaan, yang terutama tercermin dalam peninggalan seperti Candi Borobudur di Jawa Tengah dan Candi Prambanan di Yogyakarta.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={zamanKolonial}
              alt="Zaman Kolonial"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Zaman Kolonial</h1>
            <p className="text-slate-600">
            Indonesia telah menjadi pusat perdagangan yang penting sejak abad ke-7 Masehi, dengan kedatangan pedagang dari berbagai belahan dunia. Pada abad ke-16, bangsa Eropa seperti Portugis, Spanyol, Belanda, dan Inggris datang untuk menguasai perdagangan rempah-rempah. Pengaruh mereka dalam budaya, bahasa, dan struktur sosial masih dapat dilihat hingga saat ini.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={zamanKemerdakaan}
              alt="Zaman Kemerdakaan"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Zaman Kemerdekaan</h1>
            <p className="text-slate-600">
            Setelah lebih dari tiga abad dijajah, Indonesia mendeklarasikan kemerdekaannya pada tanggal 17 Agustus 1945. Proses ini membawa semangat nasionalisme yang kuat serta upaya untuk mengembangkan identitas nasional yang bersifat inklusif terhadap keragaman etnis, bahasa, agama, dan budaya.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="h-[300px] overflow-hidden rounded-lg bg-slate-500">
            <Image
              src={kontemporer}
              alt="Masa Kontemporer"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-cardo text-4xl font-medium">Masa Kontemporer</h1>
            <p className="text-slate-600">
            Sejak kemerdekaan, Indonesia telah mengalami perubahan budaya yang signifikan. Kemajuan teknologi, urbanisasi, globalisasi, dan interaksi dengan budaya luar telah membentuk perkembangan budaya Indonesia. Meskipun demikian, Indonesia tetap mempertahankan warisan budaya yang kaya, termasuk kesenian tradisional, pakaian adat, tarian, musik, dan tradisi keagamaan.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogSejarah;
