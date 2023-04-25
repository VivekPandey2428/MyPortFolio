import React from "react";
import {twMerge} from "tailwind-merge";

const Paper = ({className, children, ...restProps}: React.ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("flex h-24 w-72 -rotate-12 items-center justify-center rounded-full bg-green-600", className)}
      {...restProps}
    >
      <span className="font-serif font-bold">{children}</span>
    </div>
  );
}

export default Paper;