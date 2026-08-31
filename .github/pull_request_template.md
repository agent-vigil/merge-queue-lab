## Agent Vigil pull request evidence

- AI assistance: assisted
- Linked issue: #REPLACE
- Known limitations: none known

Agent Vigil uses the policy from the base commit. It checks the exact Git range,
scope, fresh tests, integrity rules, and whether the changed regression test
fails against base source and passes against the candidate. The generated
hosted workflow runs those commands in one-shot candidate-only containers over
a private exact-commit clone. Local CLI runs retain the local operator's
execution boundary. This does not claim that a person reviewed or understands
the change.

