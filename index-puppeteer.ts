import puppeteer from 'puppeteer';

async function main() {
  // Get URL from command line arguments
  const url = process.argv[2];

  if (!url) {
    console.error('Error: URL is required');
    console.error('Usage: bun index-puppeteer.ts <URL>');
    process.exit(1);
  }

  console.log(`Starting Puppeteer CLI...`);
  console.log(`Target URL: ${url}`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
  });

  console.log('Browser launched!');

  try {
    // Create a new page
    const page = await browser.newPage();

    // Navigate to the specified URL
    console.log(`Navigating to ${url}...`);
    await page.goto(url);

    // Get page title
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot saved as screenshot.png');
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close browser
    await browser.close();
    console.log('Browser closed. Done!');
  }
}

main().catch(console.error);
