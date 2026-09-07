# Push — one command left for you to run

## Where this got to

**Original problem:** every push failed with
`ssh: connect to host github.com port 22: Operation timed out`.
Not your credentials — your network was blocking SSH on port 22. Autopush reported
it as "check credentials", which sent us looking in the wrong place.

**What I changed:**

1. **The remote now uses GitHub's SSH-over-443 endpoint.** Edited directly in
   `.git/config` (a plain file — no git command, so no lock left behind):
   `ssh://git@ssh.github.com:443/uzairqamarr-dot/Pharmacist-Prescribing.git`
   Same SSH key, same repo, a port almost nothing blocks.
2. **Autopush now tells the truth when a push fails** — it distinguishes network
   from authentication from behind-the-remote, instead of blaming credentials for
   everything. Tested against your exact error output.

**Result:** the timeout is gone. It now reaches GitHub on port 443. One thing left:

```
Host key verification failed.
```

`ssh.github.com` is a different hostname from `github.com`, so your `known_hosts`
doesn't have its key yet, and SSH won't trust an unknown host non-interactively.

I can't fix this for you — `~/.ssh` is off limits to me, and I shouldn't be
deciding which host keys your machine trusts anyway.

---

## The fix — verify, then trust

**Step 1. Fetch the key and look at its fingerprint.**

```
ssh-keyscan -p 443 ssh.github.com 2>/dev/null > /tmp/gh443.pub && ssh-keygen -lf /tmp/gh443.pub
```

**Step 2. Check what it prints against GitHub's published fingerprints.** At least
one line must match exactly:

| Type | Fingerprint |
|---|---|
| Ed25519 | `SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU` |
| RSA | `SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s` |
| ECDSA | `SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM` |

Source: [GitHub Docs — SSH key fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints).
`ssh.github.com` serves the same host keys as `github.com`, so these are the values
to expect.

**If nothing matches, stop.** Don't continue — that would mean something is
intercepting the connection, which on a network already blocking port 22 is worth
taking seriously.

**Step 3. If it matches, trust it and push.**

```
mkdir -p ~/.ssh && cat /tmp/gh443.pub >> ~/.ssh/known_hosts
cd ~/Pharmacist-Prescribing && git push
```

That's it. Autopush works normally from then on.

## Faster if you'd rather not verify by hand

```
cd ~/Pharmacist-Prescribing && GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=accept-new" git push
```

Accepts the key on first use and pushes in one go. Fine on a network you trust;
the verification route above is better on one you don't — and you're on a network
that's already doing something unusual.

## What's waiting

**Five commits**, all committed locally and safe. Latest is **v2026.09.07a**:
310 cards, 148 questions, up from 252 / 128.

- **Weight management 4 → 19 cards** — the app's weakest topic
- **Lipids +12**, **diabetes +14**, **hypertension +9**, **renal reasoning +7**
- Four cards that contradicted the Queensland protocols, corrected before shipping
- A card naming which content is protocol-checked and which rests on a classmate's notes

Once the push lands, open the app and tap the version chip — it should read
**v2026.09.07a**.

## If it still fails

Tether to your phone and push over mobile data. If that works, it confirms the
wifi is the problem and the port-443 remote is the right permanent fix.
