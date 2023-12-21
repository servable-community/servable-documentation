import { Helmet } from "react-helmet"
import React from "react"

export default props => {
    const { protocolId, size = 's', mode="default" } = props
    return <div className="mb-6">        
            <div id={protocolId}
                data-protocolid={protocolId}
                data-size={size}
                data-mode={mode}
                class="servable-protocol-widget"
            // style="width: 250px; margin: auto; margin-top: 20px"
            >
                <h4>{`Protocol ${protocolId}`}</h4>
            </div>        
        <Helmet>
        {/* <link href={process.env.WIDGETS_STYLE_URL} rel="stylesheet" />
            <script async src={process.env.WIDGETS_JS_URL}></script> */}
            <link href="https://cdn.registry.servablecommunity.com/widgets/protocol/index.css" rel="stylesheet" />
            <script async src="https://cdn.registry.servablecommunity.com/widgets/protocol/index.js"></script>
            {/* <link href="http://localhost:3080/widget/index.css" rel="stylesheet" />
            <script async src="http://localhost:3080/widget/index.js"></script> */}
        </Helmet>
    </div>
}