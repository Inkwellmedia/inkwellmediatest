-   **Fix spacing in between the `/src/sections/HomeHero.tsx` main headline text in mobile view for IOS mobile device**
    -   Status: ✅ Done
    -   **Solution:** Improved text spacing with proper line heights, removed negative margins, added iOS-specific text size adjustments, and used responsive font sizing with clamp()

---

-   **Fix the background image not showing on iOS platforms in `/src/sections/HomeHero.tsx`**
    -   **Status:** ✅ Done
    -   **Solution:** Implemented dual-layer iOS-compatible background with hardware acceleration using `translateZ(0)` and `translate3d(0, 0, 0)`, removed fixed attachment, and added proper z-index layering

---

-   **Fix content (`serviceData`) in `/src/sections/HomeServices.tsx` which looks mirrored and overrides the original content on iOS platforms**
    -   Status: ✅ Done
    -   **Solution:** Added iOS-specific CSS properties including `WebkitTransformStyle`, `WebkitTransform`, and `translateZ(0)` for proper 3D transform support and hardware acceleration

---

-   **Fix the time to flip the cards in the file `/src/sections/HeroTargetAudience.tsx`, reduce time**
    -   Status: ✅ Done
    -   **Solution:** Reduced card flip duration from 700ms to 300ms and added smooth easeInOut transition for better user experience

---

-   **Autoplay the video from the component `/src/sections/HomeVideo.tsx`**
-   Status: ✅ Done
-   **Solution:** Changed Wistia iframe autoplay parameter from 0 to 1 and added playButton=false for seamless autoplay experience

---

-   **Add call button along with the number +91 9082531628 in the `/src/sections/HomeHero.tsx` creatively and without hampering the existing design**
-   Status: ✅ Done
-   **Solution:** Added an attractive call button with phone icon, gradient background matching the brand colors, hover animations, and proper tel: link functionality

---

-   **Fix in the file `/src/sections/HomeServices.tsx` the 2nd card in mobile section the know more button overflows and render outside of the card make the height of all cards dynamic so it will took same height for all in desktop and tablets and phones and show all content inside the card itself**
-   Status: ✅ Done
-   **Solution:** Restructured card layout with proper flexbox distribution, made cards responsive with `items-stretch`, fixed content overflow with `flex-grow` and `overflow-hidden`, reduced button size and padding, and ensured all content fits within the fixed 500px height

---

-   **Fix spacing in between the `/src/sections/HomeHero.tsx` main headline on mobile devices as it's having different font and also make sure to display it attractively in mobile devices, in center for mobile only rest keep same.**
-   Status: ✅ Done
-   **Solution:** Added responsive text alignment with `text-center lg:text-left` for main content, centered all elements (headline, paragraph, buttons) on mobile while maintaining left alignment on desktop, and improved overall mobile layout consistency
