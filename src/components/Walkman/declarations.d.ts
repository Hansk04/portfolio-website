declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}