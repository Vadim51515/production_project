import { type CFC } from '../../../../app/types'
import { Flex, type IFlexProps } from '../Flex/Flex'
import React from 'react'

type TVStackProps = Omit<IFlexProps, 'direction'>

export const VStack: CFC<TVStackProps> = (props) => {
    return (
        <Flex {...props} direction="column" />
    )
}
