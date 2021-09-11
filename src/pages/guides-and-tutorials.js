import * as React from "react"
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import Sidebar from '../components/sidebar'
import Article from '../components/article'
import { Link, graphql } from "gatsby"
import get from 'lodash/get'
import Helpcenter from '../components/helpcenter'
import logo from "../images/logo_harmonypay.svg"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [pages, setPages] = useState([])
  
  React.useEffect(() => {
    setPages(props.data.allContentfulPage.nodes)
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-teal-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="HarmonyPay"
                  />
                </Link>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {pages.map((item) => (
                    <Link key={item.slug} to={`/guides-and-tutorials/${item.slug}`}>
                    <div
                      className={classNames(
                        item.slug === false
                          ? 'bg-teal-800 text-white'
                          : 'text-white hover:bg-teal-600 hover:bg-opacity-75',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      {/*<item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-300" aria-hidden="true" />*/}
                      {item.title}
                    </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-teal-700 md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar pages={pages}/>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <Helpcenter />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query HelpIndexQuery {
    allContentfulPage(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        name
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        description {
          description
        }
      }
    }
  }
`
