/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
