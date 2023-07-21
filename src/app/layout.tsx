import '@mantine/core/styles.css';

import { MantineProvider } from "@mantine/core";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}