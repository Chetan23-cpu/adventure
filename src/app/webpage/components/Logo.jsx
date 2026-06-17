import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/assets/logo2.png"
        width={230}
        height={40}
        alt="Logo"
        priority
        unoptimized
      />
    </Link>
  );
};

export default Logo;