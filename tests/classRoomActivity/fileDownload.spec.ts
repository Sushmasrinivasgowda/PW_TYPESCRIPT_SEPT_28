import { test, expect } from '@playwright/test';
import { mkdir, access } from 'node:fs/promises';

test('Download a file without a Download button', async ({ page }) => {
  // Open the download page
  await page.goto('https://the-internet.herokuapp.com/download');

  // Create a folder to save the downloaded file
  const downloadFolder = '../../../downloads';
  await mkdir(downloadFolder, { recursive: true });

  // Wait for the download event before clicking the file link
  const downloadPromise = page.waitForEvent('download');

  // Click the link for the required file
  // Change 'file.json' if the actual filename is different
  await page.getByRole('link', {
    name: 'package.json',
    exact: true
  }).click();

  // Capture the download
  const download = await downloadPromise;

  // Save the file to the required path
//   const filePath = `${downloadFolder}/package.json`;
//   await download.saveAs(filePath);

//   // Assert that the file exists at the required path
//   await access(filePath);
const filePath = `${downloadFolder}/file.json`;

await download.saveAs(filePath);

  console.log('File downloaded successfully:', filePath);
});













