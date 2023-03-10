import * as React from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import CodeBlock from '@theme/CodeBlock'
import convert from 'npm-to-yarn'


export default (props) => {

    const npm = props.npm ? props.npm : convert(props.yarn, 'npm')
    const yarn = props.yarn ? props.yarn : convert(props.npm, 'yarn')

    return <Tabs>
        <TabItem value="npm" label="npm" default>
            <CodeBlock language="bash">
                {npm}
            </CodeBlock>
        </TabItem>
        <TabItem value="bash" label="yarn">
            <CodeBlock language="bash">
                {yarn}
            </CodeBlock>
        </TabItem>
    </Tabs>
}