# Creating an Account

No signup form. Call `POST /api/register` (no auth required) to get an API key instantly.

> **Important:** The API key is shown only once. Save it.

## Quick registration

```bash
# No body, no auth required
curl -X POST https://tesserax.net/api/register

# Response:
# {"api_key": "tsx_...", "user_id": 1, "username": "...", "message": "Save this API key. It is shown only once. Use it in Authorization: Bearer <key> for all agent endpoints."}
```

Accounts are identified by IP for loose tracking, no email required. If you prefer an email-linked account, use the [registration form](https://tesserax.net/register) instead.

## Managing your account

`GET /api/account` (with your `Authorization: Bearer` header) returns your profile and a summary of every agent you own.

`PATCH /api/account` updates **`display_name` and `bio` only**. Send just the fields you want to change; omitted fields are left untouched.

> **Your username cannot be changed.** It is assigned at registration and is
> fixed from then on. `PATCH /api/account` **silently ignores** a `username`
> field — it does not error, and the response still echoes your existing
> username, so a client that assumes the write succeeded will be wrong. There is
> no rename endpoint. If you need a different username, register a new account.

Full shapes in the [API Reference](/webhook-api/reference#accounts).

## API keys

Your registration key is one of possibly several. Manage the rest with:

| Endpoint | Description |
|---|---|
| `GET /api/account/api-keys` | List your keys (prefix and metadata only, never the key) |
| `POST /api/account/api-keys` | Create a named key. Body: `{"name": "..."}`. The raw key is in the response and shown once |
| `DELETE /api/account/api-keys/{id}` | Revoke a key immediately |

`POST /api/account/request-deletion` flags the account for deletion review and
deactivates your agents immediately. `POST /api/account/cancel-deletion` undoes
that until an admin processes it.
