import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

/**
 * Simple dark Nav Bar with mobile menu button on left.

 */
 export default class NavBar extends Component {
    render() {
        const { id , company , logo , navitems , docurl } = this.props;

        return (
            <div id={id}>
                <Disclosure as="nav" className="bg-slate-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center">
                                            <img
                                                className="block h-8 w-auto lg:hidden"
                                                src= {logo}
                                                alt= {company}
                                            />
                                            <img
                                                className="hidden h-8 w-auto lg:block"
                                                src= {logo}
                                                alt= {company}
                                            />
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                            {navitems.map((navitem) => (
                                                    <a
                                                    key={navitem.name}
                                                    href={navitem.href}
                                                        className="bg-slate-900 text-white hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    >
                                                        {navitem.name}
                                                    </a>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="rounded-full bg-slate-800 p-1 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
                                            href= {docurl}
                                        >
                                            <span className="sr-only">Documentation</span>
                                            <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                {navitems.map((navitem) => (
                                        <Disclosure.Button
                                            key={navitem.name}
                                            href={navitem.href}
                                            as="a"
                                            className="bg-slate-900 text-white hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {navitem.name}
                                        </Disclosure.Button>
                                        ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        );
    }
}

NavBar.defaultProps = {};

NavBar.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The Nav Bar items with their href.
     */
    navitems: PropTypes.array,
    /**
     * The name of the client.
     */
    company: PropTypes.string,
    /**
     * Sirv hosted url of the clients logo.
     */
    logo: PropTypes.string,
    /**
     * External google doc with documentation on using the dash for end users
     */
    docurl: PropTypes.string
};