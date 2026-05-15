import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="font-poppins font-bold cursor-pointer flex items-center gap-1.5 text-2xl bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent ml-4">
        MinhThien
      </span>
    </Link>
  );
};

export default Logo;
