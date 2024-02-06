import { type Meta, type StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { mockStore } from '../../../../shared/constants/mockStore';

import { PersonalDataBlock } from './PersonalDataBlock';

export default { component: PersonalDataBlock };
const meta = {
    title: 'entities/PersonalDataBlock',
    component: PersonalDataBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof PersonalDataBlock>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
Default.decorators = [
    storeDecorator({
        ...mockStore,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        profile: {
            ...mockStore.profile,
            status: RuntimeStatuses.Ready,
            isReadonly: true,
        },
    }),
];
