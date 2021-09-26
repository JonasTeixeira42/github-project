import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import repositories from './mock'

import Table, { TableProps } from '.'

export default {
  title: 'Table',
  component: Table,
  args: {
    repositories
  }
} as Meta

export const Default: Story<TableProps> = (args) => <Table {...args} />
