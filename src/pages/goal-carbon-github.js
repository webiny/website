import React from 'react';
import Helmet from 'react-helmet';

import RedirectLayout from '../layouts/redirect';

class GoalCarbonGithub extends React.Component {
  render () {
    return (
      <RedirectLayout title="Redirecting to GitHub">

        <Helmet>
          <script>
            {`
                window.location.href = 'https://github.com/webiny/webiny-js';
            `}
          </script>

        </Helmet>

      </RedirectLayout>
    );
  }
}

export default GoalCarbonGithub;
