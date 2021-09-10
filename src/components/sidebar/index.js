import * as React from "react"
/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
import { Link } from "gatsby"
import logo from "../../images/logo_harmonypay.svg"

const navigation = [
  { name: 'Back to Home', icon: HomeIcon, href: '/', current: false },
  /*{ name: 'Team', icon: UsersIcon, href: '#', current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },*/
]
/*const secondaryNavigation = [
  { name: 'Wordpress Plugin Installation', href: '#',  current: true },
  { name: 'HarmonyPay Gateway Installation', href: '#' },
  { name: 'How to add HRC-20 tokens', href: '#' },
  { name: 'How to setup auto settlement feature', href: '#' },
]*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({pages}) {

  const secondaryNavigation = []
  pages.forEach(page => {
    secondaryNavigation.push({ name: page.title, href: `/guides-and-tutorials/${page.slug}`, slug: page.slug, current: false })
  })
  
  console.log(pages)
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex items-center flex-shrink-0 py-3">
        <Link to="/">
        <img
          className="h-12 w-auto"
          src={logo}
          alt="HarmonyPay"
        />
        </Link>
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-6 bg-white" aria-label="Sidebar">
          <div className="space-y-1">
            <h3 className="px-2 mb-6 text-sm font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
              Help Center
            </h3>
            <div className="space-y-1" role="group" aria-labelledby="projects-headline">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <span className="">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
