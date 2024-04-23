"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Test() {
  return (
    <div className="flex overflow-x-auto -translate-x-[200px] absolute">
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
      <Parallax translateX={[200, 0]}>
        <Image alt="image" src="/Assets/img-1.webp" width={300} height={100} />
      </Parallax>
    </div>
  );
}
