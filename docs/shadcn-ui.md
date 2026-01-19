# shadcn/ui Best Practices

## Popover/Select in Dialogs

Add `modal={true}` to Popover or Select components inside Dialogs to prevent scroll issues:

```tsx
<Dialog>
  <Select modal={true}>
    {/* ... */}
  </Select>
</Dialog>
```

## Dialog Actions with Async Operations

Never use `AlertDialogAction` or `DialogClose` for actions that need loading states or error handling.

```tsx
// Good - use controlled dialog with regular Button
const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogFooter>
    <Button
      onClick={async () => {
        await handleSubmit();
        setOpen(false);
      }}
      disabled={isLoading}
    >
      {isLoading ? "Saving..." : "Save"}
    </Button>
  </DialogFooter>
</Dialog>

// Bad - auto-closes before async completes
<AlertDialogAction onClick={handleSubmit}>Save</AlertDialogAction>
```

## Resetting Select Components

Use `key` prop to force remount when programmatically clearing a Select:

```tsx
<Select key={value ?? "no-selection"} value={value} onValueChange={setValue}>
  {/* ... */}
</Select>
```
