import Image from "next/image";
import kita from "../../assets/kita.png";
import rehan from "../../assets/rehan.png";
import iki from "../../assets/iki.png";
import rayya from "../../assets/rayya.png";
import CardTeam from "@/components/cardTeam";

const AboutUsPage = () => {
  return (
    <section className="w-full max-w-[1600px]">
      <div className="relative h-[500px] w-full bg-slate-200">
        <Image
          src={kita}
          alt="kita"
          className="h-full w-full object-cover brightness-50"
        />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4">
          <h1 className="text-center font-cardo text-4xl font-medium text-slate-100 md:text-6xl">
            R3 Project
          </h1>
          <p className="text-center text-sm text-slate-200 md:text-lg">
            &quot;R3 Project: Membawa Budaya Indonesia ke Jari Anda&quot;
          </p>
        </div>
      </div>

      <section className="flex w-full flex-col px-8 lg:flex-row xl:mt-[120px] xl:px-32">
        <div className="flex h-[200px] w-full items-center  justify-center lg:w-[40%]">
          <h2 className="font-cardo text-4xl">&quot; visi &quot;</h2>
        </div>

        <div className="flex w-full items-center justify-center lg:w-[60%]">
          <p className="text-center text-lg lg:pr-32 lg:text-left">
            Visi kami di Indiscoveries adalah menjadi jendela yang mengungkap
            keajaiban budaya Indonesia kepada dunia. Kami percaya bahwa
            keberagaman budaya yang kaya di Nusantara memiliki daya tarik yang
            tak ternilai. Dengan tekad untuk melestarikan, menghormati, dan
            memperkenalkan warisan budaya yang luar biasa ini, kami bertekad
            untuk membangun sebuah platform yang memungkinkan setiap individu
            untuk menjelajahi, belajar, dan merasakan keindahan yang terkandung
            dalam setiap aspek budaya Indonesia.
          </p>
        </div>
      </section>

      <section className="mt-[120px] px-8 xl:px-32">
        <h1 className="font-cardo text-3xl xl:text-5xl">Team Up</h1>
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-2">
          <CardTeam
            nama="Hancup"
            img={rehan}
            igLink="https://www.instagram.com/hancup._/"
            gtLink="https://github.com/ehancup"
          />
          <CardTeam
            nama="Iki"
            img={iki}
            igLink="https://www.instagram.com/rizkyalfi._/"
            gtLink="https://github.com/rizkyalf11"
          />
          <CardTeam
            nama="Rayya"
            img={rayya}
            igLink="https://www.instagram.com/disa.yidan/"
            gtLink="https://github.com/Rayyasa"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUsPage;
