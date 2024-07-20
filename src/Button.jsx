import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  outline,
  rounded,
  primary,
  secondary,
  warning,
  danger,
  success,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-blue-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVal: ({ primary, secondary, danger, warning, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!warning) +
      Number(!!success);
    if (count > 1) {
      return new Error("Only one prop should be selected");
    }
  },
};

export default Button;
