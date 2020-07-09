from google.oauth2 import service_account
import google.auth.transport.requests

# Define the required scopes
scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/firebase.database",
  "https://www.googleapis.com/auth/spreadsheets.readonly"
]

# Authenticate a credential with the service account
credentials = service_account.Credentials.from_service_account_file(
    "secrets/service_account_key.json", scopes=scopes)

request = google.auth.transport.requests.Request()
credentials.refresh(request)
access_token = credentials.token
print(access_token)