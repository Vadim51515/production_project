import React, {
    type FC,
    useState
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../../../../shared/ui/Button'
import { LangSwitcher } from '../../../LangSwitcher'
import { Navbar } from '../../../Navbar'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [className])}>
            <Button onClick={() => { setIsOpen(_isOpen => !_isOpen) }}>Toggle</Button>
            <Navbar />
            <LangSwitcher />
        </div>
    )
}
