import React from 'react';

import Link from 'next/link';

import getCategories from '@/actions/get-categories';
import Container from '@/components/ui/container';

import MainNav from './main-nav';
import NavbarActions from './navbar-actions';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
          <Link
            href="/"
            className="ml-4 lg-ml-0 gap-x-2 border-[2px] rounded-md border-red-600 transition duration-200 bg-red-600 p-3 group hover:bg-white"
          >
            <p className="font-bold text-xl text-white group-hover:text-red-600">
              White
              <span className="bg-white text-red-600 rounded-md p-1 group-hover:text-white group-hover:bg-red-600">
                Med
              </span>
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
