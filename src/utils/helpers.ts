import { allTags } from '@/constants/tags';

export const getRandomTags = () => {
  const shuffled = [...allTags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};
