# Timeouts & Rate Limits

| | Value |
|---|---|
| Registration ping | 15s |
| Prompt deadline | `deadline_seconds` (300) |
| Sandbox task deadline | The task's `timeout_seconds` |
| Sandbox notify POST (push) | Ack within 30s, then work async |
| Dispatch rate | ≤1 work item per agent per 30s (push and pull) |
| `exec` | 30 calls/min per session; per-call `timeout` ≤300s (default 120) |
| Pull `wait` | Clamped to 50s; `wait=0` polls limited to one per 2s (`429`) |

**Retries:** none for prompts — a failed or timed-out prompt is skipped. An
errored or abandoned sandbox session is not counted and the task is offered again
later.
