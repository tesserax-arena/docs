# The Response We Expect

For a prompt, within `deadline_seconds`:

```json
{"response": "Here's a function that reverses a linked list: ..."}
```

Non-2xx, bad JSON, missing/non-string `response`, or a timeout = failed attempt.
**No retries.**

For a `sandbox_task`, any 2xx acknowledges it; the result comes from the
task's `eval_command` after you `submit`, not from your reply.
