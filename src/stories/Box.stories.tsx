import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Box} from "../component/Box";
import {Canvas} from "@react-three/fiber";

export default {
    title: 'Example/Box',
    component: Box
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) =>
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box {...args}/>
    </Canvas>;

export const Primary = Template.bind({});
