from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Wait for server to be ready (a simple wait)
    page.wait_for_timeout(3000)

    # Go to home page
    try:
        page.goto("http://localhost:5173")

        # Take screenshot of home page
        page.screenshot(path="verification/home_page.png", full_page=True)
        print("Home page screenshot taken.")

        # Click on a car (the first one "Explore Now" or card)
        # Using a selector for the first "Explore Now" button in the carousel
        page.click("text=Explore Now")

        # Wait for navigation
        page.wait_for_url("**/car/*")

        # Take screenshot of details page
        page.screenshot(path="verification/details_page.png", full_page=True)
        print("Details page screenshot taken.")

    except Exception as e:
        print(f"Error: {e}")
        # Try to print page content if error
        # print(page.content())

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
