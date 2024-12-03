import Image from "next/image";
import React from "react";

export default function ExtraLargeImage({
  src,
  alt,
}: {
  src: string | undefined;
  alt: string;
}) {
  return <>{src && <Image src={src} alt={alt} width={256} height={363} />}</>;
}
