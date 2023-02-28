import React from 'react'
import CodeBlock from '@theme/CodeBlock'


export default () => {

  return <div class={`        
        bg-gradient-to-r 
        from-[#FAF3DD]
        dark:from-[#434343]
        via-[#FAF3DD]
        dark:via-[#323232]
        to-[#ffffff]
        dark:to-[#434343]        
        px-6
        md:px-6      
        py-4
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          max-w-3xl
        `}>
      <div className={`my-6`}>
        <h2>{`Quick start`}</h2>
      </div>
      <p className={``}>
        <h3>1. Generate a new project</h3>
        <CodeBlock language="language-bash">
          {"yo servable-parse"}
        </CodeBlock>
      </p>
      <p className={``}>
        <h3>2. Add classes with schema</h3>
        <CodeBlock language="json">
          {`{
        "className": "Creation",
        "fields": {
          "objectId": {
              "type": "String"
          },
          "createdAt": {
              "type": "Date"
          },
          "updatedAt": {
              "type": "Date"
          },
          "ACL": {
              "type": "ACL"
          },
          "name": {
              "type": "String"
          }
        }
      }`}
        </CodeBlock>
      </p>
      <p className={``}>
        <h3>3. Add protocols to your class</h3>
        <CodeBlock language="language-bash">
          {"yarn add @yelounak/localable\nyarn add @yelounak/countryable"}
        </CodeBlock>
        <CodeBlock language="js">
          {`export default class Creation extends Servable.App.Object {
            static protocols = [
              'localable',          
            ]
          ...
          }`}
        </CodeBlock>
      </p>
      <p className={``}>
        The creation table is now localable, which means it contains columns for a string locale and pointer to a rich locale entry in a LocaleRef table handled by the localable protocol.
        The localable protocol automatically adds a default locale that you can define to every Creation object by using triggers.
      </p>
    </div>
  </div>
}