/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    // distDir: 'build',
    reactStrictMode: true,
};
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    env: {
        emailjs_server: 'service_29al46l',
        emailjs_template: 'template_lpc48he',
        emailjs_user: 'user_ZvmIDRZKN0Dpu9EnexPlA',
    },
};
