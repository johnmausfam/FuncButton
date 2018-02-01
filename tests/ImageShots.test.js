import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';

initStoryshots({
    suite: 'Image storyshots',
    test: imageSnapshot({})
});