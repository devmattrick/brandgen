# BrandGen
BrandGen is a very simple CLI-based program used to help find names for companies of projects. It does this by
providing a set of tools to help you find the perfect name. The benefit of using BrandGen over websites like GoDaddy or
similar is that it ensures your name won't get stolen out from under you, as all queries are made directly to the
services themselves and not through a websie that may be logging your queries. It also allows for more flexibility and
extensibility than most existing services can provide.

## Checkers
A checker checks a specific service if a name is available. BrandGen comes out of the box with a number of checkers for
common services.

### Domain
Checks for domain name availability. By default checks for `.com`, `.org`, `.net`, and `.io`, but can be configured to check for any TLD.

### Twitter
Checks for Twitter username availability.

### GitHub
Checks for GitHub user/ organization name availability.

### Instagram
Checks for Instagram username availability.

### NPM Package
Checks for NPM Package name availability.

### NPM Organization
Checks for NPM Organization availability.

## Fuzzers
Fuzzers modify given names to slight variantions to make them more likely to be available.

### Domain Hack
Modifies names to include "domain hacks". For example, `reddit.com` produces `redd.it`.

### Prefix
Adds common prefixes to a name. For example, `example.com` becomes `theexample.com`.

### Remove Vowels
Removes vowels from the name. For example, `example.com` becomes `exmpl.com`.

### Suffix
Adds common suffixes to a name. For example, `example.com` becomes `examplehouse.com`.

### Username Domain
Adds a TLD to the end of a username. For example, `@example` becomes `@examplecom`.
