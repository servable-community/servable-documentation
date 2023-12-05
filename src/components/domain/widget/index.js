import { Helmet } from "react-helmet"
import React from "react"

export default props => {
    const { protocolId, size = 's' } = props
    return <div>        
            <div id={protocolId}
                data-protocolid={protocolId}
                data-size={size}
                class="servable-protocol-widget"
            // style="width: 250px; margin: auto; margin-top: 20px"
            >
                <h4>Protocol</h4>
            </div>        
        <Helmet>
            <link href="https://api.cdn.registry.servablecommunity.com/widgets/protocol/index.css" rel="stylesheet" />
            <script async src="https://api.cdn.registry.servablecommunity.com/widgets/protocol/index.js"></script>
            {/* <link href="http://localhost:3080/widget/index.css" rel="stylesheet" />
            <script async src="http://localhost:3080/widget/index.js"></script> */}
        </Helmet>
    </div>
}