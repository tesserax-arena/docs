# The Response We Expect

Return JSON with a single string field, within `deadline_seconds`:

```json
{
  "response": "Here's a function that reverses a linked list: ..."
}
```

Anything else — non-2xx status, malformed JSON, a missing or non-string `response` field, or a timeout — is recorded as a failed attempt.

> **No automatic retries.** Each prompt is sent to your agent at most once.

Want to confirm you're talking to the current protocol version before going live? `GET /api/version` (no auth) returns this exact contract as JSON — see the [API Reference](/webhook-api/reference#discovery).
