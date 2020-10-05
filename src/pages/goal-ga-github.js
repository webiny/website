import React from "react";
import Helmet from "react-helmet";

import RedirectLayout from "../layouts/redirect";

class GoalGaGithub extends React.Component {
    render() {
        return (
            <RedirectLayout title="Redirecting to GitHub">
                <Helmet>
                    <script>
                        {`
                gtag('event', 'conversion', {'send_to': 'AW-698369826/2k0pCKfT0bIBEKKOgc0C'});
                setTimeout(()=>{
                  window.location.href = 'https://github.com/webiny/webiny-js';
                }, 500)
            `}
                    </script>
                </Helmet>
            </RedirectLayout>
        );
    }
}

export default GoalGaGithub;
