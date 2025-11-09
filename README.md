# pw-bun-cli

A simple browser automation sample using Playwright and Puppeteer with Bun.

This project demonstrates:
- CLI-based browser automation
- Building standalone binaries with Bun
- Comparison between Playwright and Puppeteer bundling approaches

## Installation

```bash
bun install
```

For Playwright, install browsers:

```bash
bunx playwright install
```

## Usage

### Running from source

**Playwright version:**
```bash
bun index.ts <URL>
```

**Puppeteer version:**
```bash
bun index-puppeteer.ts <URL>
```

Example:
```bash
bun index.ts https://example.com
```

### Building standalone binaries

Build both versions:
```bash
bun run build
```

Or build individually:
```bash
bun run build:playwright  # Playwright version
bun run build:puppeteer   # Puppeteer version
```

### Running binaries

**Playwright version** (requires `node_modules`):
```bash
./pw-bun-cli-playwright https://example.com
```

**Puppeteer version** (standalone):
```bash
./pw-bun-cli-puppeteer https://example.com
```

## Differences

| Feature | Playwright | Puppeteer |
|---------|-----------|-----------|
| Binary size | ~58MB | ~70MB |
| Dependencies | Requires `node_modules` | Fully standalone |
| Distribution | Binary + dependencies | Single binary only |
| Build flag | `--external playwright` | Fully bundled |

## Output

Both versions will:
1. Launch a browser (non-headless by default)
2. Navigate to the specified URL
3. Display the page title
4. Save a screenshot as `screenshot.png`

This project was created using `bun init` in bun v1.3.1. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
