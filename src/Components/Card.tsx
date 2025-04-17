import React, { memo } from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Cards = memo(({ children, className }: Props) => {
  return (
    <article
      className={`${className} border border-gray-200 text-black shadow-lg hover:shadow-primary hover:border-primary/30 rounded-lg bg-white hover:-translate-y-2 transition-all duration-300`}
    >
      {children}
    </article>
  );
});

export default Cards;
