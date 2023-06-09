import { Meta } from '@/layouts/Meta';
import Guide from '@/sections/Guide';
import Hero from '@/sections/Hero';
import Platform from '@/sections/Platform';
import Search from '@/sections/Search';
import Types from '@/sections/Types';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="EduPondo" description="" />}>
      <Hero />
      <Search />
      <Platform />
      <Types />
      <Guide />
    </Main>
  );
};

export default Index;
