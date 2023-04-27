import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Datas from '../data.json';
import { useState } from 'react';
import classNames from 'classnames';

const Dropdown = () => {

const [display, setDisplay] = useState('');

const handleClick=(e)=>{
   const text = e.target.textContent;
   Datas.map((data)=>{
    if(data.title.includes(text)){
      console.log(data.Facts);
    }
   })
   
}
  return (
    <>
       <Menu as="div" className="relative text-center">
      <div>
        <Menu.Button className="inline-flex w-[300px] justify-center gap-x-1.5 rounded-md mt-2 bg-gray-400 text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-2 ring-inset ring-white hover:bg-gray-300 hover:text-gray-900">
          Some Cases
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-[250px] left-5 z-10 mt-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" onClick={handleClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                    
                  )}
                >
                  Bhagwandas Goverdhandas Kedia vs. M/s Girdharilal Parshottamdas and Co.
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" onClick={handleClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Arnesh Kumar v. State of Bihar
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" onClick={handleClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  CASE ANALYSIS: TMA PAI FOUNDATION VS STATE OF KARNATAKA (2002) 8 SCC 481
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" onClick={handleClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  National Legal Service Authority v. Union of India Others
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#" onClick={handleClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Danamma v. Amar Singh
                </a>
              )}
            </Menu.Item> 
          </div>
        </Menu.Items>
      </Transition><hr className='mt-4'/>
    </Menu>
  </>
  )
}

export default Dropdown

