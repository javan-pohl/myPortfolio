---
title: 'Code4Denver COVID-19 Site'
date: '2021-04-10'
---

Currently volunteering with the <a href="https://codefordenver.org/#/" target="_blank">Code for Denver group</a> on their <a href="https://accessibility-covid-dashboard.netlify.app/" target="_blank">COVID-19 summary website</a>.

### BarChart Mobile Optimization Updates  (4/12/21)

**I refactored the CSS code to make the charts more accessible on mobile devices.** As it was, the bar charts had the following issues on smaller screens:

1. The **bars would become transparent** (the cause of which, I discovered, was that the 1px white border around each bar element was overlapping the primary colors of the neighboring bar elements. Trickier still was what CSS property I needed to change to get rid of this border. Turns out that on SVG shapes, the border is listed as **'stroke'**.)
2. The **x-axis labels were overlapping** and becoming unreadable. (This I fixed by changing the format of the dates from July 1, 2021 to 7/1 and slightly reducing the font size.)
3. General **CSS spacing issues** (margin, padding, width, etc) resulted in excessive spacing that was not ideal for mobile viewing. (I fixed these issues by adding several **CSS Media Breakpoints**, CSS formatting that will only apply to display resolutions under or over a particular width. The main fix involved increasing the width of the graph cards to take up approximately 95% of the screen width.)

**Before:**

<img
  src="/images/covid-19-site-before.png"
  alt="covid 19 before image"
/>

**After:**

<img
  src="/images/covid-19-site-after.png"
  alt="covid 19 after image"
/>

**Group:** <a href="https://codefordenver.org/#/" target="_blank">https://codefordenver.org/#/</a>
</br>
**Github:** <a href="https://github.com/javan-pohl/cdphe-accessible-covid19" target="_blank">https://github.com/javan-pohl/cdphe-accessible-covid19</a>
</br>
**Website:** <a href="https://accessibility-covid-dashboard.netlify.app/" target="_blank">https://accessibility-covid-dashboard.netlify.app/</a>
