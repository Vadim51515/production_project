import React, {
    type FC,
    memo
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { navbarItemsList } from '../model/items'
import styles from './Navbar.module.scss'
import { NavbarItem } from './NavbarItem/NavbarItem'

interface INavbarProps {
    className?: string
    isCollapsedNavbar?: boolean
}

export const Navbar: FC<INavbarProps> = memo(({ className, isCollapsedNavbar }) => {
    console.log('Navbar')
    return (
        <div className={classNames(styles.container, {}, [className])}>
            {navbarItemsList.map(item => (
                <NavbarItem key={item.path} item={item} isCollapsedNavbar={isCollapsedNavbar}/>
            ))}
        </div>
    )
})
