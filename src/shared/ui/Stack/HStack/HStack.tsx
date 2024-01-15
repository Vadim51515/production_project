import { type CFC } from '../../../../app/types'
import { Flex, type IFlexProps } from '../Flex/Flex'

type THStackProps = Omit<IFlexProps, 'direction'>

export const HStack: CFC<THStackProps> = (props) => {
    return (
        <Flex direction="row" {...props} />
    )
}
