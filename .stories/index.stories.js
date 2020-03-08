import { storiesOf } from '@storybook/svelte'
import Button from './Button'
import TextField from './TextField'
import CheckBox from './CheckBox'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module)
    .add('Button Component', story(Button))
    .add('TextField Component', story(TextField))
    .add('CheckBox Component', story(CheckBox))
