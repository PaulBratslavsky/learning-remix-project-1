import LinkStyled from "~/components/LinkStyled";
import HomeCard from '~/components/HomeCard';

export default function Index() {
  return (
    <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          {/* profile sidebar */}
          <HomeCard />
          

          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <div className="col-span-12 lg:col-span-8  ">
          {/* header two  */}

          <h1>Col 2</h1>
          <LinkStyled to="/posts">Posts</LinkStyled>
        </div>
      </div>
    </section>
  );
}
