import React from 'react';
import { Header } from '../components/header/header';
import { getVectorImports } from './constants/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const { communitiesVector } = getVectorImports();

export const Communities = () => {
  return (
    <div className='h-full'>
      <Header title='Communities' />
      <div className='p-4 md:p-8 lg:p-14 h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8'>
          <Image src={communitiesVector} alt='communities' />
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl text-center'>Stay connected with a community</p>
            <small className='text-center text-gray-500'>
              Communities bring members together in topic based groups, and make it easy to get admin announcements. Any
              community your added to will appear here.
            </small>
          </div>
        </div>
        <Button className='rounded-full mt-12 lg:mt-16'>Start your community</Button>
      </div>
    </div>
  );
};
