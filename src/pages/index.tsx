import { Meta } from '@/layouts/Meta';
import Hero from '@/sections/Hero';
import Search from '@/sections/Search';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="EduPondo" description="" />}>
      <Hero />
      <Search />
    </Main>
  );
};

export default Index;
