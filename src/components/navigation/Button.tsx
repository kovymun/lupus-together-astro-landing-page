import { Link } from "react-scroll";

interface ButtonProps {
  title: string;
  to: string;
  className?: string;
  duration: number;
  offset?: number;
  href: string;
  ariaLabel?: string;
  activeClass?: string;
}

const Button = ({
  title,
  to,
  className,
  href,
  ariaLabel,
  duration,
  offset,
  activeClass,
}: ButtonProps) => {
  return (
    <>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={offset || -90}
        duration={duration || 700}
        href={href}
        aria-label={ariaLabel}
        className={className}
        activeClass={activeClass}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
