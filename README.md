Step 1

Start watch mode:
```bash
pnpm  dev
```

Step 2

Running the test script:
```bash
pnpm test
```

This will print the version of vue. Which should now be `3.5.0`.

Step 3

Upgrade vue version to `3.5.1`:
```bash
pnpm up vue@3.5.1
```

Step 4

Run the test script again:
```bash
pnpm test
```

Expected to print `3.5.1`, but printed `3.5.0`.
