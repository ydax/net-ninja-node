var express = require('express');

/** Setting up an express app
    @return All of express' methods.
 */
const app = express();

/** Set the templating engine Express expects. Note that, by default, Express will look for these files in a folder called views.
@method set(setting, selection) Calibrates an Express setting.
    @param {setting} string Name of Express setting.
    @param {selection} string What to set the setting to.
*/
app.set('view engine', 'ejs');

/** Listen to a port.
@param {portNumber} number The port number to listen to.
 */
app.listen(3000);

/** Using middleware to add logic to incoming requests.
@param {path} string Attach a route to the middleware.
@param {express.static()} method Fires when middleware is called.
    @param {path} string Maps incoming requests to a folder.
 */
app.use('/assets', express.static('assets'));

/** Respond to GET requests
@param {route} string
@param {callback} function What to do with the request. Often uses the send() method.
 */
 app.get('/', (request, response) => {     
    //  response.send('Welcome to the homepage.');
    response.render('index');
 });

/** Leverage templating engines to respond with HTML and other files.
@method sendFile({path}) Responds to a GET request with a file. Automatically identifies that it's an HTML file and creates headers.
    @param {path} string
*/
 app.get('/contact', (request, response) => {     
    //  response.sendFile(`${__dirname}/contact.html`);

    /** Access query string data.
    @property {query} on request Collects and parses data from query strings.
     */
    response.render('contact', { qs: request.query });
 });

// Dummy data for use in the following code block.
const data = { age: 29, job: 'Ninja', hobbies: ['reading', 'cooking', 'playing guitar'] }

/** Get get the route parameters of a GET request.
@param {url} string Route parameters can be defined in many ways, including with RegEx. Resulting parameters (seperated by slashes) are appended to request.params as an object with all parameters as properties on it.
 */
 app.get('/profile/:name', (request, response) => {
    console.log(`You requested to see ${request.params.name}'s profile.`);

    /** Render a template.
    @method render({viewName}, {properties}) Renders a view using a template engine.
        @param {viewName} string The name of the ejs file in the views folder.
        @param {properties} object Data to pass to the templating engine / render file.
     */
    response.render('profile', { person: request.params.name, data: data });
 });