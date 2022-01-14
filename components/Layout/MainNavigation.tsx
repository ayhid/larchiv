import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { RiHeartAddLine as NewProjectIcon } from 'react-icons/ri';
// import useAuth from '../hooks/useStrapiAuth';

const MainNavigation = () => {
  // const { isAuthenticated } = useAuth();
  const  isAuthenticated  = false;
  return (
    <>
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
            <div className="relative z-20">
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                  <a href="#" className="flex">
                    <span className="">لارشيڢ</span>
                    {/* <img
                      src="/images/logo.png"
                      className="h-8 w-auto sm:h-14"
                      alt="Happy Builders"
                    /> */}
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                  <nav className="flex space-x-10">
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Associations
                    </a>
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Comment ça marche
                    </a>
                  </nav>
                  {!isAuthenticated ? (
                    <div className="flex items-center md:ml-12">
                      <Link href="/account/signin">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Se connecter
                        </a>
                      </Link>
                      <Link href="/account/signup">
                        <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                          S&apos;inscrire
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center md:ml-12">
                      <Link href="/projects/create">
                        <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 hover:no-underline">
                          <NewProjectIcon className="mr-2" /> Nouveau Projet
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 sm:pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <img src="/images/logo.png" className="h-12 w-auto" alt="Happy Builders" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                      <nav>
                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                          <a
                            href="/"
                            className="-text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            Associations
                          </a>
                          <a
                            href="/"
                            className="-text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            FAQ
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    {!isAuthenticated && (
                      <div className="mt-6">
                        <Link href="/account/signup">
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                          >
                            S&apos;inscrire
                          </a>
                        </Link>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          <div>Vous avez déjà un compte?</div>
                          <Link href="/account/signin">
                            <a className="text-blue-600 hover:text-blue-500">Se connecter</a>
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Link href="/projects/create" passHref>
            <Nav.Link href="#link" className="mr-3">
              <Button variant="outline-primary">
                <NewProjectIcon className="mr-2" />
                je crée mon projet
              </Button>
            </Nav.Link>
          </Link>

          <Nav.Link href="#link">Associations</Nav.Link>
          <Nav.Link href="#link">Comment ça marche?</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
        </Nav>
        {!isAuthenticated && (
          <>
            <Link href="/account/signin">
              <Button className="mr-2" variant="link">
                Se connecter
              </Button>
            </Link>
            <Link href="/account/signup" passHref>
              <Button>S&apos;inscrire</Button>
            </Link>
          </>
        )}
      </Navbar.Collapse> */}
    </>
  );
};

export default MainNavigation;
