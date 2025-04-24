import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from ".";

export function DeleteButton() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-red-500 hover:bg-none">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              data and remove it from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" className="bg-red-500 text-white">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
}