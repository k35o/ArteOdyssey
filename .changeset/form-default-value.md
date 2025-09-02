---
"@k8o/arte-odyssey": minor
---

Add defaultValue support to form components

Add defaultValue prop to form components to enable uncontrolled usage:
- Checkbox: add defaultChecked prop
- NumberField: add defaultValue prop with proper state initialization  
- RangeField: add defaultValue prop
- Select: add defaultValue prop
- Radio: add defaultValue prop (defaultChecked for individual options)
- Autocomplete: add defaultValue prop with controlled/uncontrolled state management

This allows components to work in both controlled (value + onChange) and uncontrolled (defaultValue + onChange) modes for better flexibility.