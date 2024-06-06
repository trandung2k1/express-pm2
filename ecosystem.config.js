module.exports = {
    apps: [
        {
            name: 'express-app',
            script: './index.js',
            instances: 2,
            autorestart: true,
            watch: true,
            exec_mode: 'cluster',
            max_memory_restart: '1G',
            log: './logs/info.log',
            exp_backoff_restart_delay: 100,
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
