import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    dataLength: 20,
    itemsPerPage: 10
  },
  argTypes: {
    nextPage: { action: 'nextPage' },
    previousPage: { action: 'previousPage' }
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)
