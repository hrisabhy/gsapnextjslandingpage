import Image from "next/image";
import MockupMain from "/public/mockup-main.png";
import CardImage1 from "/public/image-01.png";
import CardImage2 from "/public/image-02.png";
import CardImage3 from "/public/image-03.png";
import CardImage4 from "/public/image-04.png";
import CardImage5 from "/public/image-05.png";
import CardImage6 from "/public/image-06.png";
// https://youtu.be/lPKNdfG1sDQ?t=4248
export function SectionCards() {
  return (
    <>
      <section className="w-full pb-20">
        <Image
          src={MockupMain}
          alt="Mockup main image"
          className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-6"
        />
        <h2 className="text-center text-7xl font-medium mb-56">
          Do it <span className="text-green-title-card">yourself</span> from
          home
        </h2>
        <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
          <Image
            src={CardImage1}
            className="absolute top-8 left-44"
            alt="Card Image 1"
          />
          <Image
            src={CardImage2}
            className="absolute left-0 bottom-32"
            alt="Card Image 2"
          />
          <Image
            src={CardImage3}
            className="absolute bottom-0 left-80"
            alt="Card Image 3"
          />
          <Image
            src={CardImage4}
            className="absolute top-0 right-32"
            alt="Card Image 4"
          />
          <Image
            src={CardImage5}
            className="absolute right-0 bottom-28"
            alt="Card Image 5"
          />
          <Image
            src={CardImage6}
            className="absolute bottom-0 right-80"
            alt="Card Image 6"
          />
        </div>
      </section>
    </>
  );
}
