# Header Configuration Utility

This utility provides reusable header configurations for React Navigation screens in the PaymentUI app.

## Usage

### Basic Usage

```tsx
import { createHeaderConfig } from "@/utils/headerConfig";

<Stack.Screen
  options={createHeaderConfig({
    title: "Your Screen Title",
  })}
/>;
```

### Custom Configuration

```tsx
import { createHeaderConfig } from "@/utils/headerConfig";

<Stack.Screen
  options={createHeaderConfig({
    title: "Your Screen Title",
    backgroundColor: "#BEFF6B",
    tintColor: "black",
    arrowColor: "black",
    animation: "slide_from_right",
  })}
/>;
```

### Using Predefined Styles

```tsx
import { createHeaderConfig, headerStyles } from "@/utils/headerConfig";

<Stack.Screen
  options={createHeaderConfig({
    title: "Your Screen Title",
    ...headerStyles.light, // or headerStyles.dark, headerStyles.green
  })}
/>;
```

## Available Options

- `title`: The screen title (required)
- `backgroundColor`: Header background color (default: "#222222")
- `tintColor`: Header text color (default: "white")
- `arrowColor`: Back arrow color (default: "white")
- `animation`: Screen transition animation (default: "slide_from_bottom")

## Predefined Styles

- `headerStyles.dark`: Dark theme with white text
- `headerStyles.light`: Light theme with black text
- `headerStyles.green`: Green theme with black text
