/**
 * Created by apple on 2017/5/1.
 */
const env = process.env.SITE_ENV
let config = {
    API_BASE_URL: 'http://localhost:4000',
    GATE_API_BASE_URL: 'http://localhost:3000/api/v1',
    GATE_BASE_URL:'http://localhost:3000'

}
//
// if (env == 'staging') {
//     config = {
//         API_BASE_URL: 'https://www-dev.cachemoment.com',
//         GATE_API_BASE_URL: 'https://gate-dev.cachemoment.com/api/swagger',
//         GATE_BASE_URL:'https://gate-dev.cachemoment.com',
//
//     }
// } else if(env == 'production') {
//     config = {
//         API_BASE_URL: 'https://www.cachemoment.com',
//         GATE_API_BASE_URL: 'https://gate.cachemoment.com/api/v1',
//         GATE_BASE_URL:'https://gate.cachemoment.com',
//
//     }
// }
typeof window != 'undefined' && (window.CONFIG = config);

export default config;
