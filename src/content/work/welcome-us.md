---
title: Welcome.US
client: Welcome.US
date: 2023-04-01
websiteUrl: https://welcome.us/
cardImage: https://ucarecdn.com/9d0587c1-9575-4e16-ade4-2018f28a6c13/
heroImage: https://ucarecdn.com/778022ca-9f99-4a34-b85a-2801b7caf6ce/
color: '#020049'
role: Lead UI Developer
tech:
  - Next.js
  - Tailwind
  - Storybook
summary: Building a new marketing site with a component driven development approah using Storybook and Next.js.
featured: true
---

Welcome.US is a national initiative which mobilizes Americans to help resettle newcomers seeking refuge in the U.S.

With a refined and expanded design, and codified style and pattern library, my role on this project was to translate this into a flexible component library and set up the front-end framework.

## Component Driven Development

Following a [component driven](https://www.componentdriven.org/) approach, development occured from the bottom up, focusing on individual components and building them in isolation. This allowed us to focus on discrete pieces of the interface and define relevant states and variations for each piece.

All of this was acheived using [Storybook](https://storybook.js.org/), which provides a workshop area for building, documenting and testing UI components in isolation. Additionally, the new version of Storybook (v7), provided a new component story format with improved type safety for its integrated TypeScript experience.

![Storybook component library screenshot](https://ucarecdn.com/fd0e95e3-b6b5-44dc-9d55-a8ad4809b0c6/-/resize/1600/-/format/auto/)

```tsx
// StoryCard.stories.tsx

import { columnWidthDecorator } from '@/.storybook/decorators'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryCard as StoryCardComponent } from './StoryCard'
import { mockStoryCard } from '@/mocks'

const meta: Meta<typeof StoryCardComponent> = {
  title: 'Components/Cards/Story Card',
  component: StoryCardComponent,
  decorators: [columnWidthDecorator],
  parameters: {
    backgrounds: {
      default: 'neutral 100',
    },
  },
}

export default meta
type Story = StoryObj<typeof StoryCardComponent>

export const StoryCard: Story = {
  args: mockStoryCard,
}
```
