import React, { useMemo } from 'react';

import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import { getAttributesFromProducts } from '@/lib/utils';
import { Color, Size } from '@/types';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    ...searchParams,
  });
  const category = await getCategory(params.categoryId);
  const colors = getAttributesFromProducts(products, 'color');

  const sizes = getAttributesFromProducts(products, 'size');

  return (
    <div className="bg-white ">
      <Container>
        <Billboard data={category.billboard} />
      </Container>
    </div>
  );
};

export default CategoryPage;
