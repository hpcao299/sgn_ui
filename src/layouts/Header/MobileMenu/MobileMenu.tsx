'use client';

import ChevronDown from '@/assets/icons/chevronDown.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import config from '@/config';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './MobileMenu.module.css';

const cx = classNames.bind(styles);

interface MobileMenuProps {
    links: (
        | {
              title: string;
              to: string;
              keepParams?: undefined;
              subHeader?: undefined;
          }
        | {
              title: string;
              to: string;
              keepParams: boolean;
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              subHeader: any;
          }
    )[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLElement>(null);

    const handleToHref = (slug: string) => {
        return `${config.routes.products}?slug=${slug}`;
    };

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (!open) {
            document.removeEventListener('click', handleOutsideClick);
            setTimeout(() => {
                setIsShown(false);
            }, 500);
        } else {
            setIsShown(true);
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [open]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('mobile-menu-icon')} onClick={handleToggleMenu}>
                <MenuIcon />
            </div>
            {isShown && (
                <div className={cx('mobile-menu-wrapper', open ? 'fadeIn' : 'fadeOut')}>
                    <div
                        ref={menuRef as React.RefObject<HTMLDivElement>}
                        className={cx('mobile-menu', open ? 'open' : 'close')}
                    >
                        <ul className={cx('mobile-links')}>
                            {links.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.to}>
                                        {link.title} {link.subHeader && <ChevronDown />}
                                    </Link>
                                    {link.subHeader && (
                                        <div className={cx('mobile-sub-links')}>
                                            {link.subHeader.map(
                                                (
                                                    link: { title: string; slug: string },
                                                    i: number,
                                                ) => (
                                                    <Link key={i} href={handleToHref(link.slug)}>
                                                        {link.title}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
