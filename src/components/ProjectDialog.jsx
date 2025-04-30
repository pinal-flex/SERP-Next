import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Separator,
  Text,
  Textarea,
} from ".";

export function ProjectDialog({
  children,
  title,
  description,
  footerText,
  footerButton,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] gap-0">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-zinc-500">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="project-name" className="text-right">
              Project name
            </Label>
            <Input
              id="project-name"
              placeholder="Placeholder"
              className="placeholder:text-zinc-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-domain" className="text-right">
              Project domain
            </Label>
            <Input
              id="project-domain"
              placeholder="domain.com"
              className="placeholder:text-zinc-500"
            />
            <Text className="text-zinc-500">
              Enter a root domain to track all subdomains{" "}
            </Text>
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-goal" className="text-right">
              Project goal
            </Label>
            <Textarea
              id="project-goal"
              className="resize-none w-full sm:w-[377px] h-full sm:h-[106px] placeholder:text-zinc-500"
              placeholder="Improve rankings for 'gifting' queries"
            />
          </div>
          <Separator />
          <DialogHeader>
            <DialogTitle>Competitor domains</DialogTitle>
            <DialogDescription className="text-zinc-500">
              This will be used for rank comparisons.
            </DialogDescription>
          </DialogHeader>
          <Input
            id="competitor-domain-1"
            placeholder="domain.com"
            className="placeholder:text-zinc-500"
          />
          <Input
            id="competitor-domain-2"
            placeholder="domain.com"
            className="placeholder:text-zinc-500"
          />
          <Input
            id="competitor-domain-3"
            placeholder="domain.com"
            className="placeholder:text-zinc-500"
          />
          <Button variant="ghost" className="w-1/8">
            Add
          </Button>
        </div>
        <DialogFooter className="flex items-center justify-between">
          {footerText && (
            <Text className="text-slate-600">
              {footerText}
            </Text>
          )}
          {footerButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

