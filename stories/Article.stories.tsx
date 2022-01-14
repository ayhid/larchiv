import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ArticleCard from '../components/Article/ArticleCard';

export default {
  title: 'Shared/Article/Card',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;

export const VideoCard = Template.bind({});
VideoCard.args = {
  title: 'تونس 2020 في عيون نعمان الفهري',
  language: 'ar',
  video: 'https://www.facebook.com/motez.bellakoud/posts/4273251742698040',
  categories: ['سياسة'],
  publishDate: new Date(),
};



