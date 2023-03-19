import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

const Template = () => <Hero/>;
export const Default = Template.bind({});
Default.args = {}