import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import UserCard, { UserCardProps } from '.'

export default {
  title: 'UserCard',
  component: UserCard,
  args: {
    image: 'https://source.unsplash.com/random/100x100',
    name: 'JonasTeixeira42',
    id: '1'
  }
} as Meta

export const Default: Story<UserCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <UserCard {...args} />
  </div>
)
