import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export const SearchBar = () => {
  return (
    <div className='bg-gray-100 overflow-hidden rounded-lg relative flex'>
      <div className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'>
        <Search />
      </div>
      <Input placeholder='Search' className='border-none rounded-lg w-full flex-1 pl-10 z-10 relative' />
    </div>
  );
};
