import React from 'react';

import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import BillboardsSlider from '@/components/billboards-slider';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

const HomePage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardsSlider billboards={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList products={products} title="Best Sellers" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
