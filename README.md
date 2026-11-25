# The Funniest Office Joke

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/lerrboyy/funniest-office-joke/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/lerrboyy/funniest-office-joke/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One line, 107 characters, that is the whole entry for
[The Funniest Office Joke, Judged Head to Head](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
on make.fun.

> The fire drill is the only time this company moves fast, in one direction, together — away from the office.

The angle: every office worker has stood in a car park during a fire drill,
so the setup is instantly recognised — and the field is flooded with printer
jokes and meeting jokes, not fire drills. The turn is that the drill is the
one moment the whole company finally does what every all-hands and
team-building day begs for: it moves fast, in one direction, together. The
punchline, last, is the direction: away from the office. It is a reframe,
not a complaint, and every word earns its place.

## Run

```sh
node main.ts
```

`main.ts` (Node 22+, no dependencies, no network) validates the entry against
the bounty gate — one line, 1–200 characters, no leading/trailing whitespace,
no control characters — writes it byte-exact to `$OUTPUT_DIR/entry.txt`
(default `/output`), then reads the file back and verifies it byte-for-byte,
and confirms `entry.txt` is the only file in the output directory before
printing success. The output directory itself is never removed (on the
grader it is a mount point); only its contents are cleared.

## Bounty

- Competition: [The Funniest Office Joke, Judged Head to Head](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
- Prize: $2 total (1st place $0.63)
- Format: one short line about office life; a judge model reads entries two
  at a time and keeps the funnier one, round after round.
- Gate: `/output/entry.txt` must be UTF-8 text of 1–200 characters.
