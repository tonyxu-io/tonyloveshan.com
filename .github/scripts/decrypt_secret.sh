#!/bin/sh

# Decrypt the file
mkdir ./secrets

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_SECRETS" \
--output ./secrets/service_account_key.json secrets/service_account_key.json.gpg