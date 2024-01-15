import React, {
    type FC,
    memo
} from 'react'
import { VStack } from '../../../shared/ui/Stack'
import { navbarItemsList } from '../model/items'
import { NavbarItem } from './NavbarItem/NavbarItem'

interface INavbarProps {
    className?: string
    isCollapsedNavbar?: boolean
}

export const Navbar: FC<INavbarProps> = memo(({ isCollapsedNavbar }) => {
    return (
        <VStack role={''} gap={'10'}>
            {navbarItemsList.map(item => (
                <NavbarItem key={item.path} item={item} isCollapsedNavbar={isCollapsedNavbar}/>
            ))}
        </VStack>
    )
})
