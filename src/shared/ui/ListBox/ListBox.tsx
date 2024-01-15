import React, {
    type FC,
    type ReactNode,
    useState
} from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { type TOptions } from '../../../app/types'
import { classNames } from '../../lib/classNames/classNames'
import styles from './ListBox.module.scss'
const people = [
    {
        id: 1,
        name: 'Durward Reynolds',
        unavailable: false
    },
    {
        id: 2,
        name: 'Kenton Towne',
        unavailable: false
    },
    {
        id: 3,
        name: 'Therese Wunsch',
        unavailable: false
    },
    {
        id: 4,
        name: 'Benedict Kessler',
        unavailable: true
    },
    {
        id: 5,
        name: 'Katelyn Rohan',
        unavailable: false
    }
]

export interface IListBox {
    items: TOptions<ReactNode>
}

export const ListBox: FC<IListBox> = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <HListbox
            as={'div'}
            value={selectedPerson}
            onChange={setSelectedPerson}
        >
            <HListbox.Button className={styles.select}>{selectedPerson.name}</HListbox.Button>
            <HListbox.Options className={styles.options}>
                {people.map((item) => (
                    <HListbox.Option
                        key={item.id}
                        value={item}
                        disabled={item.unavailable}
                        as={'div'}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    styles.option,
                                    {
                                        [styles.activeOption]: active
                                    }
                                )}
                            >
                                {selected && '!!!'}
                                {item.name}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
}
