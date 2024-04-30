import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export const SearchBar = () => {
  return (
    <div className='w-full flex p-3 bg-white overflow-hidden'>
      <div className='bg-slate-100 w-full flex rounded-lg overflow-hidden'>
        <div className=' text-gray-500 px-5 py-3 '>
          <Search />
        </div>
        <Input
          placeholder='Search'
          className='border-none outline-none w-full h-full flex-1 pr-3 py-3 pl-0 focus:outline-none focus:border-none rounded-none'
        />
      </div>
    </div>
  );
};
