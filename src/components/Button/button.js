import classNames from "classnames";
import Link from "next/link";
export default function Button({ text, href, variant, className }) {
  const buttonClassNames = classNames(
    "bg-white p-1 rounded-lg text-lg text-gray-800 font-medium h-9",
    {
      "bg-yellow-bazar": variant === "yellow",
      "bg-orange-bazar": variant === "orange",
      "bg-green-bazar": variant === "green",
      "bg-beige-bazar": variant === "beige",
    },
    className
  );
  return (
    <button className={buttonClassNames}>
      <Link href={href}>{text}</Link>
    </button>
  );
}
