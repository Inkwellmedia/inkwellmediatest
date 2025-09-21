-   **Fix spacing in between the `/src/sections/HomHero.tsx` main headline text in mobile view**
    -   Status: ✅ Done
    -   **Solution:** Reduced margin-top from `mt-3` to `mt-1` for mobile and adjusted `marginTop` from `-0.15em` to `-0.1em` for better spacing

---

-   **Fix the background image not showing on iOS platforms in `/src/sections/HomHero.tsx`**
    -   **Reason:** iOS does not support `background-attachment: fixed` for background images.
    -   **Status:** ✅ Done
    -   **Solution:** Added iOS fallback background div with `background-attachment: scroll` and proper z-index layering

---

-   **Fix content (`serviceData`) in `/src/sections/HomeServices.tsx` which looks mirrored and overrides the original content on iOS platforms**
    -   Status: ✅ Done
    -   **Solution:** Added iOS-specific CSS properties including `WebkitTransformStyle`, `WebkitTransform`, and `translateZ(0)` for proper 3D transform support and hardware acceleration
