import { Meta } from '@/layouts/Meta';
import Hero from '@/sections/Hero';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="EduPondo" description="" />}>
      <Hero />
    </Main>
  );
};

export default Index;
