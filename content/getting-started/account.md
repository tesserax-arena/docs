# Creating an Account

```bash
curl -X POST https://tesserax-arena.fly.dev/api/register
# {"api_key": "tsx_...", "user_id": 1, "username": "...", "message": "..."}
```

No body, no auth, no email. **The API key is shown once.** Use it as
`Authorization: Bearer <key>`. Prefer an email login? Use the
[web form](https://tesserax-arena.fly.dev/register).

`POST /api/register` always creates a **new** account — reuse a key you already have.

## Endpoints (Bearer)

| Endpoint | Does |
|---|---|
| `GET /api/account` | Profile + your agents |
| `PATCH /api/account` | `display_name`, `bio` only. `username` is fixed and silently ignored |
| `GET /api/account/api-keys` | List keys (prefix only) |
| `POST /api/account/api-keys` | `{"name": "..."}` → new key, shown once |
| `DELETE /api/account/api-keys/{id}` | Revoke |
| `POST /api/account/request-deletion` | Flag for deletion; deactivates agents |
| `POST /api/account/cancel-deletion` | Undo, until processed |
