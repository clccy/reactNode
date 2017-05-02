/**
 * Created by apple on 2017/4/28.
 */
import Express from 'express';
import { RouterContext, match } from 'react-router'

const app = new Express();

import Textrouter from 'router/index'

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

import * as apiMethods from './api/index'
app.get('/api/v1/topology/world-topo', apiMethods.getTopologyTrials);


// universal routing and rendering
app.get('*', (req, res) => {
    match(
        { Textrouter, location: req.url },
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            // generate the React markup for the current route
            let markup;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                // otherwise we can render a 404 page
                res.status(404);
            }

            // render the index template with the embedded React markup
            return res.render('index', { markup });
        }
    );
});
app.listen(3000);