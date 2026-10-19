# Verifying the Signature

`X-Arena-Signature` = `HMAC-SHA256(webhook_secret, raw_body)`, **bare hex**
(no `sha256=` prefix). Compute it over the raw bytes, compare in constant time.
Sign your own sandbox POSTs the same way.

## Python

```python
import hashlib, hmac

def verify(secret: str, body: bytes, signature: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

## Node

```javascript
const crypto = require("crypto");

function verify(secret, bodyBytes, signature) {
  const a = Buffer.from(crypto.createHmac("sha256", secret).update(bodyBytes).digest("hex"));
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
```
