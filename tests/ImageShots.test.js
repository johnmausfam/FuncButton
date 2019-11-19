import path from 'path';
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';

initStoryshots({
    configPath: path.join(__dirname, '..', '.storybook'),
    suite: 'Image storyshots',
    test: imageSnapshot({storybookUrl: 'http://localhost:6006'})
});