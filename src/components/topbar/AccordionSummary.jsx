import React from "react";
import { ExternalLink, ShieldAlert } from "lucide-react";
import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from "..";

const hreflangs = [
  {
    lang: "DE",
    url: `https://
    www.example.com/
    de/help/contact/`,
  },
  {
    lang: "PO",
    url: `https://
    www.example.com/
    po/help/contact/`,
  },
  {
    lang: "DE",
    url: `https://
    www.example.com/
    de/help/contact/`,
  },
  {
    lang: "PO",
    url: `https://
    www.example.com/
    po/help/contact/`,
  },
];
const responseHeaders = [
  { key: "Content-Length", value: "0" },
  { key: "Content-Type", value: "text/html" },
  { key: "Date", value: "Mon, 22 Nov 2024 18:46:59 GMT" },
  { key: "Location", value: "https://example.com" },
  { key: "Server", value: "Apache" },
];

export function AccordionSummary() {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-zinc-700">Summary</h3>
        <div className="flex flex-col gap-y-4">
          <Text  weight="medium">
            Response time:{" "}
            <Text variant="xs" weight="semibold" className="text-green-600">250ms</Text>
          </Text>

          <Text  weight="medium">
            HTTPS:{" "}
            <Badge variant="danger" className="border-none font-semibold">
              <ShieldAlert color="#ef4444" />
              Not secure
            </Badge>
          </Text>

          <Text  weight="medium">
            Canonical:{" "}
            <Text className="text-blue-600">
              https://example.com
            </Text>
          </Text>
        </div>
      </div>

      <div className="space-y-2">
        <Text type="h3"  weight="medium" className="text-zinc-950">
          Robots:
        </Text>
        <div className="flex flex-wrap gap-2">
          <Badge variant="danger" className="border-none">
            nofollow
          </Badge>
          <Badge variant="danger" className="border-none">
            noindex
          </Badge>
          <Badge variant="secondary" className="border-none">
            max-snippet:-1
          </Badge>
          <Badge variant="secondary" className="border-none">
            max-video-preview:-1
          </Badge>
          <Badge variant="secondary" className="border-none">
            max-image-preview:large
          </Badge>
        </div>
      </div>

      <div className="space-y-3">
        <Text type="h3" weight="medium" className="text-zinc-950">
          Hreflang:
        </Text>
        <div className="grid grid-cols-2 gap-3">
          {hreflangs.map(({ lang, url }, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-200 p-4 shadow-sm space-y-1 bg-white"
            >
              <div className="flex items-center justify-between">
                <Text weight="bold">{lang}</Text>
                <a href={url} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <Text className="text-zinc-500 break-words whitespace-pre-line">
                {url}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-sm border border-zinc-200 rounded-lg p-5">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="text-base font-semibold text-zinc-700 p-2"
              >
                Response headers
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {responseHeaders.map((responseHeader) => (
              <TableRow key={responseHeader.key}>
                <TableCell className="max-w-[113px] truncate p-2 text-sm font-medium text-zinc-900">
                  {responseHeader.key}
                </TableCell>
                <TableCell className="text-left max-w-[183px] truncate p-2 text-sm font-normal text-zinc-900">
                  {responseHeader.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <Button variant="outline" className="border border-zinc-200 flex gap-1.5 py-2 px-4 rounded-md text-zinc-900">
          Open URL
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
