# Website Testing Guide: How to Check the SEO Work Yourself

| Prepared by | For | Date | Purpose |
|---|---|---|---|
| REPLACE Company | REPLACE Name | REPLACE date | Simple, repeatable tests that show the website works for search engines, AI assistants and customers |

*Owner-facing document: plain language; no branch names, code details or repository links. Name the free tools; the reader finds them by searching their names.*

---

## Index

| # | Section | Time needed |
|---|---|---|
| 1 | Before you start | 2 minutes, once |
| 2 | Quick check after every website update | 5 minutes |
| 3 | Google search checks | 10 minutes, every 2 weeks |
| 4 | Rich details check (what Google reads behind the page) | 10 minutes, monthly |
| 5 | Speed check | 10 minutes, monthly |
| 6 | Security check | 3 minutes, monthly |
| 7 | Google Search Console checks | 15 minutes, monthly |
| 8 | AI assistant checks | 20 minutes, monthly |
| 9 | Google Business Profile and contact checks | 10 minutes, monthly |
| 10 | Testing calendar and what to do if a test fails | 5 minutes to read |
| A | Appendix: the page names you should see in Google | For reference |

---

## 1. Before you start

| Tip | Why |
|---|---|
| Use a **private / incognito window** for every search test. | Your own past searches change what Google shows you. |
| Test on a **phone** and a computer, with location on. | Most customers search on phones; local results depend on location. |
| Be patient with Google. | Changes show in **1 to 4 weeks**; positions build over **2 to 3 months**; AI assistants take longer. |
| Write each result down (date, test, result). | So you can compare month by month. |

## 2. Quick check after every website update

| # | Test | How | What you should see | Result |
|---|---|---|---|---|
| 1 | The website opens | Open it on a phone and a computer. | The home page loads; its main heading reads **REPLACE**. | ☐ |
| 2 | Every main page opens | Click every menu item and two or three services. | No error page. | ☐ |
| 3 | Page names | Look at the browser tab on each page. | Matches the [Appendix](#appendix). | ☐ |
| 4 | Business name | Header, footer, About page. | Always **REPLACE exact name**. | ☐ |
| 5 | Call and WhatsApp | Tap them (do not send or call). | Correct number; WhatsApp message starts with the business name. | ☐ |
| 6 | Sharing preview | Paste the home page link into a WhatsApp chat with yourself. | Preview with the logo, page name and description. | ☐ |
| 7 | Questions on pages | Open Home, Contact and two services. | "Frequently Asked Questions" with answers that open when tapped. | ☐ |
| 8 | Missing page | Add random letters to the end of the address. | A friendly "page not found" page. | ☐ |
| 9 | Phone action bar | On a phone, scroll any page. | Call / WhatsApp / Contact bar at the bottom, not covering the footer. | ☐ |

## 3. Google search checks

| # | Search for | What you should see | Result |
|---|---|---|---|
| 1 | **REPLACE business name** | The website, with the right page name and description. No old address. | ☐ |
| 2 | **site:** followed straight away by the website address | The list of stored pages; after a few weeks about **N** pages. | ☐ |

**Tracked keywords** (from the growth plan). Note the position in the **map box** and in the **web results**; write "not found" if not on the first two pages.

| # | Search | Page it should bring up | Map box | Web |
|---|---|---|---|---|
| 1 | REPLACE | Home | | |

## 4. Rich details check

**Google Rich Results Test** (paste a page address, press Test URL):

| Page | Should list | Result |
|---|---|---|
| Home | Local business, FAQ | ☐ |
| Contact | Local business, FAQ | ☐ |
| A service page | Breadcrumbs, FAQ | ☐ |

Yellow warnings for optional fields are fine; red errors are not. **Schema Markup Validator** shows the full detail: business with name, address, phone, hours, logo; Person on the Team page; Service on each service page.

## 5. Speed check

**PageSpeed Insights**: record the four scores for Home, Services, one service page and Contact, on Mobile and Desktop. Targets: Speed 90+, Accessibility 95+, Best Practices 100, SEO 100.

| Page | Device | Speed | Accessibility | Best Practices | SEO |
|---|---|---|---|---|---|
| Home | Mobile | | | | |

## 6. Security check

| # | Test | What you should see | Result |
|---|---|---|---|
| 1 | Padlock next to the address | "Connection is secure" | ☐ |
| 2 | **Security Headers** checker on the home page | Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy present (Content-Security-Policy may show as missing: planned later) | ☐ |
| 3 | Domain renewal date in the domain account | Auto-renew on; date beyond next month | ☐ |

## 7. Google Search Console checks

| # | Where | What good looks like | Result |
|---|---|---|---|
| 1 | Sitemaps (enter **sitemap.xml**) | Success; N pages discovered | ☐ |
| 2 | URL inspection → Test live URL | "URL is available to Google"; Request indexing for new pages | ☐ |
| 3 | Pages | Indexed count climbs towards N | ☐ |
| 4 | Performance → Search results (28 days) | Business and service searches appear; clicks rising | ☐ |
| 5 | Core Web Vitals | Good, or improving | ☐ |
| 6 | Enhancements | No errors | ☐ |
| 7 | Bing Webmaster Tools → Import from Search Console | Site and sitemap in Bing | ☐ |

## 8. AI assistant checks

Ask each question in ChatGPT, Gemini, Perplexity, Claude and Google's AI Overview, in a fresh chat. Record Yes / No / Partly. **Wrong details matter more than not being mentioned.**

| # | Question | What to record | ChatGPT | Gemini | Perplexity | Claude | Google AI |
|---|---|---|---|---|---|---|---|
| 1 | REPLACE business name details | Name, address, phone, hours correct? | | | | | |
| 2 | REPLACE service in area | Mentioned? | | | | | |

## 9. Google Business Profile and contact checks

| # | Test | What you should see | Result |
|---|---|---|---|
| 1 | Search the business on Google Maps | Name, address, phone, hours exactly as on the website | ☐ |
| 2 | Tap "Website" on the listing | Opens the official website | ☐ |
| 3 | Contact form | One agreed test enquiry marked "TEST" arrives | ☐ |
| 4 | Old web address (if any) | Opens the official website | ☐ |

## 10. Testing calendar and what to do if a test fails

| When | Tests |
|---|---|
| After every update | Section 2 |
| Every two weeks | Section 3 |
| Monthly | Sections 4 to 9 |

| If this fails | What it usually means | Who fixes it |
|---|---|---|
| Page does not open | The last update has a problem | SEO owner (roll back, then fix) |
| Page name in Google differs | Google has not refreshed yet, or rewrote it | SEO owner checks Search Console |
| Red errors in Rich Results Test | Structured data broken | SEO owner |
| Low speed score | Heavy photos or animations | Design team |
| Form does not deliver | Form not connected | Design team / SEO owner |
| AI gives wrong details | An outside listing is out of date | SEO owner with the owner |

---

## Appendix: the page names you should see in Google {#appendix}

| Page | Page name (title) |
|---|---|
| Home | REPLACE |
