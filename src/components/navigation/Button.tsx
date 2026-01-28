import { Link } from "react-scroll";

interface ButtonProps {
  title: string;
  to: string;
  className?: string;
  duration: number;
  href: string;
  ariaLabel?: string;
}

const Button = ({
  title,
  to,
  className,
  href,
  ariaLabel,
  duration,
}: ButtonProps) => {
  return (
    <>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-90}
        duration={duration || 700}
        href={href}
        aria-label={ariaLabel}
        className={className}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
