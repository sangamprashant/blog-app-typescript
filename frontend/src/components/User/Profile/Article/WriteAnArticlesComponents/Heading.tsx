import React from "react";

type HeadingProps<E extends React.ElementType> = {
  heading?: string;
  color:string;
  as?: E;
  italic?: E;
};

type TextProps<E extends React.ElementType> = HeadingProps<E> &
  Omit<React.ComponentProps<E>, keyof HeadingProps<E>>;

const Heading = <E extends React.ElementType = "div">({
  heading,
  as,
  italic,color
}: TextProps<E>) => {
  const Component = as || "div";
  const Italic = italic || "div";

  return (
    <h3 style={{color:color}}>
      <Component>
        <Italic>{heading}</Italic>
      </Component>
    </h3>
  );
};

export default Heading;
