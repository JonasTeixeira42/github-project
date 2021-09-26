import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import UserInfo, { UserInfoProps } from '.'

export default {
  title: 'UserInfo',
  component: UserInfo,
  args: {
    id: 1,
    login: 'UserTest',
    html_url: 'https://www.google.com/'
  }
} as Meta

export const Default: Story<UserInfoProps> = (args) => <UserInfo {...args} />
