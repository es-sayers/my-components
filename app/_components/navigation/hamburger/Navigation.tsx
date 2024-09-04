'use client'

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import styles from './navigation.module.css';

const NavigationContext = createContext({ isOpen: false, setIsOpen: (isOpen: boolean) => { } });

export default function Navigation(props: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
            <div
                onClick={() => setIsOpen(false)}
                className={`${isOpen ? styles.nav_overlay_open : ''}`}></div>
            <nav
                className={`${styles.nav} ${isOpen ? styles.nav_open : ''}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${styles.hamburger} ${isOpen ? styles.hamburger_open : ''}`}
                    aria-expanded={isOpen}>
                    <div className={`${styles.hamburger_icon} ${isOpen ? styles.hamburger_icon_open : ''}`}></div>
                </button>
                <ul className={`${styles.ul} ${isOpen ? styles.ul_open : ''}`}>
                    {
                        props.children
                    }
                </ul>
            </nav>
            <div className={styles.nav_spacer}></div>
        </NavigationContext.Provider>
    );
}

export function NavigationItem(props: { href: Url, text: string, target?: string }) {

    const target = props.target ?? '';
    const context = useContext(NavigationContext);

    return (
        <li
            className={`${styles.li}`}>
            <Link
                className={`${styles.a} ${context.isOpen ? styles.a_open : ''}`}
                onClick={() => context.setIsOpen(false)}
                href={props.href}
                target={target} >
                {props.text}
            </Link>
        </li>
    )
}