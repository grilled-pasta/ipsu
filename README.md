# IPSU
Информационен Портал за Социални Услуги

## Development
```bash
# run the proxy
ngrok http http://localhost:3000
                                               
> Forwarding                    https://....ngrok-free.app -> ...

# in .env set WEBHOOK_URL
WEBHOOK_URL=https://....ngrok-free.app

# run the bot
yarn start
```