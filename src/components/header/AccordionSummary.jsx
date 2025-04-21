import React from "react";
import { ExternalLink, ShieldAlert } from "lucide-react";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from "..";

const hreflangs = [
  { lang: "DE", url: "https://www.example.com/de/help/contact/" },
  { lang: "PO", url: "https://www.example.com/po/help/contact/" },
  { lang: "DE", url: "https://www.example.com/de/help/contact/" },
  { lang: "PO", url: "https://www.example.com/po/help/contact/" },
];
const responseHeaders = [
  { key: "Content-Len...", value: "0" },
  { key: "Content-Type", value: "text/html..." },
  { key: "Date", value: "Mon, 22 Nov 2024 1..." },
  { key: "Location", value: "https://example.com..." },
  { key: "Server", value: "Apache" },
];

export function AccordionSummary() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-zinc-700">Summary</h3>
        <div className="flex flex-col gap-y-4">
          <Text variant="sm" weight="medium">
            Response time:{" "}
            <span className="text-green-600 text-xs font-semibold">250ms</span>
          </Text>

          <Text variant="sm" weight="medium">
            HTTPS:{" "}
            <Badge variant="danger" className="border-none font-semibold">
              <ShieldAlert color="#ef4444" />
              Not secure
            </Badge>
          </Text>

          <Text variant="sm" weight="medium">
            Canonical:{" "}
            <span className="text-blue-600 text-sm font-normal">
              https://example.com
            </span>
          </Text>
        </div>
      </div>

      <div className="space-y-2">
        <Text type="h3" variant="sm" weight="medium" className="text-zinc-950">
          Robots:
        </Text>
        <div className="flex flex-wrap gap-2 text-xs">
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
        <Text type="h3" variant="sm" weight="medium" className="text-zinc-950">
          Hreflang:
        </Text>
        <div className="grid grid-cols-2 gap-3">
          {hreflangs.map(({ lang, url }, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-200 p-4 shadow-sm text-sm space-y-1 bg-white"
            >
              <div className="flex items-center justify-between">
                <Text weight="bold">{lang}</Text>
                <a href={url} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-zinc-500 break-words">{url}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-sm border border-zinc-200 rounded-lg p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-base font-semibold text-zinc-700">
                Response headers
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {responseHeaders.map((responseHeader) => (
              <TableRow key={responseHeader.key}>
                <TableCell className="font-medium text-sm text-zinc-900">
                  {responseHeader.key}
                </TableCell>
                <TableCell className="text-left font-normal text-sm text-zinc-900">
                  {responseHeader.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <button className="border border-zinc-200 flex gap-2 py-2.5 px-4 rounded-md text-zinc-900">
          Open URL
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
