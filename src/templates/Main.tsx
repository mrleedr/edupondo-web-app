import type { ReactNode } from 'react';

import Footer from '@/sections/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}

    <div>{props.children}</div>

    <Footer />
  </div>
);

export { Main };
