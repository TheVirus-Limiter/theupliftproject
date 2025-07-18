# How to Edit the Learn More Button in GitHub

## Quick Fix for the Learn More Button Hover Effect

### Step 1: Go to the File
1. In your GitHub repository, navigate to: `client/src/components/hero.tsx`
2. Click the **Edit** button (pencil icon)

### Step 2: Find the Learn More Button
Look for this code around **line 54-58**:
```jsx
<Button 
  onClick={scrollToAbout}
  variant="outline"
  className="border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-uplift-red hover:text-white transition-colors"
>
  Learn More
</Button>
```

### Step 3: Replace the className
**Replace the entire className with this:**
```jsx
className="border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-uplift-red hover:text-white hover:border-uplift-red transition-all duration-300"
```

### Step 4: Save and Commit
1. Scroll to the bottom
2. Add commit message: "Fix Learn More button hover effect"
3. Click **Commit changes**

### What This Does:
- ✅ Makes background red on hover (`hover:bg-uplift-red`)
- ✅ Makes text white on hover (`hover:text-white`)
- ✅ Keeps border red on hover (`hover:border-uplift-red`)
- ✅ Smooth transition effect (`transition-all duration-300`)

### Alternative: More Prominent Hover Effect
If you want an even more noticeable hover effect, use this className instead:
```jsx
className="border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-uplift-red hover:text-white hover:border-red-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
```

This adds a subtle scale effect and shadow on hover.

---

**The change will automatically deploy to theupliftproject.us within 2-3 minutes after committing.**