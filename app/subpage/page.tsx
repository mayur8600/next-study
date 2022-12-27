import Image from "next/image";
import Link from "next/link";
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="container flex justify-center flex-col-reverse xl:flex-row h-screen">
        <div className=" xl:w-1/2">
          <h1 className="xl:text-4xl  text-8xl xl:pt-20">This is a subpage</h1>
          <p className="text-2xl pt-20">
            Go to  <Link href="/">home page</Link>
            <br />
            <br />
          </p>
          <div className="pt-20">
            <Link href="/subpage/8989x" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              [id]
            </Link>
          </div>
        </div>
        <div className="xl:w-1/2 w-full h-1/2">
          <Image src={"https://cdn.dribbble.com/userupload/3253954/file/original-eca5bf9580fded837c78ab35c4464fb1.jpg?compress=1&resize=1024x709"} width={800} height={500} alt="Image" />
        </div>
      </div>
    </>
  );
};
export default Page;