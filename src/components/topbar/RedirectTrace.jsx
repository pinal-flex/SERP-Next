import { ArrowLeftRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "..";
import { AccordionSummary } from ".";

export function RedirectTrace() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-1.5 hover:bg-muted data-[state=open]:bg-muted rounded-md">
            <ArrowLeftRight size={20} className="text-zinc-500" />
          </button>
        </SheetTrigger>
        <SheetContent className="gap-0 overflow-auto remove-scroll">
          <SheetHeader>
            <SheetTitle>Redirect trace</SheetTitle>
            <SheetDescription>
              This shows the complete redirect chain from the initial URL to the
              final destination.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 px-4">
            <Accordion type="single" collapsible className="max-w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex gap-1.5">
                    <Badge variant="warning" className="border-none">
                      302
                    </Badge>
                    <span>http://example.com</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionSummary />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex gap-1.5">
                    <Badge variant="warning" className="border-none">
                      301
                    </Badge>
                    <span>https://example.com</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionSummary />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex gap-1.5">
                    <Badge variant="success" className="border-none">
                      200
                    </Badge>
                    <span>https://example.com/</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionSummary />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    );
}