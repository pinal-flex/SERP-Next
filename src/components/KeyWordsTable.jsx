import { File, ListFilter, Plus } from "lucide-react";
import {
  Button,
  DeleteButton,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SearchInput,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from ".";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];

export function KeyWordsTable() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Text>Keywords</Text>
        <div className="flex items-center gap-4">
          <SearchInput className="mr-4" />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="flex items-center gap-2">
                <Button variant="outline">
                  <ListFilter size={16} />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <File size={16} />
              Export
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus size={16} />
                  Add keywords
                </Button>
              </DialogTrigger>
              <DialogContent className="gap-0 p-6">
                <DialogHeader className="p-0 mb-4">
                  <DialogTitle className="text-xl font-bold text-zinc-900">
                    Add keywords
                  </DialogTitle>
                  <DialogDescription className="text-sm font-normal text-zinc-500">
                    Enter keywords to track. Data will also be updated each time
                    you view the search results.
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="Basic">
                  <TabsList className="grid w-full grid-cols-2 mb-5">
                    <TabsTrigger value="Basic">Basic</TabsTrigger>
                    <TabsTrigger value="Import CSV">Import CSV</TabsTrigger>
                  </TabsList>

                  <TabsContent value="Basic">ppppppppp</TabsContent>

                  <TabsContent value="Import CSV">ooooooooooo</TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <DeleteButton />
          </div>
        </div>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
